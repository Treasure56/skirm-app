"use server"

import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, appCookies, paths, tags, validators } from "@/utils";
import { ClientRequest } from "@/utils/clientFetch";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { z } from "zod";
import { formDataToObject } from "@/functions/helpers";
const schema = z.object ({
    username: validators.username,
    email: validators.email,
    password: validators.password,
    confirmPassword: validators.password,
    accessCode: validators.accessCode
})

type FormType = z.infer<typeof schema>

export async function register(_:ActionResponse, formData:FormData):Promise<ActionResponse> {
    let success = false
    const data = formDataToObject<FormType>(formData)
    const validate = schema.safeParse(data)
    if(!validate.success) return {fieldErrors:validate.error.flatten().fieldErrors}

    if(data.password !== data.confirmPassword) return {fieldErrors:{confirmPassword:["Passwords do not match"]}}

    try {
        const req = await ClientRequest.post(apis.auth.register,data)
        const res:ApiResponse = await req.json()
        if(res.status == 201){
            revalidateTag(tags.admin)
            const {set} = cookies()
            set(appCookies.accessToken, res.data.token, {maxAge: 60 * 60 * 24, sameSite: 'strict', path: '/'})
            success = true
        }else{
            return {error:res.data}
        }
        
    } catch (error) {
        console.error(error)
        return {error:"Something went wrong"}
    }

    if(success) redirect(paths.admin, RedirectType.replace) 
    return {}


}

