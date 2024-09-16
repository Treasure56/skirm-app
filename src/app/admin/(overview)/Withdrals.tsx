import { HiChevronRight } from "react-icons/hi2";
import Link from "next/link";
import WithdrawalsTableRow from "./WithdrawalsTableRow";
import { withdrawalDummys } from "@/utils/dummy";

export default function WithrawalsTable() {
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
        <div className="grid grid-cols-4 text-sm font-semibold bg-gray-200 p-2 rounded">
          <p>Bank Name</p>
          {/* <p>Acct Number</p> */}
          <p>Acct Name</p>
          <p></p>
          <p>Created</p>
        </div>
        {withdrawalDummys.map((withdrawalDummy) => (
          <WithdrawalsTableRow key={withdrawalDummy._id} {...withdrawalDummy} />
        ))}
       
      </div>
    </div>
  );
}
