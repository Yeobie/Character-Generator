function generateCharacter(event) {
  event.preventDefault();

  new Typewriter("#character", {
    strings:
      "Your character is called MumboJumbo and his main characteristics will be (etc.)",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let characterGenerator = document.querySelector("#character-generator");
characterGenerator.addEventListener("submit", generateCharacter);
