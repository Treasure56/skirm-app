/* eslint-disable @next/next/no-img-element */

import { Withdrawal } from "@/skirm-app-shared";
import { formatDistance, subMinutes } from "date-fns";
const now = new Date();

const threeMinutesAgo = subMinutes(now, 3);

const timeDifference = formatDistance(threeMinutesAgo, now, { addSuffix: true });


export default function WithdrawalsTableRow({ bankAccountName, bankAccountNumber, bankName, isApproved}: Withdrawal) {
    return (
        <div className="grid grid-cols-4 text-sm py-4 items-center text-neutral-400">
       <div className="flex flex-col">
       <p>{bankName}</p>
       <p>{bankAccountNumber}</p>
       </div>
         <p>{bankAccountName}</p>
         <p className="bg-yellow-200 rounded-[35px] w-fit py-1 px-2 text-dark">{isApproved}</p>
         <p>{timeDifference}</p>
        </div>
    );
}


