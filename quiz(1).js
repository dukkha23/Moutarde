const questions = [
    {
      question: "Question 1: Quelle est la capitale de la France?",
      answers: ["Paris", "Berlin", "Londres", "Madrid"],
      correctAnswer: "Paris"
    },
    // Ajoutez les 9 questions suivantes de maniÃ¨re similaire
  ];
  
  const quizContainer = document.getElementById('quiz-container');
  
  function generateQuiz() {
    questions.forEach((questionObj, index) => {
      const questionElement = document.createElement('div');
      questionElement.innerHTML = `<p>${questionObj.question}</p>`;
  
      questionObj.answers.forEach((answer, answerIndex) => {
        const answerElement = document.createElement('input');
        answerElement.type = 'radio';
        answerElement.name = `question${index}`;
        answerElement.value = answer;
        answerElement.id = `q${index}a${answerIndex}`;
  
        const labelElement = document.createElement('label');
        labelElement.innerHTML = answer;
        labelElement.setAttribute('for', `q${index}a${answerIndex}`);
  
        questionElement.appendChild(answerElement);
        questionElement.appendChild(labelElement);
      });
  
      quizContainer.appendChild(questionElement);
    });
  }
  
  generateQuiz();
 
      
  