"use client";
import { Popover } from "@radix-ui/themes";
import { AppInput } from "../form";
import { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { Club } from "@/skirm-app-shared";
import { dummyClubs } from "@/skirm-app-shared/club";
import { useChangeSearchParams } from "@/hooks";

export default function TeamFilter({
  onChange,
  name = "teamFilter",
}: {
  onChange?: (club: Club) => void;
  name?: string;
}) {
  const chageParam = name == "teamFilter";
  const clubs = dummyClubs;
  const [selected, setSelected] = useState<Club | undefined>();
  const [open, setOpen] = useState(false);
  const { pushParams } = useChangeSearchParams();

  useEffect(() => {
    if (selected && chageParam) pushParams({ club: selected._id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <>
      <input type="hidden" name={name} value={selected?._id ?? ""} />
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger>
          <button className="flex items-center justify-between app-select w-fit px-3">
            {selected ? selected.name : "club?"} <HiChevronDown />
          </button>
        </Popover.Trigger>
        <Popover.Content>
          <div className="flex flex-col gap-2">
            <AppInput placeholder="Search" name="" />
            <div className="flex flex-col">
              {clubs.map((club) => (
                <button
                  onClick={() => {
                    setSelected(club);
                    onChange && onChange(club);
                    setOpen(false);
                  }}
                  className="btn-select"
                  key={club._id}
                >
                  {club.name}
                </button>
              ))}
            </div>
          </div>
        </Popover.Content>
      </Popover.Root>
    </>
  );
}
