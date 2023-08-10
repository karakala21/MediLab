import React from "react";
import { Nav } from "shards-react";

import Notifications from "./AdminNotifications";
import UserActions from "./AdminUserActions";

export default () => (
  <Nav navbar className="border-left flex-row">
    <Notifications />
    <UserActions />
  </Nav>
);
