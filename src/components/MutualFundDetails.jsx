import React from "react";
import { Line } from "react-chartjs-2";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FILTER } from "../constant/constant";
function MutualFundDetails({ currentData, onClickFilter, selectedCard }) {
  const data = {
    labels: currentData.date,
    datasets: [
      {
        label: "Nav",
        data: currentData.nav,
        fill: false,
        backgroundColor: "rgb(25 118 210 / 78%)",
        borderColor: "rgb(25 118 210 / 78%)",
        options: {
          elements: {
            point: {
              radius: 0,
            },
          },
        },
      },
    ],
  };
  var options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
    },
    elements: { point: { hitRadius: 5, hoverRadius: 5, radius: 0 } },
  };
  return (
    <div style={{ position: "fixed", width: "63%" }}>
      <div
        style={{
          fontFamily: "Roboto Helvetica Arial sans-serif",
          fontWeight: 400,
          fontSize: "1.6rem",
          lineHeight: 1.334,
        }}
      >
        {selectedCard.title}
        <span className="greenPercentage">
          {" "}
          {Math.sign(currentData.navPercentage) === -1
            ? currentData.navPercentage
            : `+${currentData.navPercentage}`}
          %
        </span>
      </div>
      <Line data={data} options={options} />
      <Stack spacing={2} direction="row" style={{ margin: "20px 40px" }}>
        <Button
          variant="outlined"
          onClick={() => onClickFilter(FILTER.ONE_MONTH)}
          style={{
            backgroundColor:
              currentData.filter === FILTER.ONE_MONTH && "#1976d2",
            color: currentData.filter === FILTER.ONE_MONTH && "#fff",
          }}
        >
          One Month
        </Button>
        <Button
          variant="outlined"
          onClick={() => onClickFilter(FILTER.SIX_MONTH)}
          style={{
            backgroundColor:
              currentData.filter === FILTER.SIX_MONTH && "#1976d2",
            color: currentData.filter === FILTER.SIX_MONTH && "#fff",
          }}
        >
          6 Month
        </Button>
        <Button
          variant="outlined"
          onClick={() => onClickFilter(FILTER.ONE_YEAR)}
          style={{
            backgroundColor:
              currentData.filter === FILTER.ONE_YEAR && "#1976d2",
            color: currentData.filter === FILTER.ONE_YEAR && "#fff",
          }}
        >
          1 year
        </Button>
        <Button
          variant="outlined"
          onClick={() => onClickFilter(FILTER.FIVE_YEAR)}
          style={{
            backgroundColor:
              currentData.filter === FILTER.FIVE_YEAR && "#1976d2",
            color: currentData.filter === FILTER.FIVE_YEAR && "#fff",
          }}
        >
          5 year
        </Button>
        <Button
          variant="outlined"
          style={{
            backgroundColor: currentData.filter === FILTER.ALL && "#1976d2",
            color: currentData.filter === FILTER.ALL && "#fff",
          }}
          onClick={() => onClickFilter(FILTER.ALL)}
        >
          All
        </Button>
      </Stack>
    </div>
  );
}

export default MutualFundDetails;
