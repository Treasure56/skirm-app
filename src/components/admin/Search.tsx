import { HiSearch } from "react-icons/hi";

export default function Search() {
    return (
        <div className="flex gap-3 items-center">
            <div className="relative w-full md:w-fit flex items-center">
                <HiSearch className="absolute top-1/2 -translate-y-1/2 left-2"/>
                <input
                    className="border-b py-2 ps-8 md:flex-shrink w-full md:w-[300px] rounded block outline-none caret-secondary"
                    type="text" name="search" placeholder="Search by name" />
            </div>
            <button className="btn-primary max-md:hidden  flex-shrink-0 h-fit p-2">Search</button>
        </div>
    );
}