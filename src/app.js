let subDomainArray = ["www.", "blog.", "web.", "mail."];
let domainArray1 = ["Not", "The", "My", "Space"];
let domainArray2 = [
  "Metube",
  "FantasyFlux",
  "NebulaNexus",
  "Netshflix",
  "RandomDomain",
  "TokTik",
  "4Geeks",
  "Pear"
];
let extensionArray = [".com", ".net", ".us", ".io", ".es", ".co", ".ch"];

let urls = [];

for (let i = 0; i < subDomainArray.length; i++) {
  subDomainArray[i];
  for (let a = 0; a < domainArray1.length; a++) {
    subDomainArray[i] + domainArray1[a];
    for (let b = 0; b < domainArray2.length; b++) {
      subDomainArray[i] + domainArray1[a] + domainArray2[b];
      for (let c = 0; c < extensionArray.length; c++) {
        urls.push(
          subDomainArray[i] +
            domainArray1[a] +
            domainArray2[b] +
            extensionArray[c]
        );
      }
    }
  }
}

function domains() {
  return urls.join("\n\n");
}

console.log(urls); // Todas las combinaciones posibles

// document.querySelector("#domain").innerHTML = domains();
