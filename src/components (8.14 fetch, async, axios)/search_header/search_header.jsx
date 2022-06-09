import styles from "./search_header.module.css";

import React, { memo, useRef } from "react";

// memo 컴포넌트로 변경시켰다. Header는 props 전달받지 않는 한 바뀔 이유가 전혀없기때문.
const SearchHeader = memo(({onSearch}) => {
  const inputRef = useRef();
  const handleSearch = () => {
      const value=inputRef.current.value;
      onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
      if(event.key==='Enter'){
        handleSearch();
      }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="youtube" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        className={styles.input}
        type="search"
        placeholder="search..."
        onKeyPress={onKeyPress}
        ref={inputRef}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
})

export default SearchHeader;
