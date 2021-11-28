flatpickr("#date-form", {});

const collectedDate = document.getElementById("date-form");
const btn = document.querySelector(".form-btn");
const formEdd = document.getElementById("edd-form");
const err = "برجاء ادخال تاريخ صحيح";

formEdd.addEventListener("submit", (e) => {
  let d = new Date(collectedDate.value);
  let delivery = new Date();
  let gestYear = d.getFullYear();
  let gestMonth = d.getMonth() + 1;
  let gestDay = d.getDate();
  delivery.setDate(gestDay + 280);
  let resultYear = delivery.getFullYear();
  let resultMonth = delivery.getMonth() + 1;
  let resultDay = delivery.getDate();
  if (collectedDate.value.length === 0) {
    document.querySelector(".results-field").value = err;
  } else {
    let results = `موعد الوضع المحتمل يوم ${resultDay} شهر ${resultMonth} سنة ${resultYear}`;
    document.querySelector(".results-field").value = results;
  }
  e.preventDefault();
});
