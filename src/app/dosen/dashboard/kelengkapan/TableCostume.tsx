/** @format */

import moment from "moment";
import { FC } from "react";

type Props = {
  headTable: string[];
  dataTable: any[];
};

const TableCostume: FC<Props> = ({ headTable, dataTable }) => {
  return (
    <table className="w-full border-collapse text-left">
      <thead className="">
        <tr>
          {headTable &&
            headTable.map((row, index) => (
              <th key={index} scope="col" className={`px-6 py-4`}>
                {row}
              </th>
            ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 border-t border-gray-100 ">
        {/* loop tr */}
        {dataTable &&
          dataTable.map((row: any, index) => {
            // mencari data kosong
            const hasEmptyValue =
              row.rps?.status !== "diterima" || !row.absen || !row.nilai;
            hasEmptyValue && index - 1;
            // menampilkan label
            const labels = [
              row.rps?.status !== "diterima" && "RPS",
              !row.absen && "ABSEN",
              !row.nilai && "NILAI",
            ].filter(Boolean); // Menghapus elemen-elemen yang falsy dari array
            return (
              hasEmptyValue && (
                <tr key={index}>
                  {/* <td className="px-6 py-4 whitespace-nowrap capitalize">
                    {showNo(index)}
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap capitalize">
                    {labels.join(", ")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap capitalize">
                    {row.hari}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap capitalize">
                    {moment(row.mulai, "HH:mm:ss").format("HH:mm")} -
                    {moment(row.seles, "HH:mm:ss").format("HH:mm")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap capitalize">
                    {row.matkul.nama}
                  </td>
                </tr>
              )
            );
          })}
      </tbody>
    </table>
  );
};

export default TableCostume;
