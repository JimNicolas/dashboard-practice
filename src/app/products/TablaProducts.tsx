"use client";
import React from "react";
import { productos } from "@/app/data/db.json";
import Image from "next/image";
import styles from "./TablaProducts.module.css";
import { Icon } from "@iconify/react";

const TablaProducts = () => {
  // @ts-ignore
  return (
    <table border={1} bordercolor="#3A3E50" cellSpacing={0}>
      <tbody className={styles.tabla}>
        <tr className={`${styles.row} ${styles.column}`}>
          <th>Id</th>
          <th>Imágen</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Acción</th>
        </tr>
        {productos.map((product, index) => (
          <tr key={product.id} className={`${styles.row} ${styles.rowData}`}>
            <th>{product.id}</th>
            <th>
              <Image
                src={product.imagen}
                width={100}
                height={100}
                alt={product.nombre}
              />
            </th>
            <th>{product.nombre}</th>
            <th>{product.descripcion}</th>
            <th>{product.precio}</th>
            <th>{product.stock}</th>
            <th className={styles.containerButtons}>
              <button className={styles.editar}>
                <Icon icon="akar-icons:edit" />
              </button>
              <button className={styles.eliminar}>
                <Icon icon="ic:baseline-delete" />
              </button>
              <button className={styles.detalles}>
                <Icon icon="ph:info-fill" />
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaProducts;
