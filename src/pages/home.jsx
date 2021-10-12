import React from "react";
import MutualFundListing from "../components/MutualFundListing";
import MutualFundDetails from "../components/MutualFundDetails";
import HeaderContainer from "../containers/header";
import { Grid } from "@mui/material";
import useMutualFundData from "../hooks/useMutualFundData";
import SearchBar from "../components/SearchBar";

function Home() {
  const {
    mutualFundData,
    onClickCard,
    currentData,
    selectedCard,
    onClickFilter,
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
            <SearchBar />
            <MutualFundListing
              mutualFundData={mutualFundData}
              onClickCard={onClickCard}
              selectedCard={selectedCard}
            />
          </Grid>
          <Grid item xs={8} spacing={2}>
            <MutualFundDetails
              currentData={currentData}
              onClickFilter={onClickFilter}
            />
          </Grid>
        </Grid>
      </HeaderContainer>
    </>
  );
}

export default Home;
