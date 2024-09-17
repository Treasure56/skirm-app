import { User } from "@/skirm-app-shared/user";
import { Avatar } from "@radix-ui/themes";
import { formatDistance } from "date-fns";

export default function TableRow({
  userName,
  phone,
  email,
  image,
  createdAt,
  firstName,
  lastName,
  isVerified,
  isDisabled
}: User) {
    const now = new Date();
  return (
    <div className="grid grid-cols-7 text-sm py-2 items-center text-neutral-400">
      <div className="flex gap-1 items-center">
        <Avatar
          variant="solid"
          color="gray"
          fallback={userName[0].toUpperCase() ?? "?"}
          size="3"
          radius="full"
          className="object-cover"
          src={image}
        />
        <p>
          {firstName} {lastName}
        </p>
      </div>
      <p>{userName}</p>
      <p className="line-clamp-1">{email}</p>
      <p>{phone}</p>
      <p className={isVerified ? "btn-status-success" : "btn-status-pending"}>{isVerified ? "Verified" : "Unverified"}</p>
      <p>{formatDistance(createdAt, now, { addSuffix: true, })}</p>
      <div className="flex justify-start">
      <button className={isDisabled ? "bg-green-200 rounded-[35px] px-4 py-1 text-dark" : "bg-red-200 rounded-[35px] px-4 py-1 text-dark"}>{isDisabled ? "Enable" : "Disable"}</button>
      </div>
    </div>
  );
}
