/* eslint-disable @next/next/no-img-element */
import { ClubDetailed } from "@/skirm-app-shared";
import { formatDistance } from "date-fns";

export default function TableRow({country, createdAt, homeLeague, name, logo, state }:ClubDetailed) {
    const now = new Date();
    return (
        <div className="grid grid-cols-5 text-sm py-2 items-center text-neutral-400">
        <div className="flex gap-1 items-center">
          <img src={logo} className="w-10 object-cover" alt="" />
          <p>
            {name} 
          </p>
        </div>
        <p>{country}</p>
        <p>{state}</p>
        <p>{homeLeague.title}</p>
        <p>{formatDistance(createdAt, now, { addSuffix: true, })}</p>
      </div>
    );
}