import styles from './Score.module.css';
import friends from '../assets/friends.jpeg';
import home from '../assets/pagina-inicial.png';

const Score = ({ score, totalOfQuestions }) => {

    const message = () => {
        if (score === 7) {
            return "UAU! Você é realmente fã da série hahah"
        } else if (score === 4 || score === 5 || score === 6) {
            return "Nossa! Você chegou quaaase lá!"
        } else if (score <= 3 && score !== 0) {
            return "Você assistiu a série toda!?"
        } else {
            return "Poxa, você não acertou nenhuma :/"
        };
    };

    return (
        <>
            <div className={styles.home}>
                <a href='https://emillymaarinho.github.io/quiz_friends/'>
                    <img src={home} alt='home' className={styles.home_size} />
                </a>
            </div>
            <h1 className={styles.message} >{message()} </h1>
            <h4 className={styles.score}>{score}{'/'}{totalOfQuestions}</h4>
            <img src={friends} className={styles.image} alt='friends'></img>
        </>
    );
}

export default Score;