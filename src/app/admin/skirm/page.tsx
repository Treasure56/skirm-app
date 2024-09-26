import { PageTitle } from "@/components/admin";
import Table from "./Table";
import Search from "@/components/admin/Search";
import TeamFilter from "@/components/admin/TeamFilter";
import DateFilter from "@/components/admin/DateFilter";
import { Suspense } from "react";

export default function Page() {
    return (
        <div className="flex flex-col gap-6">
            <PageTitle>Skirm</PageTitle>  
            <div className="flex justify-between">
                <Suspense>
                    <Search />
                </Suspense>
                <div className="flex gap-2">
                    <Suspense>
                    <DateFilter />
                    <TeamFilter />
                    </Suspense>
                </div>
            </div>
            <Table />
        </div>
    );
}