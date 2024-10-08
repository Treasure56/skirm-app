"use client";
import { Popover } from "@radix-ui/themes";
import { AppInput } from "../form";
import { dummyLeagues, League } from "@/skirm-app-shared/league";
import { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { useChangeSearchParams } from "@/hooks";

export default function LeagueFilter({
  onChange,
  name = "leagueFilter",
}: {
  onChange?: (league: League) => void;
  name?: string;
}) {
  const chageParam = name == "leagueFilter";
  const leagues = dummyLeagues;
  const [selected, setSelected] = useState<League | undefined>();
  const [open, setOpen] = useState(false);
  const { pushParams } = useChangeSearchParams();

  useEffect(() => {
    if (selected && chageParam) pushParams({ league: selected._id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <>
      <input type="hidden" name={name} value={selected?._id ?? ""} />
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger>
          <button className="flex items-center app-select justify-between !w-fit flex-grow-0 px-3">
            {selected ? selected.title : "league?"} <HiChevronDown />
          </button>
        </Popover.Trigger>
        <Popover.Content>
          <div className="flex flex-col gap-2">
            <AppInput placeholder="Search" name="search" />
            <div className="flex flex-col">
              {leagues.map((league) => (
                <button
                  onClick={() => {
                    setSelected(league);
                    onChange && onChange(league);
                    setOpen(false);
                  }}
                  className="btn-select"
                  key={league._id}
                >
                  {league.title}
                </button>
              ))}
            </div>
          </div>
        </Popover.Content>
      </Popover.Root>
    </>
  );
}
