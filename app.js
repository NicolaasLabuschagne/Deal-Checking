// JavaScript function to show the active section based on the button clicked
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the section with the specified ID
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
        console.log(`Section ${sectionId} is now displayed.`);
    }
}

// Set the initial section to be visible on page load
document.addEventListener('DOMContentLoaded', () => {
    // Hide all sections first
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show only the 'home' section by default
    showSection('home');
});
