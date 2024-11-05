"use server"

import { ClubDetailed } from "@/skirm-app-shared";
import { ActionApiResponse, Paginated } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchClubs(query=""):Promise<ActionApiResponse<Paginated<ClubDetailed>>>{
    // console.log({query});
    
    
    try {
        const req = await ServerRequest.get(apis.admin.getAllClubes+query, {
            next: {tags: [tags.clubs]}
        })
        const res = await req?.json()
        // console.log(res)
        if(res.status == 200) return res.data
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}