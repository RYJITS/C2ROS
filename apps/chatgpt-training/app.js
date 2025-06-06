// Formation ChatGPT pour C2R OS
function initChatGPTTraining() {
    console.log('🚀 Formation ChatGPT initialisée');
}

function submitQuiz() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    let score = 0;
    if (q1 && q1.value === 'b') score++;
    if (q2 && q2.value === 'b') score++;
    if (q3 && q3.value === 'b') score++;
    const result = document.getElementById('quiz-result');
    if (result) {
        result.textContent = `Score : ${score}/3`;
    }
}

window.initChatGPTTraining = initChatGPTTraining;
window.submitQuiz = submitQuiz;
