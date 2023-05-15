const xhr = new XMLHttpRequest();
xhr.open("GET", "vocabulary.json", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    displayRandomData(data);
  }
};
xhr.send();

// Function to shuffle the array in place
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to display random data
function displayRandomData(data) {
  const jsonDataElement = document.getElementById("json-data");

  // Clear any previous content
  jsonDataElement.innerHTML = "";

  // Shuffle the data array
  const shuffledData = shuffleArray(data);

  // Select the first 5 shuffled entries
  const selectedData = shuffledData.slice(0, 5);

  // Iterate over each object in the selected data
  selectedData.forEach((item) => {
    // Create card container
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    // Create h2 element for the word
    const wordElement = document.createElement("h2");
    wordElement.textContent = item.word;
    cardElement.appendChild(wordElement);

    // Create p element for the definition
    const definitionElement = document.createElement("p");
    definitionElement.textContent = item.definition;
    cardElement.appendChild(definitionElement);

    // Create p element with usage class for the use case
    const usecaseElement = document.createElement("p");
    usecaseElement.textContent = item.usecase;
    usecaseElement.className = "usage";
    cardElement.appendChild(usecaseElement);

    // Append the card to the jsonDataElement
    jsonDataElement.appendChild(cardElement);
  });
}
