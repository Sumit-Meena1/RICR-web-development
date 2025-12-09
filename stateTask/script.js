const statePositions = {
  "Jammu & Kashmir": { x: 36, y: 20 },
  "Himachal Pradesh": { x: 39, y: 26 },
  Punjab: { x: 33, y: 28 },
  Haryana: { x: 35, y: 33 },
  Delhi: { x: 38, y: 34 },
  Rajasthan: { x: 30, y: 38 },
  "Uttar Pradesh": { x: 47, y: 39 },
  Bihar: { x: 62, y: 42 },
  Uttarakhand: { x: 44, y: 30 },
  Gujarat: { x: 20, y: 45 },
  "Madhya Pradesh": { x: 40, y: 47 },
  Chhattisgarh: { x: 52, y: 50 },
  Jharkhand: { x: 62, y: 46 },
  "West Bengal": { x: 68, y: 48 },
  Odisha: { x: 60, y: 53 },
  Maharashtra: { x: 34, y: 54 },
  Telangana: { x: 41, y: 60 },
  "Andhra Pradesh": { x: 40, y: 67 },
  Karnataka: { x: 31, y: 67 },
  "Tamil Nadu": { x: 38, y: 75 },
  panducheri: { x: 42, y: 74 },
  Kerala: { x: 32, y: 77 },
  Goa: { x: 25, y: 65 },
  Assam: { x: 78, y: 40 },
  Meghalaya: { x: 78, y: 42 },
  Tripura: { x: 80, y: 46 },
  Manipur: { x: 87, y: 43 },
  Nagaland: { x: 88, y: 40 },
  Mizoram: { x: 83, y: 47 },
  "Arunachal Pradesh": { x: 86, y: 35 },
  Sikkim: { x: 70, y: 37 },
};

const mapContainer = document.getElementById("mapContainer");
const select = document.getElementById("stateSelect");
const addAllBtn = document.getElementById("addAllBtn");
const clearBtn = document.getElementById("clearBtn");
const fallbackAudio = document.getElementById("flagAudioFallback");
const FLAG_SRC =
  "https://static.vecteezy.com/system/resources/thumbnails/028/233/959/small/flag-3d-rendering-icon-illustration-free-png.png";

const SOUND_URL = fallbackAudio.src;

async function initAudio() {
  if (audioCtx) return;
}

function cssEscape(str) {
  return str.replace(/["\\]/g, "\\$&");
}

function placeFlag(state) {
  const pos = statePositions[state];
  if (!pos) return;

  if (document.querySelector(`.flag-wrapper[data-state="${cssEscape(state)}"]`))
    return;

  const wrapper = document.createElement("div");
  wrapper.className = "flag-wrapper";
  wrapper.style.left = pos.x + "%";
  wrapper.style.top = pos.y + "%";
  wrapper.setAttribute("data-state", state);

  const flag = document.createElement("img");
  flag.src = FLAG_SRC;
  flag.className = "flag";

  wrapper.appendChild(flag);
  mapContainer.appendChild(wrapper);
  playSound();
}

select.addEventListener("change", function () {
  if (this.value) placeFlag(this.value);
});

addAllBtn.addEventListener("click", function () {
  initAudio().finally(() => {
    const states = Object.keys(statePositions);
    states.forEach((s, i) => setTimeout(() => placeFlag(s), i * 40));
    clickSound.play();
  });
});

clearBtn.addEventListener("click", function () {
  document.querySelectorAll(".flag-wrapper").forEach((el) => el.remove());
  clickSound.play();
});
let audioUnlocked = false;
let clickSound = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

document.body.addEventListener("click", () => {
  if (!audioUnlocked) {
    clickSound
      .play()
      .then(() => {
        audioUnlocked = true;
        console.log("Audio unlocked");
      })
      .catch(() => {});
  }
});

function playFlagSound() {
  if (audioUnlocked) clickSound.play();
}

select.addEventListener("change", function () {
  const state = this.value;
  const pos = statePositions[state];

  const wrapper = document.createElement("div");
  wrapper.className = "flag-wrapper";
  wrapper.style.left = pos.x + "%";
  wrapper.style.top = pos.y + "%";
  wrapper.setAttribute("data-state", state);

  const flag = document.createElement("img");
  flag.src =
    "https://static.vecteezy.com/system/resources/thumbnails/028/233/959/small/flag-3d-rendering-icon-illustration-free-png.png";
  flag.className = "flag";

  wrapper.appendChild(flag);
  mapContainer.appendChild(wrapper);

  playFlagSound();
});
