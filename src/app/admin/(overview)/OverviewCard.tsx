export type AdminOverViewCardProps = {
  title: string;
  icon: React.ReactNode;
  count: number;
};
export default function OverViewCard({
  title,
  icon,
  count,
}: AdminOverViewCardProps) {
  return (
    <div className=" p-4 rounded-xl bg-primary flex flex-col gap-4 text-light">
      <div className="flex justify-between items-center">
        <div className="border border-light size-10 flex items-center justify-center p-2 rounded-lg text-5xl">
          {icon}
        </div>
        <p className=" text-2xl font-semibold text-right">{count}</p>
      </div>
      <p className="">{title}</p>
    </div>
  );
}
