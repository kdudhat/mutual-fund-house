import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import moment from "moment";
import useFindNavPercentage from "../hooks/useFindNavPercentage";
function MutualFundListing({ mutualFundData, onClickCard, selectedCard }) {
  const { findNavPercentage } = useFindNavPercentage();
  return (
    <>
      {mutualFundData?.map((item, index) => {
        const data = {
          card: {
            nav: [item.data[1].nav, item.data[0].nav],
          },
        };
        const navPer = findNavPercentage(data, "card");
        return (
          <Card
            sx={{
              // display: "flex",
              marginBottom: "22px",
              boxShadow: "2px 3px 11px 1px rgb(0 0 0 / 20%)",
              backgroundColor:
                selectedCard.index === index ? "rgb(0 0 0 / 10%)" : "#fff",
              cursor: "pointer",
            }}
            onClick={() => onClickCard(item, index)}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {item?.meta?.scheme_name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  style={{ color: "rgb(25 118 210 / 78%)" }}
                >
                  {item?.meta?.fund_house}
                </Typography>
              </CardContent>
              <CardContent
                sx={{ flex: "1 0 auto" }}
                style={{ paddingTop: "0px", display: "flex" }}
              >
                <Typography component="div" variant="h6">
                  Nav
                </Typography>
                <Typography
                  component="div"
                  variant="h5"
                  style={{ marginLeft: "5px", fontWeight: "bold" }}
                  spacing={2}
                >
                  ₹{parseFloat(item?.data[0]?.nav).toFixed(4)}
                  <span className="greenPercentage">
                    {Math.sign(navPer) === -1 ? navPer : `+${navPer}`}%
                  </span>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    style={{ color: "rgb(25 118 210 / 78%)" }}
                  >
                    {moment(item?.data[0]?.date, "DD-MM-YYYY").format(
                      "D MMMM YYYY"
                    )}
                  </Typography>
                </Typography>
              </CardContent>
            </Box>
          </Card>
        );
      })}
    </>
  );
}

export default MutualFundListing;
