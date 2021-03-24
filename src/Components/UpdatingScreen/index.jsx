import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";
import brandImage from "../../Assets/images/brand-removebg-preview.png";

const UpdatingScreen = () => {
  return (
    <div>
      <Box className="updatingScreen">
        <img src={brandImage} alt="brand image" />
        <h4>Oops, we are updating, please come back later UwU !!</h4>
      </Box>
    </div>
  );
};

export default UpdatingScreen;
