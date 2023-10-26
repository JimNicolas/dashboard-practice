import React, { ReactNode } from "react";
import styles from "./ContainerSection.module.css";

interface MiComponentsProps {
  children: ReactNode;
}

const ContainerSection: React.FC<MiComponentsProps> = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default ContainerSection;
