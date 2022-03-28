import styles from './Score.module.css';
import friends from '../assets/friends.jpeg'
import { useLocation } from 'react-router';

const Score = ({ score }) => {
    const location = useLocation();

    return (<>
        <h1 className={styles.message} >Você acertou {score} pergunta(s)! </h1>
        <div className={styles.links}>
            <a href={location.search.split(",")}>Voltar</a>
            <a href='http://localhost:3000/'>Início</a>
        </div>
        <img src={friends} className={styles.image} alt='friends'></img>
    </>
    )
}

export default Score;