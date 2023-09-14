import ChartContainer from '../components/ChartContainer';
import styles from './page.module.css';
const page = () => {
  return (
    <main className={styles.container}>
      <header className={styles.headerContainer}>
        <div className={styles.containerTitle}>
          <h1 className={styles.titleHeader}>Sales Report</h1>
          <h2 className={styles.subtitleHeader}>Overview of product sales</h2>
        </div>
        <div className={styles.containerSelect}>
          <label className={styles.spanYear} htmlFor='selectYear'>
            Year:
          </label>
          <select
            id='selectYear'
            name='selectYear'
            className={styles.selectYear}
          >
            <option value={2016}>2016</option>
            <option value={2017}>2017</option>
            <option value={2018}>2018</option>
            <option value={2019}>2019</option>
          </select>
        </div>
      </header>
      <ChartContainer />
    </main>
  );
};
export default page;
