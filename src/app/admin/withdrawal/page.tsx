import { PageTitle } from "@/components/admin";
import Table from "./Table";
import Search from "@/components/admin/Search";
import WithdrawFilter from "@/components/admin/WithdrawFilter";
import { AppSelect } from "@/components/form";

export default function Page() {
    return (
        <div className="flex flex-col gap-6">
            <PageTitle>Withdrawals</PageTitle>
            <div className="flex justify-between">
                <Search />
                <div className="flex gap-3">
                    <WithdrawFilter />
                    <AppSelect options={["all", "Approved", "Pending", "Declined"]}  name="filter"/>
                </div>
            </div>
            <Table />
        </div>
    );
}