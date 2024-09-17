import { PageTitle } from "@/components/admin";
import Table from "./table";
import Search from "@/components/admin/Search";
import LeagueFilter from "@/components/admin/LeagueFilter";

export default function Page() {
    return (
        <div className="flex flex-col gap-6">
            <PageTitle>Marches</PageTitle>
            <div className="flex justify-between items-center">
                <Search />
                <LeagueFilter />
               
            </div>
            <Table />
        </div>
    );
}