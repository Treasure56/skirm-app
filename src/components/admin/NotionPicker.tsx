"use client";

import { useEffect, useMemo, useState } from "react";
import { AppInput } from "../form";
import { NotionObject } from "@/skirm-app-shared/classes";

export default function NotionPicker() {
  const [g, setGoals] = useState("0");
  const [selected, setSelected] = useState<string[]>([]);

  const goals = useMemo(() => Number(g), [g]);
  const notions = useMemo(() => {
    return NotionObject.generateCodesFromGoalCount(goals);
  }, [goals]);

  useEffect(()=>{
    if(notions) {
        setSelected([])
    }
  }, [notions])

  return (
    <div className="flex flex-col gap-3">
        <input type="hidden" value={JSON.stringify(selected)} name="notions" />
      <h4>Select Notions</h4>
      <div className="flex justify-between">
        <div className="flex gap-2 w-20">
          <AppInput placeholder="goals" name="" value={g} onChange={setGoals} />
        </div>
        <div className="flex gap-2 justify-end">
          <div
            onClick={() => {
              setSelected(notions);
            }}
            className="rounded p-2 border border-primary text-primary h-fit cursor-pointer"
          >
            All
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        {notions.map((n, i) => {
          const notion = new NotionObject(n);
          const isSelected = selected.includes(notion.code());
          return (
            <div
              role="button"
              onClick={() =>
                isSelected
                  ? setSelected([...selected.filter((i) => i != notion.code())])
                  : setSelected([...selected, notion.code()])
              }
              className={`rounded p-1 border ${
                isSelected ? "border-primary bg-primary/10" : ""
              } `}
              key={i}
            >
              {notion.toReadable()}
            </div>
          );
        })}
      </div>
    </div>
  );
}
