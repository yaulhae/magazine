import styled from "styled-components";
import React, { useEffect, useState } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Badge } from "@material-ui/core";
import { realtime } from "../firebase";
import { useSelector } from "react-redux";

const NotiBadgeBlock = styled.div``;

const NotiBadge = () => {
  const [is_read, setIsRead] = useState(true);
  const user_id = useSelector(({ auth }) => auth.user.uid);
  const notiCheck = () => {
    const notiDB = realtime.ref(`noti/${user_id}`);
    notiDB.update({ read: true });
  };
  useEffect(() => {
    const notiDB = realtime.ref(`noti/${user_id}`);
    notiDB.on("value", (snapshot) => {
      setIsRead(snapshot.val().read);
    });
    return () => notiDB.off();
  }, []);
  return (
    <NotiBadgeBlock>
      <Badge
        color="secondary"
        variant="dot"
        invisible={is_read}
        onClick={notiCheck}
      >
        <NotificationsIcon />
      </Badge>
    </NotiBadgeBlock>
  );
};

export default NotiBadge;
