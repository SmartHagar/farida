/** @format */

import { FC } from "react";

type Props = {
  text: string;
  onClick: () => void;
  addClass?: string;
  type?: "button" | "submit" | "reset";
};

const ButtonPrimary: FC<Props> = ({ text, onClick, addClass, type }) => {
  return (
    <button
      type={type || "submit"}
      onClick={onClick}
      className={`bg-primary rounded-lg px-4 py-2 text-white w-fit cursor-pointer hover:shadow-sm hover:shadow-primary ${addClass}`}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
