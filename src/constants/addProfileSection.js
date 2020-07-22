import ProfileSection from "../components/ui/AddProfileSection/ProfileSection";
import React from "react";

export default [
  { type: "component", component: <ProfileSection title={"Intro"} /> },
  { type: "component", component: <ProfileSection title={"About"} /> },
  { type: "component", component: <ProfileSection title={"Featured"} /> },
  { type: "component", component: <ProfileSection title={"Background"} /> },
  { type: "component", component: <ProfileSection title={"Skills"} /> },
  {
    type: "component",
    component: <ProfileSection title={"Accomplishments"} />,
  },
  {
    type: "component",
    component: <ProfileSection title={"Additional Information"} />,
  },
  {
    type: "component",
    component: <ProfileSection title={"Supported Languages"} />,
  },
];
