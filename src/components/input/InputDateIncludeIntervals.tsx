/** @format */

import { FC, useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  control: any;
  required?: boolean;
  name: string;
  errors?: any;
  addClass?: any;
  label: string;
  initialValue?: string | Date;
  includeDateIntervals: any;
};

const InputDateIncludeIntervals: FC<Props> = ({
  control,
  required,
  name,
  errors,
  addClass,
  label,
  initialValue,
  includeDateIntervals,
}) => {
  const [menuPortalTarget, setMenuPortalTarget] = useState<any>(null);
  const [startDate, setStartDate] = useState<string | Date>(initialValue || "");

  useEffect(() => {
    // Pastikan kode ini hanya dijalankan di lingkungan browser
    if (typeof document !== "undefined") {
      setMenuPortalTarget(document.body);
    }
  }, []);

  return (
    <div className={`flex flex-col ${addClass}`}>
      <label className="text-sm font-medium text-gray-700 tracking-wide block">
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <DatePicker
            selected={startDate as Date}
            onChange={(date) => {
              if (date) {
                setStartDate(date);
                const mtDate = moment(date).format("YYYY-MM-DD");
                field.onChange(mtDate);
              } else {
                setStartDate(""); // Atur ke nilai kosong jika tanggal dihapus
                field.onChange(""); // Set nilai dalam react-hook-form
              }
            }}
            dateFormat={"dd/MM/yyyy"}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="w-full border rounded-lg py-2 px-4 bg-white"
            includeDateIntervals={includeDateIntervals}
            placeholderText="dd/mm/yyyy"
            portalId={menuPortalTarget}
          />
        )}
      />
      {errors?.type === "required" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} tidak boleh kosong
        </p>
      )}
    </div>
  );
};

export default InputDateIncludeIntervals;
