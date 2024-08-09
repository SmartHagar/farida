/** @format */

import { FC } from "react";

type Props = {
  text: string;
  onClick: () => void;
  addClass?: string;
  type?: "button" | "submit" | "reset";
};

const ButtonSecondary: FC<Props> = ({ text, onClick, addClass, type }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`bg-secondary rounded-lg px-4 py-2 text-white w-fit cursor-pointer hover:shadow-sm hover:shadow-secondary ${addClass}`}
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;
