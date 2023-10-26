import React, { useState } from "react";
import styles from "./FiltersOrder.module.css";
import { Icon } from "@iconify/react";

const FiltersOrder = () => {
  const [searchPress, setSearchPress] = useState<boolean>(false);
  const handleInputSearch = () => {
    setSearchPress(!searchPress);
  };
  return (
    <div className={styles.containerFilters}>
      <div className={styles.containerButtons}>
        <button>Todas</button>
        <button>Completadas</button>
        <button>Enviados</button>
        <button>En Proceso</button>
        <button>Canceladas</button>
      </div>
      <div className={styles.containerSearch}>
        <input
          type="text"
          placeholder="Buscar"
          className={searchPress ? styles.openInput : styles.closeInput}
        />
        <button onClick={handleInputSearch}>
          <Icon
            icon="ic:baseline-search"
            width={24}
            height={24}
            color={"#a7acce"}
          />
        </button>
      </div>
    </div>
  );
};

export default FiltersOrder;
