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

// Luister naar klikken op de knoppen
document.querySelectorAll(".bank-btn").forEach((btn) => {
  btn.onclick = () => {
    let val = input.value.replace(/\s/g, "").substring(0, 4) || "NL00";
    input.value = val + btn.dataset.code;
    input.dispatchEvent(new Event("input")); // Trigger de spatie-opmaak
  };
});

// De "Alles-in-één" opmaak functie
input.oninput = (e) => {
  let pos = input.selectionStart;
  // 1. Haal alle spaties weg en maak hoofdletters
  let val = input.value.toUpperCase().replace(/\s/g, "");

  // 2. Blokkeer cijfers op posities 4 t/m 7 (de bankcode)
  let clean = val
    .split("")
    .map((char, i) => (i >= 4 && i <= 7 && /[0-9]/.test(char) ? "" : char))
    // met dit stuke code kan je niet verder voordat je een bank heb gekozen
    .join("");

  // 3. Voeg spaties toe na elke 4 tekens
  let formatted = clean.match(/.{1,4}/g)?.join(" ") || "";

  input.value = formatted;

  // 4. Cursor fix: als we een spatie toevoegen, moet de cursor een plekje opschuiven
  if (
    pos > 0 &&
    formatted[pos - 1] === " " &&
    e.inputType !== "deleteContentBackward"
  )
    pos++;
  input.setSelectionRange(pos, pos);
};
