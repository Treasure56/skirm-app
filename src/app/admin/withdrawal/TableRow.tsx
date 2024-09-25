import { WithdrawalDetailed } from "@/skirm-app-shared";
import { Avatar } from "@radix-ui/themes";
import { formatDistance } from "date-fns";
import { HiCheck } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { formatNumber } from "@/components/functions/FormatNumber";
import ApprovePopOver from "./ApprovePopOver";
import DeclinePopOver from "./DeclinePopOver";

export default function TableRow({
  amount,
  bankAccountName,
  bankAccountNumber,
  bankName,
  createdAt,
  status,
  user,
  approvedAt,
}: WithdrawalDetailed) {
  const now = new Date();
  return (
    <div className="grid grid-cols-8 text-sm py-2 items-center text-neutral-400">
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
        <p>{user.userName}</p>
      </div>

      <p>{bankName}</p>
      <div className="flex flex-col">
        <p>{bankAccountName}</p>
        <p>{bankAccountNumber}</p>
      </div>
      <p>{formatNumber(amount, true)}</p>
      <p
        className={
          status === "approved"
            ? "btn-status-success"
            : status === "pending"
            ? "btn-status-pending"
            : "btn-status-declined"
        }
      >
        {status}
      </p>

      {/* <p>{message}</p> */}
      <p>
        {approvedAt ? formatDistance(approvedAt, now, { addSuffix: true }) : ""}
      </p>

      <p>{formatDistance(createdAt, now, { addSuffix: true })}</p>

      {status == "pending" ? (
        <div className="flex gap-2">
            <ApprovePopOver>
          <button className="btn-status-success text-sm w-fit"><HiCheck /></button>
           </ApprovePopOver>
          <DeclinePopOver>
          <button className="btn-status-declined text-sm w-fit"><IoClose /></button>
          </DeclinePopOver>
        </div>
      ) : null}
    </div>
  );
}
