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

let subdomain = Math.floor(Math.random() * subDomainArray.length);
let domain1 = Math.floor(Math.random() * domainArray1.length);
let domain2 = Math.floor(Math.random() * domainArray2.length);
let extension = Math.floor(Math.random() * extensionArray.length);

function domainGenerated() {
  return (
    "https://" +
    subDomainArray[subdomain] +
    domainArray1[domain1] +
    domainArray2[domain2] +
    extensionArray[extension]
  );
}

document.querySelector("#domain").innerHTML = domainGenerated();
