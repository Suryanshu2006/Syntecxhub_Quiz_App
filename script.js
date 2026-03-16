const questionsBank = {
    currentAffairs: [
        { q: "Which country hosted the G20 Summit in 2023?", options: ["India", "USA", "Brazil", "Japan"], correct: 0 },
        { q: "Who is the current President of India?", options: ["Droupadi Murmu", "Ram Nath Kovind", "Pratibha Patil", "Jagdeep Dhankhar"], correct: 0 },
        { q: "Which state recently celebrated the 'Hornbill Festival'?", options: ["Nagaland", "Assam", "Manipur", "Mizoram"], correct: 0 },
        { q: "India's first solar mission is named:", options: ["Aditya-L1", "Surya-1", "Solaris-X", "Bhaskar"], correct: 0 },
        { q: "The 2024 ICC Men's T20 World Cup was won by:", options: ["South Africa", "India", "Australia", "England"], correct: 1 },
        { q: "Which AI model is developed by Google?", options: ["GPT-4", "Gemini", "Claude", "Llama"], correct: 1 },
        { q: "The 'Silicon Valley of India' is:", options: ["Hyderabad", "Pune", "Bengaluru", "Chennai"], correct: 2 },
        { q: "Who is the CEO of Microsoft?", options: ["Sundar Pichai", "Satya Nadella", "Tim Cook", "Sam Altman"], correct: 1 },
        { q: "Which country is the newest member of NATO (2024)?", options: ["Finland", "Sweden", "Ukraine", "Norway"], correct: 1 },
        { q: "What is the capital of Ukraine?", options: ["Kyiv", "Odessa", "Kharkiv", "Lviv"], correct: 0 },
        { q: "Highest civilian award in India?", options: ["Padma Bhushan", "Bharat Ratna", "Param Vir Chakra", "Padma Shri"], correct: 1 },
        { q: "Who won the Nobel Peace Prize 2023?", options: ["Narges Mohammadi", "Malala Yousafzai", "Greta Thunberg", "Abiy Ahmed"], correct: 0 },
        { q: "Which Indian city is known as the 'Pink City'?", options: ["Jodhpur", "Jaipur", "Udaipur", "Bhopal"], correct: 1 },
        { q: "The official language of Andhra Pradesh?", options: ["Hindi", "Tamil", "Telugu", "Kannada"], correct: 2 },
        { q: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
        { q: "What is the currency of Japan?", options: ["Yen", "Yuan", "Won", "Euro"], correct: 0 },
        { q: "Who is the ISRO Chairman currently?", options: ["S. Somanath", "K. Sivan", "A.S. Kiran Kumar", "Madhavan Nair"], correct: 0 },
        { q: "The movie that won Best Picture at Oscars 2024?", options: ["Barbie", "Oppenheimer", "Poor Things", "Past Lives"], correct: 1 },
        { q: "Which river is called the 'Ganga of the South'?", options: ["Krishna", "Godavari", "Cauvery", "Narmada"], correct: 1 },
        { q: "The 2026 FIFA World Cup will be held in?", options: ["Qatar", "USA, Canada, Mexico", "France", "Brazil"], correct: 1 }
    ],
    physics: [
        { q: "Value of acceleration due to gravity (g)?", options: ["9.8 m/s²", "8.9 m/s²", "10 m/s²", "7.5 m/s²"], correct: 0 },
        { q: "SI unit of Power?", options: ["Joule", "Watt", "Newton", "Pascal"], correct: 1 },
        { q: "Light travels fastest in?", options: ["Air", "Water", "Vacuum", "Glass"], correct: 2 },
        { q: "Mirror used by dentists?", options: ["Convex", "Concave", "Plane", "Cylindrical"], correct: 1 },
        { q: "Primary colors of light?", options: ["Red, Blue, Yellow", "Red, Green, Blue", "Yellow, Blue, Green", "None"], correct: 1 },
        { q: "Which law explains the lift of an airplane?", options: ["Newton's Law", "Bernoulli's Principle", "Pascal's Law", "Hooke's Law"], correct: 1 },
        { q: "Newton's First Law is also called Law of:", options: ["Inertia", "Momentum", "Energy", "Gravity"], correct: 0 },
        { q: "Max density of water at?", options: ["0°C", "4°C", "100°C", "-4°C"], correct: 1 },
        { q: "Unit of electrical resistance?", options: ["Volt", "Ampere", "Ohm", "Watt"], correct: 2 },
        { q: "Lens used to correct Hypermetropia?", options: ["Concave", "Convex", "Bifocal", "Cylindrical"], correct: 1 },
        { q: "Frequency unit?", options: ["Seconds", "Hertz", "Meters", "Watts"], correct: 1 },
        { q: "Escape velocity of Earth?", options: ["11.2 km/s", "15 km/s", "9.8 km/s", "5 km/s"], correct: 0 },
        { q: "Angle for zero work done?", options: ["0°", "45°", "90°", "180°"], correct: 2 },
        { q: "SI unit of Pressure?", options: ["Pascal", "Newton", "Tesla", "Weber"], correct: 0 },
        { q: "Speed of light in vacuum?", options: ["3x10^8 m/s", "3x10^5 m/s", "2x10^8 m/s", "None"], correct: 0 },
        { q: "Who discovered the Law of Universal Gravitation?", options: ["Einstein", "Newton", "Galileo", "Kepler"], correct: 1 },
        { q: "Device to measure current?", options: ["Voltmeter", "Ammeter", "Galvanometer", "Hygrometer"], correct: 1 },
        { q: "Focal length of plane mirror?", options: ["Zero", "One", "Infinite", "Negative"], correct: 2 },
        { q: "Energy of a moving body is?", options: ["Potential", "Kinetic", "Static", "Nuclear"], correct: 1 },
        { q: "Smallest unit of matter?", options: ["Atom", "Molecule", "Electron", "Quark"], correct: 0 }
    ],
    chemistry: [
        { q: "Chemical formula of common salt?", options: ["NaCl", "KCl", "MgCl2", "CaCl2"], correct: 0 },
        { q: "Gas filled in chips packets?", options: ["Oxygen", "Nitrogen", "Hydrogen", "CO2"], correct: 1 },
        { q: "Hardest natural substance?", options: ["Iron", "Diamond", "Gold", "Silver"], correct: 1 },
        { q: "pH of pure water?", options: ["0", "7", "14", "5"], correct: 1 },
        { q: "Rusting is an ___ process.", options: ["Oxidation", "Reduction", "Physical", "None"], correct: 0 },
        { q: "Acid in lemon?", options: ["Acetic", "Citric", "Tartaric", "Oxalic"], correct: 1 },
        { q: "Atomic number of Carbon?", options: ["6", "8", "12", "14"], correct: 0 },
        { q: "Liquid metal at room temp?", options: ["Sodium", "Mercury", "Potassium", "Zinc"], correct: 1 },
        { q: "Gas in fire extinguishers?", options: ["O2", "CO2", "N2", "H2"], correct: 1 },
        { q: "Main component of LPG?", options: ["Methane", "Butane", "Propane", "Ethane"], correct: 1 },
        { q: "Purest form of gold?", options: ["22 Carat", "24 Carat", "18 Carat", "20 Carat"], correct: 1 },
        { q: "Nitrogen % in air?", options: ["21%", "78%", "0.03%", "1%"], correct: 1 },
        { q: "Acid rain oxides of?", options: ["N and S", "C and O", "P and H", "Iron"], correct: 0 },
        { q: "Non-metal conductor?", options: ["Sulfur", "Iodine", "Graphite", "Bromine"], correct: 2 },
        { q: "Laughing gas formula?", options: ["N2O", "NO2", "NO", "N2O5"], correct: 0 },
        { q: "Bronze alloy contains?", options: ["Cu and Zn", "Cu and Sn", "Fe and C", "Zn and Sn"], correct: 1 },
        { q: "Vitamin C chemical name?", options: ["Ascorbic Acid", "Citric Acid", "Retinol", "Calciferol"], correct: 0 },
        { q: "Atomic number of Gold?", options: ["79", "47", "82", "56"], correct: 0 },
        { q: "Galvanization uses coating of?", options: ["Tin", "Zinc", "Copper", "Lead"], correct: 1 },
        { q: "Element common to all acids?", options: ["Oxygen", "Sulfur", "Hydrogen", "Chlorine"], correct: 2 }
    ],
    aptitude: [
        { q: "Next number: 1, 4, 9, 16, 25, ?", options: ["30", "36", "49", "40"], correct: 1 },
        { q: "20% of 25% of 400?", options: ["20", "40", "50", "100"], correct: 0 },
        { q: "Sum doubles in 10 years (SI). Rate?", options: ["5%", "10%", "15%", "20%"], correct: 1 },
        { q: "A:B=2:3, B:C=4:5. A:C?", options: ["8:15", "2:5", "6:15", "1:2"], correct: 0 },
        { q: "Average of 5 numbers is 20. Exclude one, avg is 18. Num?", options: ["24", "28", "30", "20"], correct: 1 },
        { q: "Seconds in 3 hours?", options: ["3600", "7200", "10800", "12000"], correct: 2 },
        { q: "CAT=24, DOG=?", options: ["24", "26", "22", "28"], correct: 1 },
        { q: "Clock at 3:00. Angle?", options: ["45°", "90°", "180°", "60°"], correct: 1 },
        { q: "Square root of 625?", options: ["15", "25", "35", "45"], correct: 1 },
        { q: "5 workers 10 days. 2 days workers?", options: ["10", "25", "20", "50"], correct: 1 },
        { q: "If x + 5 = 20, x is?", options: ["10", "15", "20", "25"], correct: 1 },
        { q: "Side of square 5cm. Area?", options: ["10", "20", "25", "30"], correct: 2 },
        { q: "HCF of 12 and 18?", options: ["2", "3", "6", "12"], correct: 2 },
        { q: "3x = 12. x is?", options: ["2", "3", "4", "6"], correct: 2 },
        { q: "Smallest prime number?", options: ["0", "1", "2", "3"], correct: 2 },
        { q: "Next in: 2, 4, 8, 16, ?", options: ["20", "24", "32", "64"], correct: 2 },
        { q: "Probability of Head in coin toss?", options: ["0", "0.5", "1", "2"], correct: 1 },
        { q: "15% of 200?", options: ["20", "25", "30", "35"], correct: 2 },
        { q: "Next in: A, C, E, G, ?", options: ["H", "I", "J", "K"], correct: 1 },
        { q: "If 10 pens cost 50, 1 pen costs?", options: ["2", "5", "10", "15"], correct: 1 }
    ]
};

let currentTestSet = [];
let userSelections = {};
let markedForReview = [];
let currentQuestionIndex = 0;

function startQuiz(subject) {
    // Pick 10 random
    const fullSet = [...questionsBank[subject]];
    currentTestSet = fullSet.sort(() => Math.random() - 0.5).slice(0, 10);
    
    currentQuestionIndex = 0;
    userSelections = {};
    markedForReview = [];
    
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    document.getElementById("subject-tag").innerText = subject.charAt(0).toUpperCase() + subject.slice(1);
    
    renderSidebar();
    loadQuestion();
}

function renderSidebar() {
    const nav = document.getElementById("nav-panel");
    nav.innerHTML = "";
    currentTestSet.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("nav-dot");
        if (index === currentQuestionIndex) dot.classList.add("active");
        if (userSelections[index] !== undefined) dot.classList.add("answered");
        if (markedForReview.includes(index)) dot.classList.add("marked");
        dot.innerText = index + 1;
        dot.onclick = () => changeQuestion(index);
        nav.appendChild(dot);
    });
}

function loadQuestion() {
    const q = currentTestSet[currentQuestionIndex];
    document.getElementById("question-text").innerText = q.q;
    document.getElementById("q-num").innerText = currentQuestionIndex + 1;
    
    const container = document.getElementById("options-container");
    container.innerHTML = "";
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        if (userSelections[currentQuestionIndex] === idx) btn.classList.add("selected");
        btn.innerText = opt;
        btn.onclick = () => selectOption(idx);
        container.appendChild(btn);
    });

    const markButton = document.createElement("button");
    markButton.classList.add("mark-btn");
    markButton.innerText = "Mark for Review";
    markButton.onclick = () => toggleMark();
    container.appendChild(markButton);

    document.getElementById("prev-btn").style.visibility = (currentQuestionIndex === 0) ? "hidden" : "visible";
    const isLast = (currentQuestionIndex === 9);
    document.getElementById("next-btn").classList.toggle("hidden", isLast);
    document.getElementById("submit-btn").classList.toggle("hidden", !isLast);
    
    renderSidebar();
}

function selectOption(idx) {
    userSelections[currentQuestionIndex] = idx;
    loadQuestion();
}

function toggleMark() {
    const questionIndex = currentQuestionIndex;
    const markIndex = markedForReview.indexOf(questionIndex);

    if (markIndex === -1) {
        markedForReview.push(questionIndex);
    } else {
        markedForReview.splice(markIndex, 1);
    }
    renderSidebar();
}

function changeQuestion(idx) {
    if(idx >= 0 && idx < 10) {
        currentQuestionIndex = idx;
        loadQuestion();
    }
}

function showResults() {
    let finalScore = 0;
    const detailedResults = document.getElementById("detailed-results");
    detailedResults.innerHTML = "";

    currentTestSet.forEach((q, idx) => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result-question");

        const questionText = document.createElement("p");
        questionText.innerText = (idx + 1) + ". " + q.q;
        resultDiv.appendChild(questionText);

        const userAnswer = userSelections[idx];
        const correctAnswer = q.correct;
        
        const userAnswerText = document.createElement("p");
        if (userAnswer !== undefined) {
            userAnswerText.innerText = "Your Answer: " + q.options[userAnswer];
            if (userAnswer === correctAnswer) {
                userAnswerText.classList.add("correct-answer");
                finalScore++;
            } else {
                userAnswerText.classList.add("incorrect-answer");
                const correctAnswerText = document.createElement("p");
                correctAnswerText.innerText = "Correct Answer: " + q.options[correctAnswer];
                correctAnswerText.classList.add("correct-answer");
                resultDiv.appendChild(userAnswerText);
                resultDiv.appendChild(correctAnswerText);
            }
        } else {
            userAnswerText.innerText = "You did not answer this question.";
            userAnswerText.classList.add("incorrect-answer");
            const correctAnswerText = document.createElement("p");
            correctAnswerText.innerText = "Correct Answer: " + q.options[correctAnswer];
            correctAnswerText.classList.add("correct-answer");
            resultDiv.appendChild(userAnswerText);
            resultDiv.appendChild(correctAnswerText);
        }
        if (userAnswer === correctAnswer) {
            resultDiv.appendChild(userAnswerText);
        }

        detailedResults.appendChild(resultDiv);
    });

    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    document.getElementById("score-text").innerText = finalScore;
    document.getElementById("feedback-text").innerText = finalScore >= 7 ? "Excellent Score! You are ready for exams." : "Keep practicing to improve your score!";
}