/** @format */

import moment from "moment";
import { FC } from "react";

type Props = {
  headTable: string[];
  dataTable: any[];
  limit: number;
  page: number;
};

const TableCostume: FC<Props> = ({ headTable, dataTable, limit, page }) => {
  const showNo = (index: number) => {
    let noUrut = (page - 1) * limit + index;
    return noUrut + 1;
  };
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
            const hasEmptyValue = !row.rps || !row.absen || !row.nilai;
            // menampilkan label
            const labels = [
              row.rps && "RPS",
              row.absen && "ABSEN",
              row.nilai && "NILAI",
            ].filter(Boolean); // Menghapus elemen-elemen yang falsy dari array
            return (
              <tr key={index} className={hasEmptyValue ? "bg-red-100" : ""}>
                <td className="px-6 py-4 whitespace-nowrap capitalize">
                  {showNo(index)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">
                  {labels.join(", ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">
                  {row.matkul.nama}
                </td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">
                  {row.dosen.nama}
                </td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">
                  {row.hari}
                </td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">
                  {moment(row.mulai, "HH:mm:ss").format("HH:mm")} -
                  {moment(row.seles, "HH:mm:ss").format("HH:mm")}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TableCostume;
