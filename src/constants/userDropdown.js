import React from "react";
import MyProfile from "../components/ui/User/MyProfile";
import Account from "../../src/components/ui/Dropdown/Account";
import Manage from "../../src/components/ui/Dropdown/Manage";
import ViewProfile from "../../src/components/ui/Dropdown/ViewProfile";

export const userDropdown = [
  {
    type: "component",
    component: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: 10,
        }}
      >
        {" "}
        <MyProfile />
      </div>
    ),
    to: "/account", // send user to other page on click
  },
  {
    type: "component",
    component: <ViewProfile />,
    to: "/me", // send user to other page on click
  },
  {},
  {
    type: "component",
    component: <Account />,
    to: "/account",
  },
  {},
  {
    type: "item",
    label: "Setting&Privacy",
    to: "/account", // send user to other page on click
  },
  {
    type: "item",
    label: "Help",
    to: "/account", // send user to other page on click
  },
  {
    type: "item",
    label: "Premium subscription settings",
    to: "/account", // send user to other page on click
  },
  {
    type: "item",
    label: "Language",
    to: "/account", // send user to other page on click
  },

  {
    // if you dont provide anything it will be divider
  },
  {
    type: "component",
    component: <Manage />,
    handler: () => {},
  },
  {},
  {
    type: "item",
    label: "Posts & Activity",
    to: "/account", // send user to other page on click
  },
  {
    type: "item",
    label: "Job posting account",
    to: "/account", // send user to other page on click
  },
  {},
  {
    type: "item",
    label: "Sign out",
    to: "/account", // send user to other page on click
  },
];
