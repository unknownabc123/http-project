// ======================================
// HTTP Quiz JavaScript
// Calculates score and displays results
// ======================================

function gradeQuiz() {

    let score = 0;
    let results = "";

    // -----------------------------
    // Question 1
    // -----------------------------
    let q1 = document.getElementById("q1").value.trim().toLowerCase();

    if (q1 === "hypertext") {
        score++;
        results += "<p style='color:green;'><b>Question 1:</b> Correct (+1)</p>";
    } else {
        results += "<p style='color:red;'><b>Question 1:</b> Incorrect (0)</p>";
    }

    results += "<p>Correct Answer: <b>Hypertext</b></p><hr>";



    // -----------------------------
    // Question 2
    // -----------------------------
    let q2 = document.querySelector('input[name="q2"]:checked');

    if (q2 && q2.value === "B") {
        score++;
        results += "<p style='color:green;'><b>Question 2:</b> Correct (+1)</p>";
    } else {
        results += "<p style='color:red;'><b>Question 2:</b> Incorrect (0)</p>";
    }

    results += "<p>Correct Answer: <b>Tim Berners-Lee</b></p><hr>";



    // -----------------------------
    // Question 3
    // -----------------------------
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q3 && q3.value === "C") {
        score++;
        results += "<p style='color:green;'><b>Question 3:</b> Correct (+1)</p>";
    } else {
        results += "<p style='color:red;'><b>Question 3:</b> Incorrect (0)</p>";
    }

    results += "<p>Correct Answer: <b>HTTP/2</b></p><hr>";



    // -----------------------------
    // Question 4
    // -----------------------------
    let q4 = document.querySelector('input[name="q4"]:checked');

    if (q4 && q4.value === "D") {
        score++;
        results += "<p style='color:green;'><b>Question 4:</b> Correct (+1)</p>";
    } else {
        results += "<p style='color:red;'><b>Question 4:</b> Incorrect (0)</p>";
    }

    results += "<p>Correct Answer: <b>QUIC</b></p><hr>";



    // -----------------------------
    // Question 5
    // -----------------------------
    let a = document.getElementById("q5a").checked;
    let b = document.getElementById("q5b").checked;
    let c = document.getElementById("q5c").checked;
    let d = document.getElementById("q5d").checked;

    if (a && b && !c && !d) {

        score++;

        results += "<p style='color:green;'><b>Question 5:</b> Correct (+1)</p>";

    } else {

        results += "<p style='color:red;'><b>Question 5:</b> Incorrect (0)</p>";

    }

    results += "<p>Correct Answers:</p>";
    results += "<ul>";
    results += "<li>Multiplexing</li>";
    results += "<li>Header Compression</li>";
    results += "</ul><hr>";



    // -----------------------------
    // Final Result
    // -----------------------------
    let output = "";

    if (score >= 4) {

        output += "<h2 style='color:green;'>PASS</h2>";

    } else {

        output += "<h2 style='color:red;'>FAIL</h2>";

    }

    output += "<h3>Total Score: " + score + " / 5</h3>";

    output += results;

    document.getElementById("results").style.display = "block";

    document.getElementById("results").innerHTML = output;

}



// ======================================
// Reset Quiz
// ======================================

function resetQuiz() {

    document.getElementById("results").style.display = "none";

    document.getElementById("results").innerHTML = "";

}
