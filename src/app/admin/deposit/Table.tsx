import TableRow from "./TableRow";
import { dummyDepositsDetailed } from "@/skirm-app-shared/deposit";

export default function Table() {
    const deposits = dummyDepositsDetailed;
    return (
        <div className="bg-light p-4 flex flex-col shadow  rounded-xl overflow-x-auto">
        <div className="flex flex-col divide-y-2 min-w-[700px]">
          <div className="grid grid-cols-3 text-sm font-semibold bg-gray-200 p-2 rounded">
            <p>User</p>
            <p>Amount</p>
            <p>Date</p>
          </div>
          {
              deposits.map(deposit => (
                  <TableRow key={deposit._id} {...deposit}/>
              ))
          }
         
        </div>
      </div>
    );
}
