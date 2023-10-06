/** @format */

import { Metadata } from "next";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "RPS",
  description: "Rencana Pembelajaran Semester",
};

const layout = (props: Props) => {
  return <div>{props.children}</div>;
};

export default layout;
