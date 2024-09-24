/* eslint-disable @next/next/no-img-element */

import { WithdrawalDetailed } from "@/skirm-app-shared";
import { formatDistance, subMinutes } from "date-fns";
const now = new Date();

const threeMinutesAgo = subMinutes(now, 3);

const timeDifference = formatDistance(threeMinutesAgo, now, { addSuffix: true });


export default function WithdrawalsTableRow({ bankAccountName, bankAccountNumber, bankName,}:WithdrawalDetailed) {
    return (
        <div className="grid grid-cols-3 text-sm py-4 items-center text-neutral-400">
       <div className="flex flex-col">
       <p>{bankName}</p>
       <p>{bankAccountNumber}</p>
       </div>
         <p>{bankAccountName}</p>
         {/* <p className="btn-staus-pending">{isApproved}</p> */}
         <p>{timeDifference}</p>
        </div>
    );
}


