import LeagueFilter from "@/components/admin/LeagueFilter";
import NotionPicker from "@/components/admin/NotionPicker";
import TeamFilter from "@/components/admin/TeamFilter";
import { AppInput, FormButton } from "@/components/form";
import { AlertDialog } from "@radix-ui/themes";
import { IoIosClose } from "react-icons/io";

export default function CreateMatch({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
      <AlertDialog.Content>
        <div className="flex justify-between pb-6">
          <h4 className="font-semibold">Add New </h4>
          <AlertDialog.Cancel>
            <IoIosClose className="text-xl" />
          </AlertDialog.Cancel>
        </div>
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-stretch">
              <p>Home team</p>
              <TeamFilter name="homeTeam" />
            </div>
            <div className="flex flex-col items-stretch">
              <p>Away team</p>
              <TeamFilter name="awayTeam" />
            </div>
            {fields.map((item) => {
              return <AppInput key={item.name} {...item} />;
            })}
          </div>
          <div className=" [&>button]:!w-full">
            
          <LeagueFilter name="league" />
          </div>
          <NotionPicker />
          <FormButton className="btn-primary p-2">Submit</FormButton>
        </form>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

const fields = [
  {
    title: "Start Date",
    name: "startDate",
    type: "datetime-local",
    placeholder: "Enter Start Date",
  },
  {
    title: "End Date",
    name: "endDate",
    type: "datetime-local",
    placeholder: "Enter End Date",
  },
];
