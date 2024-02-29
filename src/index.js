function createCharacter(response) {
  new Typewriter("#character", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateCharacter(event) {
  event.preventDefault();

  let keywords = document.querySelector("#keywords");
  let key = "f05bbfeo3a24e0d00t5941bd06aa34a4";
  let prompt = `Generate a new character that is defined by the word: ${keywords.value}`;
  let context =
    "You are an AI with lots of imagination and you love to imagine amazing stories with amazing characters. Write a description, in basic HTML, of a character of a new story, it can be the main character or a sidekick or a villain. It can be any genre of story. Make it short and concise, no more than 600 characters long. Don't put any images.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let character = document.querySelector("#character");
  character.innerHTML = "Generating a character for you...";
  axios.get(apiUrl).then(createCharacter);
}

let characterGenerator = document.querySelector("#character-generator");
characterGenerator.addEventListener("submit", generateCharacter);
