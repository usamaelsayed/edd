flatpickr("#date-form", {});
const months = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيه",
  "يوليو",
  "اغسطس",
  "سبتمبر",
  "اكتوبر",
  "نوفمبر",
  "ديسمبر",
];
const collectedDate = document.getElementById("date-form");
const btn = document.querySelector(".form-btn");
const formEdd = document.getElementById("edd-form");
const err = "برجاء ادخال تاريخ صحيح";
const congrates = "تهانينا - الموعد المتوقع للوضع";

formEdd.addEventListener("submit", (e) => {
  let d = new Date(collectedDate.value);
  let gestYear = d.getFullYear();
  let gestMonth = d.getMonth() + 1;
  let gestDay = d.getDate();
  d.setDate(gestDay + 280);
  let now = new Date().getMonth() + 1;
  let delivery = new Date(d);
  let resultYear = delivery.getFullYear();
  let resultMonth = delivery.getMonth() + 1;
  let resultDay = delivery.getDate();

  if (collectedDate.value.length === 0 || Math.floor(now - gestMonth) > 9) {
    // document.querySelector(".results-field").value = err;
    document.getElementById("para-results").innerText = err;
  } else {
    document.getElementById("congrats").innerText = congrates;
    let results = ` يوم ${resultDay} شهر ${
      months[resultMonth - 1]
    } سنة ${resultYear}`;
    document.getElementById("para-results").innerText = results;
    // document.querySelector(".results-field").value = results;
  }
  e.preventDefault();
});
