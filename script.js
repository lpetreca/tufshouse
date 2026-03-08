// Calcula experiência
const startYear = 2008;
const currentYear = new Date().getFullYear();
const experience = currentYear - startYear;
document.getElementById("experienceYears").innerText =
  "Mais de " + experience + " anos de experiência em infraestrutura e tecnologia.";
