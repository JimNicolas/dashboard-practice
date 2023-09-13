'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './sidebar.module.css';
import { AiFillStar, AiOutlineBarChart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsCardChecklist } from 'react-icons/bs';
import { LiaAddressCardSolid } from 'react-icons/lia';
import { HiDocumentText } from 'react-icons/hi';
import { TbReportSearch } from 'react-icons/tb';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { BiSolidLogOut } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
const SIDEBAR_ELEMENTS = [
  {
    id: 0,
    label: 'Leads',
    icon: <AiFillStar size={24} />,
    path: '/',
  },
  {
    id: 1,
    label: 'Revenue',
    icon: <AiOutlineBarChart size={24} />,
    path: '/revenue',
  },
  {
    id: 2,
    label: 'Accounts',
    icon: <LiaAddressCardSolid size={24} />,
    path: '/accounts',
  },
  {
    id: 3,
    label: 'Files',
    icon: <HiDocumentText size={24} />,
    path: '/files',
  },
  {
    id: 4,
    label: 'Tasks',
    icon: <BsCardChecklist size={24} />,
    path: '/tasks',
  },
  {
    id: 5,
    label: 'Reports',
    icon: <TbReportSearch size={24} />,
    path: '/reports',
  },
  {
    id: 6,
    label: 'Contacts',
    icon: <RiContactsBook2Fill size={24} />,
    path: '/contacts',
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
      className={`
          ${styles.sideBar} ${
        sideBarExtended ? styles.showSideBar : styles.closeSideBar
      }`}
    >
      <div
        className={styles.containerTopElements}
        style={{ alignItems: sideBarExtended ? 'flex-start' : 'center' }}
      >
        <button className={styles.toggleButton} onClick={handleToggleSideBar}>
          <GiHamburgerMenu className={styles.toggleIcon} size={'24'} />
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
                {element.icon}
                {sideBarExtended ? element.label : ''}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.containerLogOutButton}>
        <button className={styles.logOutButton}>
          {sideBarExtended ? 'Log Out' : <BiSolidLogOut size={20} />}
        </button>
      </div>
    </nav>
  );
};
export default SideBar;
