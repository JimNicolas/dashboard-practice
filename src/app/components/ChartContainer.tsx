import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./chartContainer.module.css";

// Importación dinámica de SplineChart
const SplineChart = dynamic(
  () => import("./SplineChart"),
  { ssr: false }, // Esto deshabilitará la renderización en el servidor para SplineChart
);

const ChartContainer = () => {
  const FILTERS = [
    {
      id: 0,
      name: "Year",
    },
    {
      id: 1,
      name: "Month",
    },
    {
      id: 2,
      name: "Daily",
    },
  ];
  const [filterActive, setFilterActive] = useState(0);
  const handleFilter = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    setFilterActive(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerButtons}>
        {FILTERS.map(({ id, name }) => (
          <button
            key={id}
            className={
              filterActive === id ? styles.activeOption : styles.desactiveOption
            }
            onClick={(event) => handleFilter(event, id)}
          >
            {name}
          </button>
        ))}
      </div>
      <SplineChart />
    </div>
  );
};

export default ChartContainer;
