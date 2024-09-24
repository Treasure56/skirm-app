"use client"
import { useChangeSearchParams } from "@/hooks";
import { AppInput } from "../form";

export default function DepositFilter() {
    const { pushParams, params } = useChangeSearchParams();

    return (
        <div>
             <AppInput value={params.get('date')?? ""} onChange={date =>pushParams({date})} type="date" name="date" placeholder="" />
        </div>
    );
}