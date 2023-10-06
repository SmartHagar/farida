/** @format */
"use client";
import React from "react";
import Cookies from "js-cookie";

type Props = {};

const Rps = (props: Props) => {
  const dosen_id = Cookies.get("dosen_id");
  console.log(dosen_id);
  return (
    <div>
      <div>
        <p>
          Silahkan mengupload RPS pada masing masing matakuliah yang diampuh
        </p>
      </div>
    </div>
  );
};

export default Rps;
