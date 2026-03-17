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
   9. INPUT IBAN
   ========================================================================== */

let ibanInput = document.getElementById("iban");
ibanInput.addEventListener("input", function (e) {
  // 1. Haal alle niet-alfanumerieke tekens weg en zet in hoofdletters

  let rawValue = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");

  // 3. Pas de logica toe per positie (Type-check)
  let validatedValue = "";
  for (let i = 0; i < rawValue.length; i++) {
    let char = rawValue[i];
    if (i < 2) {
      // NL
      if (/[A-Z]/.test(char)) validatedValue += char;
    } else if (i < 4) {
      // 2 Controlecijfers
      if (/[0-9]/.test(char)) validatedValue += char;
    } else if (i < 8) {
      // 4 Letters van de Bank
      if (/[A-Z]/.test(char)) validatedValue += char;
    } else {
      // 10 Cijfers rekeningnummer
      if (/[0-9]/.test(char)) validatedValue += char;
    }
  }

  // 5. Voeg spaties toe om de 4 tekens
  let formattedValue =
    validatedValue.match(/.{1,4}/g)?.join(" ") || validatedValue;

  // 6. Update het veld
  e.target.value = formattedValue;
});
