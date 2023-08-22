import Calculator from '../components/Calculator';
import styles from '../styles/CalculatorPage.module.css';

const CalculatorPage = () => (
  <div className={styles.calc}>
    <h2 className={styles.h2calc}>Lets do some Math!</h2>
    <Calculator />
  </div>
);
export default CalculatorPage;
