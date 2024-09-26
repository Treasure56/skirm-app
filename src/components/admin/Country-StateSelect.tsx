import { AppSelect } from "../form";

export default function CountryStateSelect() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <AppSelect  title="Country" name="country" options={["united states", "canada"]} />
            <AppSelect title="State" name="state" options={["alabama", "new york"]} />

        </div>
    );
}