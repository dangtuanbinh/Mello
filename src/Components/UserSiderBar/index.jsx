import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";

const UserSideBar = () => {
  return (
    <>
      <Box className="userSideBar">
        <Box className="userSideBar__info">
          <Box className="userSideBar__info__top">
            <img
              src="https://timesofindia.indiatimes.com/photo/67586673.cms"
              alt="User profile"
            />
            <Box className="userSideBar__info__name">
              <h3>Dau</h3>
              <span>@daudien</span>
            </Box>
          </Box>

          <Box className="userSideBar__info__bottom">
            <Box className="userSideBar__info__statistic">
              <h3>46</h3>
              <span>Posts</span>
            </Box>

            <Box className="userSideBar__info__statistic">
              <h3>2.3k</h3>
              <span>Follower</span>
            </Box>

            <Box className="userSideBar__info__statistic">
              <h3>526</h3>
              <span>Following</span>
            </Box>
          </Box>
        </Box>

        <Box className="userSideBar__navigation"></Box>
      </Box>
    </>
  );
};

export default UserSideBar;
