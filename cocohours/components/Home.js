import styles from '../styles/Home.module.css';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        
       
        <h1 className={styles.title}>
          A good and a bad movie recommendation.<br></br> Because why not broaden your horizons.
        </h1>
        <div className={styles.buttonContainer}>
        <button style={{borderWidth: "5px", borderColor: "#002642"}} className={styles.button}><h3>SIGN-IN</h3></button>
        <button style={{borderWidth: "5px", borderColor: "#840032"}} className={styles.button}><h3>SIGN-UP</h3></button>
        <button style={{borderWidth: "5px", borderColor: "#840032"}} className={styles.button}><Link href="/reco"><h3>TRY IT FOR FUN</h3></Link></button>
        </div>
      </main>
    </div>
  );
}

export default Home;
