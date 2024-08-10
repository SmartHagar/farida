/** @format */

import { BASE_URL } from "@/services/baseURL";

interface PathObject {
  path: string;
}

interface Props {
  data: any;
  pictures: string[];
  title: string | PathObject;
  description: string | PathObject;
  width?: number;
  height?: number;
}

const resolveValue = (row: any, key: string | PathObject): any => {
  if (typeof key === "string") {
    return key;
  } else if (typeof key === "object" && "path" in key) {
    return row[key.path];
  }
  return "";
};

const lightImgDB = ({
  data,
  pictures,
  title,
  description,
  width,
  height,
}: Props) => {
  const dtImages: any[] = [];

  data?.forEach((row: any, rowIndex: number) => {
    pictures.forEach((picture) => {
      if (row[picture]) {
        dtImages.push({
          src: `${BASE_URL}/${row[picture]}`,
          title: resolveValue(row, title),
          description: resolveValue(row, description),
          width: width || 3840,
          height: height || 5760,
          identifier: `${rowIndex}-${picture}`, // Menambahkan identifier yang unik
        });
      }
    });
  });

  return dtImages;
};

export default lightImgDB;
