/** @format */

"use client";
import Link from "next/link";
import { FC, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import MenuTypes from "@/types/MenuTypes";
import { MainMenu } from "./ListMenu";

type Props = {};

const MainNavbar: FC<Props> = ({}) => {
  const pathname = usePathname();
  console.log({ pathname });
  const route = useRouter();
  // state
  const [open, setOpen] = useState(false);
  const [loadLogin, setLoadLogin] = useState(false);

  const halfIndex = Math.ceil(MainMenu.length / 2);
  const firstHalf = MainMenu.slice(0, halfIndex);
  const secondHalf = MainMenu.slice(halfIndex);

  return (
    <div className="flex justify-between w-full gap-x-80 text-sm">
      <ul className="flex gap-x-4 overflow-auto grow justify-start">
        {firstHalf.map((item: MenuTypes, index: number) => {
          const isActive = pathname === item.href;
          return (
            <li key={index}>
              <Link
                href={item.href || "#"}
                className={`${
                  isActive && "underline font-bold"
                } block py-1 text-color-2 rounded-full hover:underline hover:font-bold transition-colors duration-300`}
              >
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-x-4 overflow-auto grow justify-end">
        {secondHalf.map((item: MenuTypes, index: number) => {
          const isActive = pathname === item.href;
          return (
            <li key={index}>
              <Link
                href={item.href || "#"}
                className={`${
                  isActive && "underline font-bold"
                } block py-1 text-color-2 rounded-full hover:underline hover:font-bold transition-colors duration-300`}
              >
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainNavbar;
