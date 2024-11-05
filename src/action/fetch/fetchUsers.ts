"use server"

import { UserWithWallet } from "@/skirm-app-shared";
import { ActionApiResponse, Paginated } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchUsers(query=""):Promise<ActionApiResponse<Paginated<UserWithWallet>>>{
    console.log({query});
    
    
    try {
        const req = await ServerRequest.get(apis.admin.users+query, {
            next: {tags: [tags.users]}
        })
        const res = await req?.json()
        console.log(res)
        if(res.status == 200) return res.data
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}