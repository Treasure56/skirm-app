'use client'

import { AppLogo } from "@/components/navbar";
import { Admin } from "@/skirm-app-shared/";
import { useAdminStore } from "@/state";
import { paths } from "@/utils";
import { Avatar } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { BiLogOut, BiMoneyWithdraw } from "react-icons/bi";
import { FaX } from "react-icons/fa6";
import { HiCheckCircle, HiUsers } from "react-icons/hi2";
import { IoMdFootball } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { RiMoneyDollarCircleFill, RiSettings3Fill } from "react-icons/ri";
import { SiClubforce, SiPremierleague } from "react-icons/si";
import SidebarLink, { SidebarLinkProps } from "./SidebarLink";

export default function Sidebar({ admin }: { admin: Admin }) {
    const pathname = usePathname();
    const { sidebarOpen: open, setSidebar: setOpen, setAdmin, admin: _admin } = useAdminStore();

    useLayoutEffect(() => {
        setAdmin(admin);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [admin]);

    useEffect(() => {
        setOpen(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <div className={`w-full flex flex-col gap-4 fixed md:sticky z-40 bg-light top-0 left-0 h-screen p-4 overflow-y-auto transition-transform ${open ? 'max-md:translate-x-0' : 'max-md:translate-x-[-110%]'}`}>
            <div className="flex justify-between items-center">
                <AppLogo />
                <button onClick={() => setOpen(false)} className="text-xl icon-btn md:hidden p-2">
                    <FaX />
                </button>
            </div>
            <div className="flex gap-2 border rounded-[50px] items-center p-2 justify-stretch">
                <Avatar variant="solid" color="gray" fallback={_admin?.email[0].toUpperCase() ?? "?"} size="3" radius="full" />
                <div className=" overflow-hidden">
                    <h2 className="text-neutral-500 font-[500] line-clamp-1 w-full text-base">{_admin?.email}</h2>
                    <p className="text-neutral-400 text-sm">Admin User</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {
                    links.map(link =>
                        <SidebarLink
                            key={link.href}
                            {...link}
                        />
                    )
                }
            </div>
        </div>
    );
}


const links: SidebarLinkProps[] = [
    {
        title: "Overview",
        icon: <IoGrid />,
        href: paths.admin,
    },
    {
        title: "Users",
        icon: <HiUsers />,
        href: paths.user,
    },
    {
        title: "Skirm",
        icon: <HiCheckCircle />,
        href: paths.skirm,
    },
    {
        title: "Matches",
        icon: <IoMdFootball />,
        href: paths.matches,
    },
    {
        title: "Leagues",
        icon: <SiPremierleague />,
        href: paths.leagues,
    },
    {
        title: "Clubs",
        icon: <SiClubforce />,
        href: paths.clubs,
    },
    {
        title: "Deposit",
        icon: <RiMoneyDollarCircleFill />,
        href: paths.deposit,
    },
    {
        title: "Withdrawal",
        icon: <BiMoneyWithdraw />,
        href: paths.withdrawal,
    },
    {
        title: "Settings",
        icon: <RiSettings3Fill />,
        href: paths.settings,
    },

    {
        className: "admin-side-link-logout mt-10",
        title: "Log out",
        icon: <BiLogOut />,
        href: paths.logout,
    },
]