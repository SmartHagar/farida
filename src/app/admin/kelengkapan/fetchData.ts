/** @format */
type Props = {
  dtJadwal: any;
  setShowAbsen?: any;
  setShowNilai?: any;
  setShowBeritaAcara?: any;
  setShowRps?: any;
};
// memanggil data berita acara
const fetchAbsen = async ({ dtJadwal, setShowAbsen }: Props) => {
  const jadwal_id: any[] = [];
  dtJadwal?.map((item: any) => {
    jadwal_id.push(item.id);
  });

  // convert jadwal_id to string
  const jadwal_id_string = jadwal_id.join(",");
  if (jadwal_id.length > 0) {
    await setShowAbsen({
      jadwal_id: jadwal_id_string,
    });
  }
};

// memanggil data Nilai
const fetchNilai = async ({ dtJadwal, setShowNilai }: Props) => {
  const jadwal_id: any[] = [];
  dtJadwal?.map((item: any) => {
    jadwal_id.push(item.id);
  });

  // convert jadwal_id to string
  const jadwal_id_string = jadwal_id.join(",");
  if (jadwal_id.length > 0) {
    await setShowNilai({
      jadwal_id: jadwal_id_string,
    });
  }
};

// memanggil data Nilai
const fetchBeritaAcara = async ({ dtJadwal, setShowBeritaAcara }: Props) => {
  const jadwal_id: any[] = [];
  dtJadwal?.map((item: any) => {
    jadwal_id.push(item.id);
  });

  // convert jadwal_id to string
  const jadwal_id_string = jadwal_id.join(",");
  if (jadwal_id.length > 0) {
    await setShowBeritaAcara({
      jadwal_id: jadwal_id_string,
    });
  }
};

// memanggil data rps
const fetchRPS = async ({ dtJadwal, setShowRps }: Props) => {
  const jadwal_id: any[] = [];
  dtJadwal?.map((item: any) => {
    jadwal_id.push(item.id);
  });
  // convert jadwal_id to string
  const jadwal_id_string = jadwal_id.join(",");
  if (jadwal_id.length > 0) {
    await setShowRps({
      jadwal_id: jadwal_id_string,
      status: "diterima",
    });
  }
};

export { fetchAbsen, fetchNilai, fetchBeritaAcara, fetchRPS };
