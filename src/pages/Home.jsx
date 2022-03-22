import React, { useState } from 'react';
import styles from './Home.module.css';
import Titulo from '../assets/titulo2.png';
import FriendsCharacters from '../components/FriendsCharacters';

const Home = () => {
    let [characterPhrase, setCharacterPhrase] = useState("");

    return (
        <div >
            <div className={styles.title_centered}>
                <img alt="Título Friends" src={Titulo} />
            </div>
            <div
                className={styles.text_centered}>
                <h1> Escolha seu favorito e divirta-se! </h1>
            </div>
            <FriendsCharacters setCharacterPhrase={setCharacterPhrase} />
            <div style={{ textAlign: "center" }}>
                <h1 id={styles.character_phrase}> {characterPhrase} </h1>
            </div>
            <div className={styles.footer}> Émilly Marinho </div>
        </div>
    );
};

export default Home;