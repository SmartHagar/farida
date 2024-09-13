/** @format */

import DosenTypes from "./DosenTypes";
import MatkulTypes from "./MatkulTypes";
import RuanganTypes from "./RuanganTypes";

// jadwal
interface JadwalTypes {
  id: string | number;
  prodi_id: string | number;
  matkul_id: string | number;
  dosen_id: string | number;
  ruangan_id: string | number;
  hari: string;
  mulai: string | Date;
  seles: string | Date;
  semester: string;
  tahun: number;
  matkul?: MatkulTypes;
  dosen?: DosenTypes;
  ruangan?: RuanganTypes;
}

export default JadwalTypes;
