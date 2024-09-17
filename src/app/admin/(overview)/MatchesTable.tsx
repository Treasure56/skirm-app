import { HiChevronRight } from "react-icons/hi2";
import Link from "next/link";
import MatchesTableRow from "./MatchesTableRow";
import { dummyMatchesDetailed } from "@/skirm-app-shared/match";

export default function MatchesTable() {
    const matches = dummyMatchesDetailed;
    
  return (
    <div className="bg-light p-4 flex flex-col shadow  rounded-xl">
      
      <div className="flex justify-between">
        <h1 className="text-md font-bold ">Matches</h1>
        <Link
          className="flex items-center text-sm text-primary-dark font-semibold"
          href="/admin/user"
        >
          View all
          <HiChevronRight />
        </Link>       
      </div>


      <div className="flex flex-col py-6 divide-y-2">
        <div className="grid grid-cols-4 text-sm font-semibold bg-gray-200 p-2 rounded">
          <p>Home Team</p>
          <p>Away Team</p>
          <p>Start Date Time</p>
          <p>League</p>
        </div>
        {matches.map((match) => (
          <MatchesTableRow key={match._id} {...match} />
        ))}
       
      </div>
    </div>
  );
}
