/* ==========================================================================
  GEMEENTES
   ========================================================================== */

let dataLijst = document.getElementById("gemeente-opties");

fetch("gemeentes.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((gemeente) => {
      const option = document.createElement("option");
      option.value = typeof gemeente === "string" ? gemeente : gemeente.naam;
      dataLijst.appendChild(option);
    });
  });

/* ==========================================================================
  DATUMPICKER - niet verder dan vandaag
   ========================================================================== */

let vandaag = new Date().toISOString().split("T")[0];
document.getElementById("datum_overlijden").setAttribute("max", vandaag);

/* ==========================================================================
  IBAN - automatisch opmaken
   ========================================================================== */

document.getElementById("iban").addEventListener("input", function (e) {
  let raw = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
  let result = "";
  for (let i = 0; i < raw.length; i++) {
    let c = raw[i];
    if (i < 2 && /[A-Z]/.test(c)) result += c;
    else if (i < 4 && /[0-9]/.test(c)) result += c;
    else if (i < 8 && /[A-Z]/.test(c)) result += c;
    else if (i >= 8 && /[0-9]/.test(c)) result += c;
  }
  e.target.value = result.match(/.{1,4}/g)?.join(" ") || result;
});

/* ==========================================================================
  VOORLETTERS - automatisch opmaken (ja -> J.A.)
   ========================================================================== */

["voorletters", "not-naam"].forEach((id) => {
  document.getElementById(id).addEventListener("blur", function () {
    const letters = this.value
      .replace(/[^a-zA-Z]/g, "")
      .toUpperCase()
      .split("");
    this.value = letters.map((l) => l + ".").join("");
  });
});

/* ==========================================================================
  BLOKKEER VERKEERDE TEKENS
   ========================================================================== */

// Alleen cijfers
["Bsn", "not-prot"].forEach((id) => {
  document.getElementById(id).addEventListener("keypress", (e) => {
    if (!/[0-9]/.test(e.key)) e.preventDefault();
  });
});

// Alleen letters
[
  "voorletters",
  "not-naam",
  "tussenvoegsel",
  "achternaam",
  "vestigingsplaats",
].forEach((id) => {
  document.getElementById(id).addEventListener("keypress", (e) => {
    if (!/[A-Za-z.\- ]/.test(e.key)) e.preventDefault();
  });
});

/* ==========================================================================
  PROGRESSIVE DISCLOSURE - verborgen vragen required aan/uitzetten
   ========================================================================== */

document.querySelectorAll("input.trigger").forEach((trigger) => {
  trigger.addEventListener("change", () => {
    const content = trigger
      .closest(".gesloten-vragen, .conditional-content")
      ?.querySelector(".conditional-content");
    if (!content) return;
    const zichtbaar = trigger.value === "ja";
    content
      .querySelectorAll("input[type='radio']:first-of-type")
      .forEach((radio) => {
        radio.required = zichtbaar;
      });
  });
});
