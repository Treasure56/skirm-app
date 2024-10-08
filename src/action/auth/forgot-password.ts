"use server";

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/skirm-app-shared/basicTypes";
import { apis, validators } from "@/utils";
import { ClientRequest } from "@/utils/clientFetch";
import { z } from "zod";

const schema = z.object ({
    email: validators.email
})

const passwordSchema = z.object ({
    email: validators.email,
    newPassword: validators.password,
    confirmPassword: validators.password,
    resetCode: z.string().min(6, "invalid otp").trim().max(6, "invalid otp")
})


type FormType = z.infer<typeof schema>;
type PasswordFormType = z.infer<typeof passwordSchema>;

type BasicFormType = FormType & PasswordFormType & {
    resetCode?: string;
  };
export async function forgotPassword(_:ActionResponse, formData:FormData):Promise<ActionResponse>{
    const data = formDataToObject<BasicFormType>(formData)
   

    if(!data.email) return {error:"Something went wrong"}

   try {
    if(data.resetCode != undefined){
     // }else if(data.password && data.confirmPassword){
        const validate = passwordSchema.safeParse(data)
        console.log(1, data)
        if(!validate.success) return {fieldErrors:validate.error.flatten().fieldErrors}
        if(data.newPassword !== data.confirmPassword) return {error:"Passwords do not match"}
        const req = await ClientRequest.post(apis.auth.resetPassword,data)
        const res:ApiResponse = await req.json()
        if(res.status == 200){
            return {success:"password changed, redirecting to login", data: 2}
        }else{
            return {error:res.data}
        } 
    }else{
        const validate = schema.safeParse(data)
        if(!validate.success) return {fieldErrors:validate.error.flatten().fieldErrors}
        const req = await ClientRequest.post(apis.auth.forgotPassword,data)
        const res:ApiResponse = await req.json()
        if(res.status == 200){
            return { success:res.data, data: 1}
        }else{
            return {error:res.data}
        } 
        
    }
    
   } catch (error) {
    console.error(error)
    return {error:"Something went wrong"}
    
   }
}

