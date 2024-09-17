/* eslint-disable @next/next/no-img-element */

import { MatchDetailed } from "@/skirm-app-shared";
import {  formatDistance } from "date-fns";



export default function MatchesTableRow({awayTeam, homeTeam, league, createdAt}: MatchDetailed) {
    const now = new Date();
    return (
        <div className="grid grid-cols-4 text-sm py-4 items-center text-neutral-400">
        <p>{homeTeam.name}</p>
        <p>{awayTeam.name}</p>
         <p>{formatDistance(createdAt, now, { addSuffix: true, })}</p>
         <p>{league.title}</p>
        </div>
    );
}


