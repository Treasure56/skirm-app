import { PageTitle } from "@/components/admin";
import Table from "./Table";
import LeagueFilter from "@/components/admin/LeagueFilter";
import Search from "@/components/admin/Search";
import CreateClub from "./CreateClub";
import { HiPlus } from "react-icons/hi2";
import { Suspense } from "react";
import { AppPageProps } from "@/types/basicTypes";
import { buildUrlQuery } from "@/functions/helpers";

export default function Page({searchParams}:AppPageProps) {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between">
                <PageTitle>Clubs</PageTitle>
            <CreateClub>
               <button className="btn-primary p-2 truncate">Create Club <HiPlus  className="text-2xl text-light"/></button>
               </CreateClub>
            </div>
            <div className="flex justify-between items-center">
                <Search />
               <Suspense><LeagueFilter /> </Suspense>
             
            </div>
            <Table  query={(buildUrlQuery(searchParams))}/>
        </div>
    );
}