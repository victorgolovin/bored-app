const boredBtn = document.getElementById("bored-btn");
const boredTitle = document.getElementById("bored-title");
const bodyColor = document.getElementById("body-color");

const boredHandler = () => {
  fetch("http://www.boredapi.com/api/activity/")
    .then((data) => data.json())
    .then((res) => {
      const boredText = res.activity;

      document.getElementById("bored-text").innerHTML = `
        <p>
        ${boredText}
        </p>
            `;
    });

  boredTitleChanger();
  boredColorChanger();
};

const boredTitleChanger = () => {
  boredTitle.innerText = "Ура, теперь не скучно 🔥";
};

const boredColorChanger = () => {
  bodyColor.style.background = "linear-gradient(orangered, white)";
};

boredBtn.addEventListener("click", boredHandler);
