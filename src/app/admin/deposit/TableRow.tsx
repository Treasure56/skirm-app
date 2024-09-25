"use client"
/* eslint-disable @next/next/no-img-element */
import { formatNumber } from "@/components/functions/FormatNumber";
import { DepositDetailed} from "@/skirm-app-shared";
import { Avatar } from "@radix-ui/themes";
import { formatDistance } from "date-fns";

export default function TableRow({amount, createdAt,  user,}:DepositDetailed) {
    const now = new Date();
    return (
        <div className="grid grid-cols-3 text-sm py-2 items-center text-neutral-400">
        <div className="flex gap-1 items-center">
        <Avatar
          variant="solid"
          color="gray"
          fallback={user.userName[0].toUpperCase() ?? "?"}
          size="3"
          radius="full"
          className="object-cover"
          src={user.image}
        />
        <p>
          {user.userName} 
        </p>
      </div>
      <p>{formatNumber(amount, true)}</p>
      <p>{formatDistance(createdAt, now, { addSuffix: true, })}</p>
    </div>
    );
}