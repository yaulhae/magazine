import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { StyledGrid, StyledImage, StyledText } from "../common";
import MagazineTemplate from "../common/MagazineTemplate";
import MagazineHeader from "../common/MagazineHeader";
import Card from "../components/noti/Card";
import { useSelector } from "react-redux";
import auth from "../module/auth";
import { realtime } from "../firebase";

const NotificationPageBlock = styled.div``;

const NotificationPage = () => {
  const user = useSelector(({ auth }) => auth.user);
  const [noti, setNoti] = useState([]);
  useEffect(() => {
    if (!user) {
      return;
    }
    const notiDB = realtime.ref(`noti/${user.uid}/list`);
    const _noti = notiDB.orderByChild("insert_dt");
    console.log(_noti);
    _noti.once("value", (snapshot) => {
      console.log(snapshot);
      if (snapshot.exists()) {
        let _data = snapshot.val();
        console.log(_data);

        let _noti_list = Object.keys(_data)
          .reverse()
          .map((s) => {
            return _data[s];
          });

        setNoti(_noti_list);
      }
    });
  }, [user]);

  return (
    <MagazineTemplate>
      <MagazineHeader />
      <NotificationPageBlock>
        <StyledGrid padding="16px" bg="#EFF6FF">
          {noti.map((n, idx) => {
            return <Card key={idx} n={n} />;
          })}
        </StyledGrid>
      </NotificationPageBlock>
    </MagazineTemplate>
  );
};

export default NotificationPage;
