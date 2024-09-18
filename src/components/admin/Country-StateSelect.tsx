import { AppSelect } from "../form";

export default function CountryStateSelect() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <AppSelect  name="country" options={["united states", "canada"]} />
            <AppSelect name="state" options={["alabama", "new york"]} />

        </div>
    );
}