import React from "react";
import AppBar from "material-ui/AppBar";
import Badge from "material-ui/Badge";
import NotificationsIcon from "material-ui/svg-icons/social/notifications";

const Header = ({ children, notifications }) => (
  <div>
    <AppBar
      title="Notifications"
      iconElementRight={
        <Badge badgeContent={notifications.length} secondary={true}>
          <NotificationsIcon />
        </Badge>
      }
    />
    {children}
  </div>
);

Header.propTypes = {
  children: React.PropTypes.object,
  notifications: React.PropTypes.array
};

export default Header;
