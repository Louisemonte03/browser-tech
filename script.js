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

  
