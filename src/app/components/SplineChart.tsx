import React from "react";
import Chart from "react-apexcharts";
import styles from "./splineChart.module.css";
import { THEME_COLOR } from "@/app/utils/colorThemes";
import { MONTHS } from "@/app/utils/dates";
import { transformNumberToKFormat } from "@/app/utils/mathFunctions";

type Props = {};
const labelStyles = {
  colors: "#808190",
  fontWeight: 600,
  fontSize: "14px",
};
export default function SplineChart({}: Props) {
  const colors = THEME_COLOR.ChartColor;
  const config = {
    options: {
      chart: {
        width: 500,
        height: 300,
      },
      xaxis: {
        categories: MONTHS,
        labels: {
          style: labelStyles,
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        labels: {
          formatter: function (value: any) {
            return transformNumberToKFormat(value);
          },
          style: labelStyles,
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [
          3000, 4000, 4500, 5000, 4900, 6000, 7000, 9100, 3300, 2200, 9900,
        ],
        color: colors[0],
      },
      {
        name: "series-2",
        data: [
          1000, 2000, 2500, 3000, 2900, 4000, 5000, 7100, 3300, 2200, 9900,
        ],
        color: colors[1],
      },
      {
        name: "series-3",
        data: [
          1000, 2000, 2500, 3000, 2900, 4000, 5000, 700, 3300, 2200, 12000,
        ],
        color: colors[2],
      },
    ],
    responsive: [
      {
        breakpoint: 1000,
        options: {},
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Chart
        options={config.options}
        series={config.series}
        type="area"
        // height="400"
        // width="1000"
      />
    </div>
  );
}
