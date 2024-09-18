import { Admin } from "@/skirm-app-shared/admin";
import Sidebar from "./Sidebar";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export default function Layout({ children }: { children: React.ReactNode }) {
    const admin: Admin = { _id: "", createdAt: "", email: "eg@gmail.com", userName: "admin1" };

    return (
        <Theme>
            <section>
                <section className="flex font-switzer">
                    <aside className="w-0 md:w-[250px] md:min-w-[250px] flex-shrink-0 relative border-r">
                        <Sidebar admin={admin} />
                    </aside>
                    <aside className="w-full md:w-[calc(100%-250px)] md:max-w-[calc(100%-250px)] bg-neutral-background min-h-screen px-4 lg:px-8">
                        <div className="py-2" />
                        {children}
                        <div className="py-2" />
                    </aside>
                </section>
            </section>
        </Theme>
    );
}