function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

function toggleAnswer(answerId) {
    const answerElement = document.getElementById(answerId);
    answerElement.classList.toggle('show');
}
