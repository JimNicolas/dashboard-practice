import React from "react";
import styles from "./TotalSales.module.css";
import { numberFormat } from "@/app/utils/formatString";

const TotalSales = () => {
  const totalSales = 294023;
  return (
    <div className={styles.container}>
      <h1>${numberFormat(totalSales)}</h1>
      <p>
        Total components sold in <span>JUN-JUL</span>
      </p>
    </div>
  );
};

export default TotalSales;
