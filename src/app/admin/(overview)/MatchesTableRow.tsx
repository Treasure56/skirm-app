/* eslint-disable @next/next/no-img-element */

import { Matches} from "@/types";
import {  formatDistance, subMinutes } from "date-fns";

const now = new Date();

// Subtract 3 minutes from the current date
const threeMinutesAgo = subMinutes(now, 3);

const timeDifference = formatDistance(threeMinutesAgo, now, { addSuffix: true });


export default function MatchesTableRow({awayTeam, homeTeam, league}: Matches) {
    return (
        <div className="grid grid-cols-4 text-sm py-4 items-center text-neutral-400">
        <p>{homeTeam}</p>
        <p>{awayTeam}</p>
         <p>{timeDifference}</p>
         <p>{league}</p>
        </div>
    );
}


