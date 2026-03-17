let inputVeld = document.getElementById("vestigingsplaats");
let dataLijst = document.getElementById("gemeente-opties");

// json bestand inladen
fetch("gemeentes.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((gemeente) => {
      const option = document.createElement("option");
      option.value = typeof gemeente === "string" ? gemeente : gemeente.naam;
      dataLijst.appendChild(option);
    });
  });

// date picker gaat niet verder in de toekomst

let datePicker = document.getElementById("datum_overlijden");
let vandaag = new Date().toISOString().split("T")[0];
// 2. Haal de datum van vandaag op in ISO-formaat (YYYY-MM-DD)

datePicker.setAttribute("max", vandaag);

//

/* ==========================================================================
   10. IBAN INPUT
   ========================================================================== */

const input = document.getElementById("iban");

input.oninput = (e) => {
  let pos = input.selectionStart;
  let val = input.value.toUpperCase().replace(/\s/g, "");
  let clean = "";

  for (let i = 0; i < val.length; i++) {
    let char = val[i];
    if (i < 2) {
      // Landcode: Alleen letters
      if (/[A-Z]/.test(char)) clean += char;
    } else if (i < 4) {
      // Controlegetal: Alleen cijfers
      if (/[0-9]/.test(char)) clean += char;
    } else if (i < 8) {
      // Bankcode: Alleen letters
      if (/[A-Z]/.test(char)) clean += char;
    } else {
      // De rest: Alleen cijfers
      if (/[0-9]/.test(char)) clean += char;
    }
  }

  let formatted = clean.match(/.{1,4}/g)?.join(" ") || "";
  input.value = formatted;

  // Cursor op de juiste plek houden
  if (
    pos > 0 &&
    formatted[pos - 1] === " " &&
    e.inputType !== "deleteContentBackward"
  )
    pos++;
  input.setSelectionRange(pos, pos);
};

// De bankknoppen triggeren ook deze check
document.querySelectorAll(".bank-btn").forEach((btn) => {
  btn.onclick = () => {
    let prefix = input.value.replace(/\s/g, "").substring(0, 4) || "NL00";
    input.value = prefix + btn.dataset.code;
    input.dispatchEvent(new Event("input"));
  };
});
