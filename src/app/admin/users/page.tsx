import { PageTitle } from "@/components/admin";
import Table from "./Table";
import Search from "@/components/admin/Search";
import { buildUrlQuery } from "@/functions/helpers";
import { AppPageProps } from "@/types/basicTypes";
import Filter from "./Filters";

export default function Page({searchParams}:AppPageProps) {
    return (
        <div className="flex flex-col gap-6">
            <PageTitle>Users</PageTitle>
            <div className="flex justify-between items-center">
                <Search />
                <Filter />
            </div>
            <Table query={buildUrlQuery(searchParams)} />
        </div>
    );
}