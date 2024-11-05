import {MatchDetailed } from "@/skirm-app-shared/match";
import { format, formatDistance } from "date-fns";

export default function TableRow({awayTeam, endDateTime, homeTeam, startDateTime, awayScore, homeScore, createdAt, league, isCompleted}:MatchDetailed) {
    const now = new Date();
    return (
        <div className="grid grid-cols-8 text-sm py-2 items-center text-neutral-400">
        <p>{homeTeam ? homeTeam.name : ""}</p>
        <div>
            {isCompleted ? (
                <p>{homeScore} - {awayScore}</p>
            ) : (
                <button className="btn-status-pending">pending</button>
            )}
        </div>
        <p>{awayTeam.name}</p>
        <p>{format(startDateTime, "dd MMM, yyyy hh:mm a")}</p>
        <p>{format(endDateTime, "dd MMM, yyyy hh:mm a")}</p>
        <p>{league.title}</p>
        <p>{formatDistance(createdAt, now, { addSuffix: true, })}</p>
        <div className="flex justify-start">
        </div>
      </div>
    );
}
