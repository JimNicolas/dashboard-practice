"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const SIDEBAR_ELEMENTS = [
  {
    id: 0,
    label: "Leads",
    icon: (
      <div>
        <Icon
          icon="material-symbols:star-rate-rounded"
          width={24}
          height={24}
        />
      </div>
    ),

    path: "/",
  },
  {
    id: 1,
    label: "Revenue",
    icon: (
      <div>
        <Icon icon="gala:chart" width={24} height={24} />
      </div>
    ),

    path: "/revenue",
  },
  {
    id: 2,
    label: "Accounts",
    icon: (
      <div>
        <Icon icon="mdi:account-payment" width={24} height={24} />
      </div>
    ),

    path: "/accounts",
  },
  {
    id: 3,
    label: "Files",
    icon: (
      <div>
        <Icon icon="ph:files-fill" width={24} height={24} />
      </div>
    ),

    path: "/files",
  },
  {
    id: 4,
    label: "Tasks",
    icon: (
      <div>
        <Icon icon="iconoir:task-list" width={24} height={24} />
      </div>
    ),

    path: "/tasks",
  },
  {
    id: 5,
    label: "Reports",
    icon: (
      <div>
        <Icon icon="mdi:file-report" width={24} height={24} />
      </div>
    ),

    path: "/reports",
  },
  {
    id: 6,
    label: "Contacts",
    icon: (
      <div>
        <Icon icon="ant-design:contacts-filled" width={24} height={24} />
      </div>
    ),

    path: "/contacts",
  },
];
export const SideBar = () => {
  const [sideBarExtended, setSideBarExtended] = useState(false);
  const pathname = usePathname();
  const handleToggleSideBar = () => {
    setSideBarExtended(!sideBarExtended);
  };
  return (
    <nav
      className={`${styles.sideBar} ${
        sideBarExtended ? styles.showSideBar : styles.closeSideBar
      }`}
    >
      <div
        className={styles.containerTopElements}
        style={{ alignItems: sideBarExtended ? "flex-start" : "center" }}
      >
        <button className={styles.toggleButton} onClick={handleToggleSideBar}>
          <Icon icon="pepicons-pop:menu" width={24} height={24} />
        </button>
        <ul className={styles.containerElements}>
          {SIDEBAR_ELEMENTS.map((element) => (
            <li key={element.id} className={styles.sideBarElement}>
              <Link
                key={element.id}
                href={element.path}
                className={`${styles.link} ${
                  element.path === pathname ? styles.activeLink : null
                }`}
                style={{
                  justifyContent: sideBarExtended ? "flex-start" : "center",
                }}
              >
                {element?.icon}
                <span className={styles.iconText}>{element.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.containerLogOutButton}>
        <button className={styles.logOutButton}>
          {sideBarExtended ? (
            "Log Out"
          ) : (
            <Icon icon="tabler:logout" width={24} height={20} />
          )}
        </button>
      </div>
    </nav>
  );
};
export default SideBar;
