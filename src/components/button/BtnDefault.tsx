/** @format */

import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  addClass?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const BtnDefault: FC<Props> = ({
  children,
  onClick,
  addClass = "bg-primary hover:bg-primary/80 text-white",
  type = "submit",
}) => {
  return (
    <button
      type={type}
      className={`rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${addClass} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BtnDefault;
