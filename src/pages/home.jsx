import React from "react";
import MutualFundListing from "../components/MutualFundListing";
import MutualFundDetails from "../components/MutualFundDetails";
import HeaderContainer from "../containers/header";
import { Grid } from "@mui/material";
import useMutualFundData from "../hooks/useMutualFundData";

function Home() {
  const { mutualFundData } = useMutualFundData();
  return (
    <>
      <HeaderContainer>
        <Grid
          container
          style={{ margin: "91px 15px", width: "auto" }}
          spacing={3}
        >
          <Grid item xs={5} spacing={2}>
            <MutualFundListing mutualFundData={mutualFundData} />
          </Grid>
          <Grid item xs={7} spacing={2}>
            <MutualFundDetails />
          </Grid>
        </Grid>
      </HeaderContainer>
    </>
  );
}

export default Home;
