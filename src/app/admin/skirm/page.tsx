import { PageTitle } from "@/components/admin";
import Table from "./Table";

export default function Page() {
    return (
        <div className="flex flex-col gap-6">
            <PageTitle>Skirm</PageTitle>
            <Table />
        </div>
    );
}