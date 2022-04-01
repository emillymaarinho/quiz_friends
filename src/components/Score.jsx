import styles from './Score.module.css';
import friends from '../assets/friends.jpeg'

const Score = ({ score, character }) => {

    const retakeQuiz = () => {
        window.location.href = `http://localhost:3000/quiz_friends/quiz?character=${character}`;
    }

    return (<>
        <h1 className={styles.message} >Você acertou {score} pergunta(s)! </h1>
        <div className={styles.links}>
            <button onClick={retakeQuiz} className={styles.back}>Refazer</button>
            <a href='https://emillymaarinho.github.io/quiz_friends/' className={styles.home}>Início</a>
        </div>
        <img src={friends} className={styles.image} alt='friends'></img>
    </>
    );
}

export default Score;