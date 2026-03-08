const startYear = 2005;
const currentYear = new Date().getFullYear();
const experience = currentYear - startYear;
document.getElementById("experienceYears").innerText =
"Mais de " + experience + " anos de experiência em infraestrutura e tecnologia.";

// Animação dos cards ao rolar
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});
cards.forEach(card => observer.observe(card));