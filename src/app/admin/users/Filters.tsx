"use client";
import { AppSelect } from "@/components/form";
import { useChangeSearchParams } from "@/hooks";
export default function Filter() {
  const { params, pushParams } = useChangeSearchParams();
  return (
    <div>
      <AppSelect
        variant="app-select"
        value={params.get("only") ?? ""}
        onChange={(e) => pushParams({ only: e })}
        options={[
          {
            title: "All",
            value: "",
          },
          {
            title: "Disabled",
            value: "disabled",
          },
          {
            title: "Premium",
            value: "premium",
          },
          {
            title: "Enabled",
            value: "enabled",
          },
          {
            title: "Verified",
            value: "verified",
          },
          {
            title: "Unverified",
            value: "unverified",
          },
        ]}
        name=""
      />
    </div>
  );
}
