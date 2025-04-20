// navSections.ts
import DashboardIcon from "@mui/icons-material/Dashboard";
import LockIcon from "@mui/icons-material/Lock";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AddIcon from "@mui/icons-material/Add";
import ModeIcon from "@mui/icons-material/Mode";
import HandymanIcon from "@mui/icons-material/Handyman";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import TelegramIcon from "@mui/icons-material/Telegram";
import CrueltyFreeIcon from "@mui/icons-material/CrueltyFree";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

// Define types for nav sections
interface NavItem {
  text: string;
  icon: JSX.Element;
  link: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    title: "Explore",
    items: [
      {
        text: "Presales", icon: <DashboardIcon />, link: "/presales" },
      {
          text: "Locks", icon: <LockIcon />, link: "/locks" },
      {
            text: "Staking", icon: <MonetizationOnOutlinedIcon />, link: "/staking" },
      { text: "OTC Sales", icon: <SyncAltIcon />, link: "/otc - sales" },
    ],
  },
  {
    title: "Developers",
    items: [
      {
        text: "Create", icon: <AddIcon />, link: "/create" },
      {
          text: "Manage", icon: <ModeIcon />, link: "/manage" },
      { text: "Utility", icon: <HandymanIcon />, link: "/utility" },
    ],
  },
  {
    title: "Extras",
    items: [
      {
        text: "Docs", icon: <InsertDriveFileIcon />, link: "/docs" },
      {
          text: "Sale Alerts", icon: <TelegramIcon />, link: "/sale - alerts" },
      {
            text: "Alpha Club", icon: <CrueltyFreeIcon />, link: "/alpha - club" },
      { text: "SolSale", icon: <HourglassEmptyIcon />, link: "/solsale" },
    ],
  },
];