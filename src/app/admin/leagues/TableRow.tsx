/* eslint-disable @next/next/no-img-element */
import { League } from "@/skirm-app-shared";
import { formatDistance } from "date-fns";

export default function TableRow({createdAt, endDate, logo, startDate, title}:League) {
    const now = new Date();
    return (
        <div className="grid grid-cols-4 text-sm py-2 items-center text-neutral-400">
      <div className="flex gap-1 items-center">
        <img src={logo} className="w-10 object-cover" alt="" />
        <p>
          {title} 
        </p>
      </div>
      <p>{formatDistance(startDate, now, { addSuffix: true, })}</p>
      <p className="line-clamp-1">{formatDistance(endDate, now, { addSuffix: true, })}</p>
      <p>{formatDistance(createdAt, now, { addSuffix: true, })}</p>
      <div className="flex justify-start">
      </div>
    </div>
    );
}