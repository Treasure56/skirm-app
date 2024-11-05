"use server"

import { MatchDetailed } from "@/skirm-app-shared";
import { ActionApiResponse, Paginated } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchMatches(query=""):Promise<ActionApiResponse<Paginated<MatchDetailed>>>{
    
    
    try {
        const req = await ServerRequest.get(apis.admin.getAllMatches+query, {
            next: {tags: [tags.match]}
        })
        const res = await req?.json()
        if(res.status == 200) return res.data
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}