import styles from './Quiz.module.css';
import QuestionsMonica from '../database/QuestionsMonica';
import QuestionsChandler from '../database/QuestionsChandler';
import QuestionsRachel from '../database/QuestionRachel';
import QuestionsPhoebe from '../database/QuestionPhoebe';
import QuestionsJoey from '../database/QuestionsJoey';
import QuestionsRoss from '../database/QuestionsRoss';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import Score from '../components/Score';

const QuizCharacter = () => {

    const location = useLocation();
    const [clicked, setClicked] = useState(false);
    const [indexQuestion, setIndexQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
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
            setQuestionsData(QuestionsMonica)
        } else if (character === "chandler") {
            setQuestionsData(QuestionsChandler);
        } else if (character === "phoebe") {
            setQuestionsData(QuestionsPhoebe);
        } else if (character === "rachel") {
            setQuestionsData(QuestionsRachel);
        } else if (character === "joey") {
            setQuestionsData(QuestionsJoey);
        } else if (character === "ross") {
            setQuestionsData(QuestionsRoss);
        }
    }, [location.search]);

    const handleOptionclick = (selectedItem, index) => {
        if (!clicked) {
            setClicked(true);

            const option = document.getElementById(index);
            const response = questionsData.questions[indexQuestion].answer;

            if (selectedItem === response) {
                option.className = styles.success;
                setScore(score + 1);
                setTimeout(function () {
                    option.className = styles.option;
                }, 1000);
            } else {
                option.className = styles.error;
                setTimeout(function () {
                    option.className = styles.option;
                }, 1000);
            };
        };
    };

    const goNextQuestion = () => {
        const nextQuestion = indexQuestion + 1;
        if (nextQuestion < questionsData.questions.length) {
            setIndexQuestion(nextQuestion);
            setClicked(false);
        } else {
            setShowScore(true);
        };
    };

    return (
        <div className={styles.centered}>
            {!showScore ?
                <>
                    <h1 className={styles.phrase}>{questionsData.phrase}</h1>
                    <div className={styles.question}>
                        <option >{questionsData.questions[indexQuestion].title}</option>
                    </div>
                    <div className={styles.option_centered}>
                        {questionsData.questions[indexQuestion].options.map((option, index) => (
                            <option className={styles.option} id={index}
                                onClick={() => handleOptionclick(option, index)} key={index}>{option}</option>
                        ))}
                    </div>
                    <button className={styles.button}
                        onClick={() => goNextQuestion()} >Próxima</button>
                    <div className={styles.score}>
                        Pontuação {score}{'/'}{questionsData.questions.length}
                    </div>
                </> : <Score score={score} />}
        </div>
    );
};

export default QuizCharacter;