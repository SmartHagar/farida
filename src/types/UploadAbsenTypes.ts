/** @format */

import JadwalTypes from "./JadwalTypes";

interface UploadAbsenTypes {
  id: number | string;
  jadwal_id: number | string;
  file: string;
  jadwal: JadwalTypes;
}
export default UploadAbsenTypes;
