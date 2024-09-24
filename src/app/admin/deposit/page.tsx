import { PageTitle } from "@/components/admin";
import Table from "./Table";
import Search from "@/components/admin/Search";
import DepositFilter from "@/components/admin/DepositFilter";

export default function Page() {
    return (
        <div className="flex flex-col gap-6">
            <PageTitle>Deposit</PageTitle>
            <div className="flex justify-between">
                <Search />
                <DepositFilter />
            </div>
            <Table />
        </div>
    );
}