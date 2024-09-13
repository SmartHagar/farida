/** @format */

import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  addClass?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const BtnSecondary: FC<Props> = ({
  children,
  onClick,
  addClass = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`bg-secondary hover:bg-secondary/80 text-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${addClass} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BtnSecondary;
