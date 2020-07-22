import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai";
import {
  RiBriefcase2Line,
  RiQuestionAnswerLine,
  RiNotification3Line,
} from "react-icons/ri";
export const navbarMenu = [
  {
    label: "Home",
    to: "/",
    icon: AiOutlineHome,
  },
  {
    label: "Network",
    to: "/network",
    icon: AiOutlineTeam,
  },
  {
    label: "Jobs",
    to: "/jobs",
    icon: RiBriefcase2Line,
  },
  {
    label: "Messaging",
    to: "/messaging",
    icon: RiQuestionAnswerLine,
  },
  {
    label: "Notifications",
    to: "/notifications",
    icon: RiNotification3Line,
  },
];
