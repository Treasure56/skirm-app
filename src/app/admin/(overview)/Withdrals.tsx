import { HiChevronRight } from "react-icons/hi2";
import Link from "next/link";
import WithdrawalsTableRow from "./WithdrawalsTableRow";
import { dummyWithdrawalsDetailed } from "@/skirm-app-shared/withdrawal";

export default function WithrawalsTable() {
  const withraws = dummyWithdrawalsDetailed
  return (
    <div className="bg-light p-4 flex flex-col shadow  rounded-xl">
      <div className="flex justify-between">
        <h1 className="text-md font-bold ">Withdrawals</h1>
        <Link
          className="flex items-center text-sm text-primary-dark font-semibold"
          href="/admin/user"
        >
          View all
          <HiChevronRight />
        </Link>
      </div>

      <div className="flex flex-col py-6 divide-y-2">
        <div className="grid grid-cols-3 text-sm font-semibold bg-gray-200 p-2 rounded">
          <p>Bank Name</p>
          {/* <p>Acct Number</p> */}
          <p>Acct Name</p>
          <p></p>
          <p>Created</p>
        </div>
        {withraws.map((withraw) => (
          <WithdrawalsTableRow key={withraw._id} {...withraw} />
        ))}
       
      </div>
    </div>
  );
}
