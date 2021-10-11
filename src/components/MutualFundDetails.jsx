import React from "react";
import { Line } from "react-chartjs-2";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
function MutualFundDetails({ mutualDetailData, currentData, setCurrentData }) {
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
      <Line data={data} options={options} />
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          onClick={() =>
            setCurrentData({
              date: mutualDetailData?.sixMonth?.date,
              nav: mutualDetailData?.sixMonth?.nav,
            })
          }
        >
          6 Month
        </Button>
      </Stack>
    </div>
  );
}

export default MutualFundDetails;
