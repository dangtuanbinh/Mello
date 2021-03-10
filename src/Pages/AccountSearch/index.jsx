import { Box } from "@material-ui/core";
import React from "react";
import wrapper from "../../HOCs/wrapper"
import SideBar from "../../Components/SideBar/index"
import SearchScreen from "../../Components/SearchScreen/index"
import "./index.css"

const AccountSearch = () => {
  return (
    <>
      <Box className="accountSearch">
          <SideBar />
          <SearchScreen />
      </Box>
    </>
  );
};

export default wrapper(AccountSearch);
