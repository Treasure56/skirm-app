"use server"

import { League } from "@/skirm-app-shared";
import { ActionApiResponse, Paginated } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchLeague(query=""):Promise<ActionApiResponse<Paginated<League>>>{
    
    try {
        const req = await ServerRequest.get(apis.admin.getAllLeagues+query, {
            next: {tags: [tags.league]}
        })
        const res = await req?.json()
        if(res.status == 200) return res.data
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}