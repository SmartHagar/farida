/** @format */

import { FC, useRef } from "react";
import { Controller } from "react-hook-form";
import SignatureCanvas from "react-signature-canvas";
import ButtonSecondary from "../button/ButtonSecondary";

type Props = {
  control: any;
  required?: boolean;
  name: string;
  errors?: any;
  addClass?: any;
  label: string;
  clear?: boolean;
  setValue: any;
};

const InputCanvas: FC<Props> = ({
  control,
  required,
  name,
  errors,
  addClass,
  label,
  clear = false,
  setValue,
}) => {
  const sigCanvasRef = useRef<SignatureCanvas | null>(null);

  const formatIntoPng = (canvasRef: any) => {
    if (canvasRef) {
      return canvasRef.getTrimmedCanvas().toDataURL("image/png");
    }
    return null;
  };
  const clearSignature = () => {
    if (sigCanvasRef.current) {
      setValue(name, "");
      sigCanvasRef.current.clear(); // Menggunakan metode clear() untuk membersihkan tanda tangan
    }
  };

  return (
    <div className={addClass}>
      <label className="text-sm font-medium text-gray-700 tracking-wide block">
        {label}
        {required && <span className="ml-1 text-red-600 ">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <SignatureCanvas
            penColor="black"
            canvasProps={{
              className: "sigCanvas border border-primary w-full rounded-xl",
            }}
            ref={(ref) => {
              sigCanvasRef.current = ref;
            }}
            onEnd={() => field.onChange(formatIntoPng(sigCanvasRef.current))}
          />
        )}
      />
      {clear && (
        <ButtonSecondary
          text={`Hapus ${label}`}
          onClick={clearSignature}
          addClass="mt-2"
        />
      )}
      {errors?.type === "required" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} tidak boleh kosong
        </p>
      )}
    </div>
  );
};

export default InputCanvas;
