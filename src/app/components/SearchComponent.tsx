'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './SearchComponent.module.css';
import { Icon } from '@iconify/react';

const SearchComponent = () => {
  const [searchEntrance, setSearchEntrance] = useState('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchEntrance(e.target.value);
  };
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchEntrance);
  };
  return (
    <div className={styles.search}>
      <form className={styles.container} onSubmit={handleSearch}>
        <input
          className={styles.input}
          name={'searchEntrance'}
          value={searchEntrance}
          onChange={handleInputChange}
        />
        <button className={styles.submit} type={'submit'}>
          <Icon
            icon='ic:baseline-search'
            width={24}
            height={24}
            color={'#a7acce'}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
