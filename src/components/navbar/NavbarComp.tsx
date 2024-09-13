/** @format */

"use client";
import ListMenu from "./ListMenu";
import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItems";

type Props = {};

const NavbarComp: FC<Props> = ({}) => {
  const pathname = usePathname();
  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

  const halfIndex = Math.ceil(ListMenu.length / 2);
  const firstHalf = ListMenu.slice(0, halfIndex);
  const secondHalf = ListMenu.slice(halfIndex);

  return (
    <div className="flex justify-between gap-x-64">
      <ul className="flex gap-x-4">
        {firstHalf.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            index={index}
            hoverIndex={hoverIndex}
            setHoverIndex={setHoverIndex}
            pathname={pathname}
          />
        ))}
      </ul>
      <ul className="flex gap-x-4 overflow-auto">
        {secondHalf.map((item, index) => (
          <MenuItem
            key={index + halfIndex} // Ensure unique key for the second half
            item={item}
            index={index + halfIndex}
            hoverIndex={hoverIndex}
            setHoverIndex={setHoverIndex}
            pathname={pathname}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavbarComp;
