import styles from './Home.module.css';
import Titulo from '../assets/titulo2.png';
import FriendsCharacters from '../components/FriendsCharacters';

const Home = () => {

    return (
        <>
            <div className={styles.title_centered}>
                <img alt="Título Friends" src={Titulo} className={styles.image} />
            </div>
            <div
                className={styles.text_centered}>
                <h1> Escolha seu favorito e divirta-se! </h1>
            </div>
            <FriendsCharacters />
            <div className={styles.footer}> Émilly Marinho </div>
        </>
    );
};

export default Home;