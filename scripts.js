function toggleAnswer(answerId) {
    const answerElement = document.getElementById(answerId);
    answerElement.style.display = answerElement.style.display === "none" ? "inline" : "none";
}

window.onload = function() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
        }, index * 500); // Delay for each section
    });
};
