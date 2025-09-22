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
    INDEX: "/medical-records",
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
});

export default ROUTES;
