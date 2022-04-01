import styles from './Quiz.module.css';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import Score from '../components/Score';

import QuestionsMonica from '../database/QuestionsMonica';
import QuestionsChandler from '../database/QuestionsChandler';
import QuestionsRachel from '../database/QuestionRachel';
import QuestionsPhoebe from '../database/QuestionPhoebe';
import QuestionsJoey from '../database/QuestionsJoey';
import QuestionsRoss from '../database/QuestionsRoss';

import imgMonica from '../assets/monica.jpeg';
import imgRachel from '../assets/rachel.jpeg';
import imgRoss from '../assets/ross.webp';
import imgJoye from '../assets/joye.jpeg';
import imgChandler from '../assets/chandler.jpeg';
import imgPhoebe from '../assets/phoebe.jpeg';

const QuizCharacter = () => {

    const location = useLocation();
    const [clicked, setClicked] = useState(false);
    const [image, setImage] = useState();
    const [indexQuestion, setIndexQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [clearStyle, setclearStyle] = useState();
    const [score, setScore] = useState(0);
    const [characterQuiz, setCharacterQuiz] = useState();
    const [questionsData, setQuestionsData] = useState(
        {
            phrase: "", questions: [{
                title: "",
                options: [],
                answer: ""
            }]
        }
    );

    useEffect(() => {
        // eslint-disable-next-line
        const character = location.search.replace(/^.*?\=/, '');
        if (character === "monica") {
            setQuestionsData(QuestionsMonica);
            setCharacterQuiz(character);
            setImage(imgMonica);
        } else if (character === "chandler") {
            setQuestionsData(QuestionsChandler);
            setCharacterQuiz(character);
            setImage(imgChandler);
        } else if (character === "phoebe") {
            setQuestionsData(QuestionsPhoebe);
            setCharacterQuiz(character);
            setImage(imgPhoebe);
        } else if (character === "rachel") {
            setQuestionsData(QuestionsRachel);
            setCharacterQuiz(character);
            setImage(imgRachel);
        } else if (character === "joey") {
            setQuestionsData(QuestionsJoey);
            setCharacterQuiz(character);
            setImage(imgJoye);
        } else if (character === "ross") {
            setQuestionsData(QuestionsRoss);
            setCharacterQuiz(character);
            setImage(imgRoss);
        }
    }, [location.search]);

    const handleOptionclick = (selectedItem, index) => {
        if (!clicked) {
            setClicked(true);

            const option = document.getElementById(index);
            setclearStyle(option)
            const response = questionsData.questions[indexQuestion].answer;

            if (selectedItem === response) {
                option.className = styles.success;
                setScore(score + 1);
            } else {
                option.className = styles.error;
            };
        };
    };

    const goNextQuestion = () => {
        const nextQuestion = indexQuestion + 1;
        if (nextQuestion < questionsData.questions.length) {
            setIndexQuestion(nextQuestion);
            setClicked(false);
            setTimeout(function () {
                clearStyle.className = styles.option;
            });
        } else {
            setShowScore(true);
        };
    };

    return (
        <div className={styles.centered}>
            {!showScore ?
                <>
                    <img className={styles.image} src={image} alt="character"></img>
                    <h1 className={styles.phrase}>{questionsData.phrase}</h1>
                    <div className={styles.question}>
                        <h1 >{questionsData.questions[indexQuestion].title}</h1>
                    </div>
                    <div className={styles.option_centered}>
                        {questionsData.questions[indexQuestion].options.map((option, index) => (
                            <h3 className={styles.option} id={index}
                                onClick={() => handleOptionclick(option, index)} key={index}>{option}</h3>
                        ))}
                    </div>
                    <button className={styles.button}
                        onClick={() => goNextQuestion()} >Próxima</button>
                    <div className={styles.score}>
                        Pontuação {score}{'/'}{questionsData.questions.length}
                    </div>
                </> : <Score score={score} character={characterQuiz} />}
        </div>
    );
};

export default QuizCharacter;