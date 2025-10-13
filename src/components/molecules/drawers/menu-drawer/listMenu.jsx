import {
  faDashboard,
  faFaceSmile,
  faFile,
  faFileMedical,
  faGear,
  faGears,
  faMedkit,
  faMoneyBill,
  faPeopleArrows,
  faSuitcaseMedical,
  faUser,
  faUserGear,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import ROUTES from "../../../../pkg/routes";

const ListMenu = Object.freeze([
  {
    id: 1,
    name: "User Management",
    path: "/user-management",
    icon: faUsers,
    canAccessBy: ["super_admin", "admin"],
    childs: [
      {
        id: 1,
        name: "User",
        parentPath: "/user-management",
        path: ROUTES.USER_MANAGEMENT.USER.INDEX,
        icon: faUser,
      },
    ],
  },
  {
    id: 2,
    name: "Master Data",
    path: "/master-data",
    icon: faGears,
    canAccessBy: ["super_admin", "admin"],
    childs: [
      {
        id: 1,
        name: "Layanan Terapi",
        parentPath: "/master-data",
        path: ROUTES.MASTER_DATA.LAYANAN_TERAPI.INDEX,
        icon: faUserGear,
      },
      {
        id: 2,
        name: "Riwayat Penyakit",
        parentPath: "/master-data",
        path: ROUTES.MASTER_DATA.RIWAYAT_PENYAKIT.INDEX,
        icon: faFileMedical,
      },
      {
        id: 1,
        name: "Teknik Terapi",
        parentPath: "/master-data",
        path: ROUTES.MASTER_DATA.TEKNIK_TERAPI.INDEX,
        icon: faSuitcaseMedical,
      },
    ],
  },
  {
    id: 3,
    name: "Monitoring",
    path: "/monitoring",
    icon: faDashboard,
    canAccessBy: ["super_admin"],
    childs: [
      {
        id: 1,
        name: "Customer",
        parentPath: "/monitoring",
        path: ROUTES.MONITORING.CUSTOMER.INDEX,
        icon: faFaceSmile,
      },
      {
        id: 2,
        name: "Terapist Income",
        parentPath: "/monitoring",
        path: ROUTES.MONITORING.TERAPIST_INCOME.INDEX,
        icon: faMoneyBill,
      },
    ],
  },
  {
    id: 4,
    name: "Medical Records",
    path: "/medical-records",
    icon: faMedkit,
    canAccessBy: ["super_admin", "user"],
    childs: [
      {
        id: 1,
        name: "Informed Consent",
        parentPath: "/medical-records",
        path: ROUTES.MEDICAL_RECORDS.INFORMED_CONSENT.INDEX,
        icon: faFile,
      },
      {
        id: 2,
        name: "Medical Records History",
        parentPath: "/medical-records",
        path: ROUTES.MEDICAL_RECORDS.HISTORY.INDEX,
        icon: faFileMedical,
      },
    ],
  },
  {
    id: 5,
    name: "Pelayanan",
    path: "/pelayanan",
    icon: faGear,
    canAccessBy: ["super_admin", "admin", "user"],
    childs: [
      {
        id: 1,
        name: "Akupuntur",
        parentPath: "/pelayanan",
        path: ROUTES.PELAYANAN.AKUPUNTUR,
        icon: faPeopleArrows,
      },
    ],
  },
]);

export default ListMenu;
