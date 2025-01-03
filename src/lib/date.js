export function formatDate(date, pattern = "dd/mm/yy") {
  const DATE = new Date(date);

  if (!(DATE instanceof Date) || isNaN(DATE)) {
    throw new Error("Invalid date provided.");
  }

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  const map = {
    dd: String(DATE.getDate()).padStart(2, "0"),
    mm: String(DATE.getMonth() + 1).padStart(2, "0"), // Months are 0-based
    yyyy: DATE.getFullYear(),
    yy: String(DATE.getFullYear()).slice(-2),
    MM: months[DATE.getMonth()], // Full text month
    D: days[DATE.getDay()], // Full text day
  };

  return pattern.replace(/dd|mm|yyyy|yy|MM|D/g, (match) => map[match]);
}
