document.addEventListener('DOMContentLoaded', function() {

    // TASK 4: Dark mode toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    // TASK 5: Show/Hide skills section
    const toggleSkills = document.getElementById('toggleSkills');
    const skillsSection = document.getElementById('skillsSection');
    toggleSkills.addEventListener('click', function() {
        skillsSection.classList.toggle('hidden');
    });

    // TASK 3 + TASK 6: Submit button with form validation
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name === "" || email === "") {
            alert("Please fill in all required fields.");
        } else {
            alert("Thank you! Your message has been received.");
        }
    });

});