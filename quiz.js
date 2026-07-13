// ======================================
// HTTP Self-Assessment Quiz JavaScript
// Calculates score and displays results
// ======================================


function gradeQuiz() {

    let score = 0;
    let results = "";



    // Question 1: Fill in the blank
    let q1 = document.getElementById("q1").value.trim().toLowerCase();


    if (q1 === "hypertext") {

        score++;

        results += `
        <p class="correct">
        Question 1: Correct (+1)
        </p>`;

    } else {

        results += `
        <p class="incorrect">
        Question 1: Incorrect (0)
        </p>`;

    }


    results += `
    <p>
    Correct Answer: <b>Hypertext</b>
    </p>
    <hr>
    `;



    // Question 2: Tim Berners-Lee
    let q2 = document.querySelector('input[name="q2"]:checked');


    if (q2 && q2.value === "B") {

        score++;

        results += `
        <p class="correct">
        Question 2: Correct (+1)
        </p>`;

    } else {

        results += `
        <p class="incorrect">
        Question 2: Incorrect (0)
        </p>`;

    }


    results += `
    <p>
    Correct Answer: <b>Tim Berners-Lee</b>
    </p>
    <hr>
    `;




    // Question 3: HTTP/2
    let q3 = document.querySelector('input[name="q3"]:checked');


    if (q3 && q3.value === "C") {

        score++;

        results += `
        <p class="correct">
        Question 3: Correct (+1)
        </p>`;

    } else {

        results += `
        <p class="incorrect">
        Question 3: Incorrect (0)
        </p>`;

    }


    results += `
    <p>
    Correct Answer: <b>HTTP/2</b>
    </p>
    <hr>
    `;




    // Question 4: QUIC
    let q4 = document.querySelector('input[name="q4"]:checked');


    if (q4 && q4.value === "D") {

        score++;

        results += `
        <p class="correct">
        Question 4: Correct (+1)
        </p>`;

    } else {

        results += `
        <p class="incorrect">
        Question 4: Incorrect (0)
        </p>`;

    }


    results += `
    <p>
    Correct Answer: <b>QUIC</b>
    </p>
    <hr>
    `;




    // Question 5: Multiple Selection
    let q5a = document.getElementById("q5a").checked;
    let q5b = document.getElementById("q5b").checked;
    let q5c = document.getElementById("q5c").checked;
    let q5d = document.getElementById("q5d").checked;



    if (q5a && q5b && !q5c && !q5d) {

        score++;

        results += `
        <p class="correct">
        Question 5: Correct (+1)
        </p>`;

    } else {

        results += `
        <p class="incorrect">
        Question 5: Incorrect (0)
        </p>`;

    }


    results += `
    <p>
    Correct Answers:
    </p>

    <ul>
        <li>Multiplexing</li>
        <li>Header Compression</li>
    </ul>

    <hr>
    `;




    // Final Score and Pass/Fail
    let finalResult = "";


    if (score >= 4) {

        finalResult = `
        <h2 class="pass">
        PASS
        </h2>`;

    } else {

        finalResult = `
        <h2 class="fail">
        FAIL
        </h2>`;

    }



    finalResult += `
    <h3>
    Total Score: ${score} / 5
    </h3>
    `;



    finalResult += results;



    // Display results on same page
    document.getElementById("results").style.display = "block";

    document.getElementById("results").innerHTML = finalResult;

}




// ======================================
// Reset Quiz
// Clears answers and results
// ======================================

function resetQuiz() {


    // Reset all form answers
    document.getElementById("quizForm").reset();


    // Remove results
    document.getElementById("results").style.display = "none";


    document.getElementById("results").innerHTML = "";

}
