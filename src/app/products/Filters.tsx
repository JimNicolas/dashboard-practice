"use client";
import styles from "./Filters.module.css";

export const Filters = () => {
  return (
    <div className={styles.container}>
      <select>
        <option>Sección</option>
        <option>Ropa</option>
        <option>Accesorios</option>
      </select>
      <select>
        <option>Valoración</option>
        <option>5⭐</option>
        <option>4⭐</option>
        <option>3⭐</option>
        <option>2⭐</option>
        <option>1⭐</option>
      </select>
      <select>
        <option>Fecha añadido</option>
        <option>Última semana</option>
        <option>Último mes</option>
        <option>Últimos 6 meses</option>
        <option>Último año</option>
        <option>Últimos 3 años</option>
      </select>
      <select>
        <option>Stock</option>
        <option>Sin Stock</option>
      </select>
      <button className={styles.aplicar}>Aplicar</button>
    </div>
  );
};
