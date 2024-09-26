import { PageTitle } from "@/components/admin";
import Search from "@/components/admin/Search";
import WithdrawFilter from "@/components/admin/WithdrawFilter";
import { Suspense } from "react";
import Table from "./Table";

export default function Page() {
    return (
        <div className="flex flex-col gap-6">
            <PageTitle>Withdrawals</PageTitle>
            <div className="flex justify-between max-md:flex-col gap-2">
                <Search />
                <div className="flex gap-3">
                    <Suspense>

                    <WithdrawFilter />
                    </Suspense>
                </div>
            </div>
            <Table />
        </div>
    );
}