/** @format */

import { FC, useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";
import SignatureCanvas from "react-signature-canvas";
import BtnSecondary from "../button/BtnSecondary";

type Props = {
  control: any;
  required?: boolean;
  name: string;
  errors?: any;
  addClass?: any;
  label: string;
  clear?: boolean;
  setValue: any;
  watch: any;
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
  watch,
}) => {
  const sigCanvasRef = useRef<SignatureCanvas | null>(null);
  const [penColor, setPenColor] = useState<string>("black");
  const [penThickness, setPenThickness] = useState<number>(1);

  const watchParaf = watch(name);

  const formatIntoPng = (canvasRef: any) => {
    if (canvasRef) {
      return canvasRef.getTrimmedCanvas().toDataURL("image/png");
    }
    return null;
  };

  const clearSignature = () => {
    if (sigCanvasRef.current) {
      setValue(name, "");
      sigCanvasRef.current.clear();
    }
  };

  // Effect untuk mendeteksi perubahan pada setValue
  useEffect(() => {
    if (!watchParaf) {
      sigCanvasRef.current?.clear();
    }
  }, [watchParaf]); // Memantau perubahan pada setValue

  return (
    <div className={`flex flex-col w-full px-4 ${addClass}`}>
      <label className="text-sm font-medium text-gray-700 tracking-wide block">
        {label}
        {required && <span className="ml-1 text-red-600 ">*</span>}
      </label>

      {/* Pen color selection */}
      <div className="flex items-center mt-2">
        <label className="mr-2">Warna Pena:</label>
        <input
          type="color"
          value={penColor}
          onChange={(e) => setPenColor(e.target.value)}
          className="border border-gray-300 rounded"
        />
      </div>

      {/* Pen thickness selection */}
      <div className="flex items-center mt-2">
        <label className="mr-2">Ketebalan Pena:</label>
        <input
          type="range"
          min="1"
          max="10"
          value={penThickness}
          onChange={(e) => setPenThickness(Number(e.target.value))}
          className="border border-gray-300 rounded"
        />
        <span className="ml-2">{penThickness}px</span>
      </div>

      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <SignatureCanvas
            penColor={penColor}
            minWidth={penThickness} // Ketebalan minimum dan maksimum disesuaikan dengan nilai yang sama
            maxWidth={penThickness}
            canvasProps={{
              className:
                "sigCanvas border border-primary w-full rounded-xl mt-4",
            }}
            ref={(ref) => {
              sigCanvasRef.current = ref;
            }}
            onEnd={() => field.onChange(formatIntoPng(sigCanvasRef.current))}
          />
        )}
      />

      {clear && (
        <BtnSecondary onClick={clearSignature} addClass="mt-2">
          Hapus {label}
        </BtnSecondary>
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
