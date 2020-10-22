const url = "https://api.tronalddump.io/random/quote";

const FUN = async () => {
  const response = await fetch(url);
  const myJson = await response.json();
  const qote = myJson["value"];
  document.getElementById("qq").innerText = '"' + qote + '" - Donald Trump';
};

FUN();
