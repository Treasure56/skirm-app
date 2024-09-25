import { dummyWithdrawalsDetailed } from "@/skirm-app-shared/withdrawal";
import TableRow from "./TableRow";

export default function Table() {
    const withdrawals = dummyWithdrawalsDetailed
    return (
        <div className="bg-light p-4 flex flex-col shadow  rounded-xl overflow-x-auto">
        <div className="flex flex-col divide-y-2 min-w-[700px]">
          <div className="grid grid-cols-8 text-sm font-semibold bg-gray-200 p-2 rounded">
            <p>User</p>
            <p>Bank Name</p>
            <p>Account Name</p>
            <p>Amount</p>
            <p>Status</p>
            {/* <p>Message</p> */}
            <p>Approved Date</p>
            <p>Date</p>
            <p>Action</p>
          </div>
          {
              withdrawals.map(withdrawal => (
                  <TableRow key={withdrawal._id} {...withdrawal}/>
              ))
          }
         
        </div>
      </div>
    );;
}