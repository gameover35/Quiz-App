import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ selectedAnswers }) {

    const skippedAnswers = selectedAnswers.filter((answer) => answer === null).length;
    const correctAnswers = selectedAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length;

    const skippedAnswersShare = Math.round((skippedAnswers / selectedAnswers.length) * 100);
    const correctAnswersShare = Math.round((correctAnswers / selectedAnswers.length) * 100);

    const wrongAnswerShare = 100 - skippedAnswersShare - correctAnswersShare;


    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Quiz Complete" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersShare}%</span>
                    <span className="text">unanswerred</span>
                </p>
                <p>
                    <span className="number">{correctAnswersShare}%</span>
                    <span className="text">correct</span>
                </p>
                <p>
                    <span className="number">{wrongAnswerShare}%</span>
                    <span className="text">wrong</span>
                </p>
            </div>
            <ol id="summary-questions">

                {selectedAnswers.map((answer, index) => {

                    let CssClass = 'user-answer';
                    if (answer === null) {
                        CssClass += ' skipped';
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        CssClass += ' correct';
                    } else {
                        CssClass += ' wrong';
                    }



                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={CssClass}>{answer === null ? 'skipped' : answer}</p>
                        </li>
                    )
                })}

            </ol>
        </div>
    )
}