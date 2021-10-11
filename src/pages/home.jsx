import React from "react";
import MutualFundListing from "../components/MutualFundListing";
import MutualFundDetails from "../components/MutualFundDetails";
import HeaderContainer from "../containers/header";
import { Grid } from "@mui/material";
import useMutualFundData from "../hooks/useMutualFundData";

function Home() {
  const {
    mutualFundData,
    mutualDetailData,
    setMutualDetailData,
    onClickCard,
    currentData,
    setCurrentData,
  } = useMutualFundData();
  return (
    <>
      <HeaderContainer>
        <Grid
          container
          style={{ margin: "91px 15px", width: "auto" }}
          spacing={3}
        >
          <Grid item xs={4} spacing={2}>
            <MutualFundListing
              mutualFundData={mutualFundData}
              onClickCard={onClickCard}
            />
          </Grid>
          <Grid item xs={8} spacing={2}>
            <MutualFundDetails
              mutualDetailData={mutualDetailData}
              currentData={currentData}
              setCurrentData={setCurrentData}
            />
          </Grid>
        </Grid>
      </HeaderContainer>
    </>
  );
}

export default Home;
