/* eslint-disable @next/next/no-img-element */
import { SkirmDetailed } from "@/skirm-app-shared";
import { NotionObject } from "@/skirm-app-shared/classes";
import { Avatar } from "@radix-ui/themes";
import { formatDistance } from "date-fns";
import Modal from "./Modal";

export default function TableRow({
 createdAt,
 guest, 
 owner,
 match,
 ...skirm
}: SkirmDetailed) {
    const now = new Date();

    const ownerNotion = new NotionObject(skirm.ownerNotion.code);
  return (
    <div className="grid grid-cols-6 text-sm py-2 items-center text-neutral-400">
      <div className="flex gap-1 items-center">
        <Avatar
          variant="solid"
          color="gray"
          fallback={owner.userName[0].toUpperCase() ?? "?"}
          size="3"
          radius="full"
          className="object-cover"
          src={owner.image}
        />
        <p>
          {owner.userName}
        </p>
      </div>
      <div className="flex gap-1 items-center">
        <Avatar
          variant="solid"
          color="gray"
          fallback={guest?.userName[0].toUpperCase() ?? "?"}
          size="3"
          radius="full"
          className="object-cover"
          src={guest?.image}
        />
        <p>
          {guest?.userName}
        </p>
      </div>

      <div className="flex gap-1 items-center">
        <img src={match.homeTeam.logo} alt="" className="size-10 object-cover" /> vs
        <img src={match.awayTeam.logo} alt="" className=" size-10 object-cover"/>
        </div>
    
        <p>{formatDistance(createdAt, now, { addSuffix: true, })}</p>
        <p>{ownerNotion.toReadable()}</p>
       <Modal><button className="btn-primary w-fit p-2 flex-shrink-0 text-sm">View details</button></Modal>


    </div>
  );
}
