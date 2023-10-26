"use client";
import styles from "./page.module.css";
import ChartContainer from "@/app/components/ChartContainer";
import TotalSales from "@/app/components/revenue/TotalSales";
import ContainerSection from "@/app/components/ContainerSection";
import TitleSection from "@/app/components/TitleSection";

const page = () => {
  return (
    <ContainerSection>
      <header className={styles.headerContainer}>
        <div className={styles.containerTitle}>
          <TitleSection>Sales Report</TitleSection>
          <h2 className={styles.subtitleHeader}>Overview of product sales</h2>
        </div>
        <div className={styles.containerSelect}>
          <label className={styles.spanYear} htmlFor="selectYear">
            Year:
          </label>
          <select
            id="selectYear"
            name="selectYear"
            className={styles.selectYear}
          >
            <option value={2016}>2016</option>
            <option value={2017}>2017</option>
            <option value={2018}>2018</option>
            <option value={2019}>2019</option>
          </select>
        </div>
      </header>
      <ChartContainer />
      <section>
        <TotalSales />
      </section>
    </ContainerSection>
  );
};
export default page;
