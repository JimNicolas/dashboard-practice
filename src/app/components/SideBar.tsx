'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './sidebar.module.css';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';

const SIDEBAR_ELEMENTS = [
  {
    id: 0,
    label: 'Inicio',
    icon: (
      <div>
        <Icon icon='iconamoon:home-fill' width={24} height={24} />
      </div>
    ),

    path: '/',
  },
  {
    id: 1,
    label: 'Productos',
    icon: (
      <div>
        <Icon
          icon='streamline:shopping-catergories-chair-design-lounge-furniture-chair-interior-decorate-armchair-decoration'
          width={24}
          height={24}
        />
      </div>
    ),

    path: '/products',
  },
  {
    id: 2,
    label: 'Ventas',
    icon: (
      <div>
        <Icon icon='gala:chart' width={24} height={24} />
      </div>
    ),

    path: '/sales',
  },
  {
    id: 3,
    label: 'Pedidos',
    icon: (
      <div>
        <Icon icon='carbon:delivery-add' width={24} height={24} />
      </div>
    ),

    path: '/orders',
  },
  {
    id: 4,
    label: 'Clientes',
    icon: (
      <div>
        <Icon icon='mdi:user-box' width={24} height={24} />
      </div>
    ),

    path: '/clients',
  },
  {
    id: 5,
    label: 'Soporte',
    icon: (
      <div>
        <Icon icon='mdi:support' width={24} height={24} />
      </div>
    ),

    path: '/support',
  },
  {
    id: 6,
    label: 'Configuración',
    icon: (
      <div>
        <Icon icon='solar:settings-bold-duotone' width={24} height={24} />
      </div>
    ),

    path: '/settings',
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
        style={{ alignItems: sideBarExtended ? 'flex-start' : 'center' }}
      >
        <button className={styles.toggleButton} onClick={handleToggleSideBar}>
          <Icon icon='pepicons-pop:menu' width={24} height={24} />
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
                  justifyContent: sideBarExtended ? 'flex-start' : 'center',
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
            'Log Out'
          ) : (
            <Icon icon='tabler:logout' width={24} height={20} />
          )}
        </button>
      </div>
    </nav>
  );
};
export default SideBar;
