import { PageTitle } from "@/components/admin";
import Table from "./Table";
import Search from "@/components/admin/Search";
import { AppSelect } from "@/components/form";

export default function Page() {
    return (
        <div className="flex flex-col gap-6">
            <PageTitle>Users</PageTitle>
            <div className="flex justify-between items-center">
                <Search />
                <AppSelect options={[ "All","verified", "unverified", "Declined"]}  name=""/>
            </div>
            <Table />
        </div>
    );
}