console.log("script.js loaded ✓");

// ── THEME TOGGLE ──────────────────────────────────────────────
const themeToggle = document.getElementById("themeToggle");
themeToggle.textContent = "Dark Mode";

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "Light Mode";
}

themeToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    const isDark = document.body.classList.toggle("dark-mode");
    themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ── SKILLS TOGGLE ─────────────────────────────────────────────
const toggleSkillsBtn = document.getElementById("toggleSkills");
const skillsSection   = document.getElementById("skillsSection");

let skillsVisible = false;
toggleSkillsBtn.textContent = "▼  Skills";

toggleSkillsBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    skillsVisible = !skillsVisible;
    skillsSection.classList.toggle("visible", skillsVisible);
    toggleSkillsBtn.textContent = skillsVisible ? "▲  Skills" : "▼  Skills";
});

// ── FORM VALIDATION ───────────────────────────────────────────
document.getElementById("submitBtn").addEventListener("click", function (e) {
    e.preventDefault();
    const name  = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    if (!name || !email) {
        alert("Please fill in all required fields.");
    } else {
        alert("Thank you! Your message has been received.");
    }
});