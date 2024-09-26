"use client";
import { useChangeSearchParams } from "@/hooks";
import { AppInput, AppSelect } from "../form";

export default function WithdrawFilter() {
  const { pushParams, params } = useChangeSearchParams();

  return (
    <>
      <AppInput
        value={params.get("date") ?? ""}
        onChange={(date) => pushParams({ date })}
        type="date"
        name="date"
        placeholder=""
      />
      <AppSelect
        options={[
          { title: "All", value: "" },
          { title: "Approved", value: "approved" },
          { title: "Pending", value: "pending" },
          { title: "Declined", value: "declined" },
        ]}
        name="filter"
        onChange={(v) => pushParams({ status: v })}
      />
    </>
  );
}
