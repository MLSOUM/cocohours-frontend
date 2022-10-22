import styles from '../styles/Reco.module.css';

function Reco() {
    return (
      <div>
        <main className={styles.main}>
          
         
          <h1 className={styles.title}>
            Want a movie recommendation?<br></br> Take your pick.
          </h1>
          <div className={styles.buttonContainer}>
          <button style={{borderWidth: "5px", borderColor: "#002642"}} className={styles.button}><h3>A TERRIBLE ONE</h3><p style={{marginTop: '-9px'}}>I enjoy mediocrity</p></button>
          <button style={{borderWidth: "5px", borderColor: "#840032"}} className={styles.button}><h3>A MASTERPIECE</h3><p style={{marginTop: '-9px'}}>Viva le cinema</p></button>
          </div>
        </main>
      </div>
    );
  }
  
  export default Reco;
  