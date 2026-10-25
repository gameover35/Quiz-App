import { useState, useCallback } from "react"

import QUESTIONS from "../questions.js"
import Question from "./Question.jsx"
import Summary from "./Summary.jsx"



export default function Quiz() {

    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const selectedQuestion = selectedAnswers.length;
    const quizIsComplete = selectedQuestion === QUESTIONS.length;


    const handleSelectAnswer = useCallback(function handleSelectAnswer(answergiven) {
        setSelectedAnswers((prevSelectedAnswers) => {
            return [...prevSelectedAnswers, answergiven];
        });

    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);


    if (quizIsComplete) {
        return (
            <Summary
                selectedAnswers={selectedAnswers}
            />
        )
    }

    return (
        <div id="quiz">
            <Question
                key={selectedQuestion}
                index={selectedQuestion}
                onSelectAnswer={handleSelectAnswer}
                handleSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}