import Quote from '../components/Quote';
import styles from '../styles/QuotePage.module.css';

const QuotePage = () => (
  <div className={styles.quote}>
    <h1 className={styles.h1quote}>Quote</h1>
    <Quote />
  </div>
);

export default QuotePage;
