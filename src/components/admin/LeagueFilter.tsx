"use client";
import { Popover } from "@radix-ui/themes";
import { AppInput } from "../form";
import { dummyLeagues, League } from "@/skirm-app-shared/league";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

export default function LeagueFilter({
  onChange,
}: {
  onChange?: (league: League) => void;
}) {
  const leagues = dummyLeagues;
  const [selected, setSelected] = useState<League | undefined>();
  const [open, setOpen] = useState(false);
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger>
        <button className="flex items-center app-select !w-fit px-3">
          { selected? selected.title :"league?"} <HiChevronDown />
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
  );
}
