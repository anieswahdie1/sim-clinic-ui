const ROUTES = Object.freeze({
  AUTH: {
    LOGIN: "/auth/login",
  },
  MASTER_DATA: {
    LAYANAN_TERAPI: {
      INDEX: "/master-data/layanan-terapi",
    },
    RIWAYAT_PENYAKIT: {
      INDEX: "/master-data/riwayat-penyakit",
    },
    TEKNIK_TERAPI: {
      INDEX: "/master-data/teknik-terapi",
    },
  },
  MEDICAL_RECORDS: {
    INFORMED_CONSENT: {
      INDEX: "/medical-records/informed-consent",
    },
    HISTORY: {
      INDEX: "/medical-records/history",
    },
  },
  MONITORING: {
    CUSTOMER: {
      INDEX: "/monitoring/customer",
    },
    TERAPIST_INCOME: {
      INDEX: "/monitoring/terapist-income",
    },
  },
  USER_MANAGEMENT: {
    USER: {
      INDEX: "/user-management/user",
    },
  },
  PELAYANAN: {
    AKUPUNTUR: {
      INDEX: "/pelayanan/akupuntur",
    },
  },
});

export default ROUTES;
