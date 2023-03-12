window.onload = () => {
    // let rightAnswers = document.getElementsByClassName("right-answer")
    // let wrongAnswers = document.getElementsByClassName("wrong-answer")

    // for (const rightAnswer of rightAnswers){
    // rightAnswer.onclick = rightAnswerClick
    // }
    // for (const wrongAnswer of wrongAnswers)
    // {
    // wrongAnswer.onclick = wrongAnswerClick
    // }
    let questions = document.getElementsByClassName("question-box")

    for (const question of questions) {
        let rightAnswers = question.getElementsByClassName("right-answer")
        let wrongAnswers = question.getElementsByClassName("wrong-answer")
        console.log(wrongAnswers)
        let answered = false;

        for (const rightAnswer of rightAnswers) {
            rightAnswer.onclick = (event) => {
                if (!answered) {
                    event.target.classList.add("green")
                    answered = true;
                }
            };
        }

        for (const wrongAnswer of wrongAnswers) {
            wrongAnswer.onclick = (event) => {
                if (!answered) {
                    event.target.classList.add("red")
                    answered = true;
                }
            };
        }
    }
};

//This will select allow clicking of specified HTML content
    // rightAnswer.onclick = rightAnswerClick
    // wrongAnswer.onclick = wrongAnswerClick
// }

let rightAnswerClick = (event) => {
    event.target.classList.add("green")
}

let wrongAnswerClick = (event) => {
    event.target.classList.add("red")
}