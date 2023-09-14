'use client';
import { useState } from 'react';
import styles from './chartContainer.module.css';
import SplineChart from './SplineChart';
const ChartContainer = () => {
  const FILTERS = [
    {
      id: 0,
      name: 'Year',
    },
    {
      id: 1,
      name: 'Month',
    },
    {
      id: 2,
      name: 'Daily',
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
