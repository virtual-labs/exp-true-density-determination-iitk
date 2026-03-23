let bottleOnWeight = false;
let funnelOnBottle = false;
let beakerAtTap = false;
let machineOn = false;
let capTimeouts = {};
let openBottle = false;
let openCap = false;
let lang = "en";
let count = 1;
let powderSelected = false;
let start_simulatio = false;
let weightValue = 15.04;

let W1 = 25.00, W2 = 50.00, W3 = 30.00, W4 = 52.00;
let densityLiquid = 1.0;
showPowder();
function showPowder() {
  const powder = document.getElementById("select-powder").value;
  const powderImg = document.getElementById("selected-powder");
  document.getElementById("acid-powder").style.visibility = "visible";
  if (powder === "S") {
    powderImg.src = "./images/salicyclicacid.png";
    powderSelected = true;
    W3 = 31.40; 
    W4 = 53.00;
  } else if (powder === "B") {
    powderImg.src = "./images/Benzoicacid.png";
    powderSelected = true;
    W3 = 30.0; 
    W4 = 52.0;
  } else {
    document.getElementById("acid-powder").style.visibility = "hidden";
  }
}

function changeLang(el) {
  lang = el.value;
}

function showWeight(el) {
  if (!machineOn) return;
  switch (el.value) {
    case "e":
      weightValue = W1;
      break;
    case "pw":
      weightValue = W2;
      break;
    case "pp":
      weightValue = W3;
      break;
    default:
      weightValue = W4;
      break;
  }
  animateWeight(weightValue);
}

function start_simulation() {
  start_simulatio = true;
  if (count === 1) {
    showInstructions();
  }
}

function showInstructions() {
  // fill_water_in_pycnometer();
  if (!start_simulatio) {
    alert("Click on start simulation button to start the simulation.");
    return;
  }

  const instructionSpan = document.getElementById("instruction");
  const instructions = {
    1: "1. Choose the language of instruction: English or Hindi.",
    2: "2. Prepare the Weigh Machine: Click on the 'OFF' button to switch it ON.",
    3: "3. Weigh the Empty Pycnometer (W1):* Record the weight.",
    4: "4. Fill the Beaker with Water:* Prepare the solvent.",
    // 14: "14. Click on the tap to flow water into the beaker.",
    5: "5. Remove the Cap of the Pycnometer.",
    6: "6. Fill Pycnometer with Water:* Use a funnel and beaker to carefully fill it. ",
    7: "7. Weigh the Pycnometer with Water (W2):* Close the cap and measure. Record the weight",
    8: "8. Clean the Pycnometer:* Ensure it's properly cleaned before the next step.",
    9: "9. Select the Sample Powder:* Choose a sample for measurement.",
    10: "10.Weigh the Pycnometer with Sample Powder (W3):* Put the powder in the pycnometer, measure, and record the weight",
    11: "11.Add Water to the Pycnometer with the Sample (W4):* Measure again after adding water or solvent, and record the final weight.",
    12: "12. click on observation table to see the observation table.",
    13: "13.  Click on calculate density to calculate the true density .",
  };
  const instructionText = instructions[count];
  if (instructionText) {
    instructionSpan.textContent = instructionText;
  } else {
    instructionSpan.textContent = "Simulation complete.";
    document.getElementById("next").style.display = "none";
  }
  const Sound = document.getElementById("Sound");
  if (lang === "hi") {
    Sound.src = `./sounds/hi${count}.mp3`;
  } else {
    Sound.src = `./sounds/ins${count}.mp3`;
  }

  Sound.currentTime = 0;
  Sound.play();
  switch (count) {
    case 1:
      break;
    case 2:
      // Removed automatic toggle to wait for user interaction
      break;
    case 3:
      toggleBottle();
      weightValue = W1;
      measurWeight();
      break;
    case 4:
      toggleBeaker(document.querySelector(".beaker"));
      break;
    case 5:
      toggleCapBottole();
      break;
    case 6:
      toggleFunnel(document.querySelector("#funnel"));
      setTimeout(() => {
        toggleBeaker(document.querySelector(".beaker"));
        setTimeout(() => {
          document
            .getElementById("pycnometer")
            .classList.add("water-in-pycnometer");
        }, 1500);
      }, 3000);
      setTimeout(() => {
        toggleFunnel(document.querySelector("#funnel"));
      }, 7000);

      break;
    case 7:
      toggleCapBottole();
      setTimeout(() => {
        document.getElementById("pycnometer").style.backgroundImage =
          "url('./images/pycnometerwater.png')";
        document.getElementById("pycnometer").style.backgroundSize = "90% 80%";
        document.getElementById("pycnometer").style.backgroundRepeat =
          "no-repeat";
        document.getElementById("pycnometer").style.backgroundPosition =
          "bottom";
        document
          .getElementById("pycnometer")
          .classList.remove("water-in-pycnometer");
        toggleBottle();
        weightValue = W2;
        measurWeight();
      }, 2000);
      break;
    case 8:
      document.getElementById("pycnometer").style.backgroundImage = "url()";
      break;
    case 9:
      toggleCapBottole();
      toggleFunnel(document.querySelector("#funnel"));

      break;
    case 10:
      useSpatula(document.getElementById("spetula"));
      setTimeout(() => {
        toggleFunnel(document.querySelector("#funnel"));
        toggleCapBottole();
        document
          .getElementById("pycnometer")
          .classList.remove("powder-in-pycnometer");
        toggleBottle();
        weightValue = W3;
        measurWeight();
      }, 6000);

      break;
    case 11:
      toggleCapBottole();
      toggleFunnel(document.querySelector("#funnel"));
      setTimeout(() => {
        document
          .querySelector(".beaker")
          .classList.remove("move-beaker-on-pycnometer");
        document
          .querySelector(".beaker")
          .classList.remove("move-beaker-on-tap");
        document
          .querySelector(".beaker")
          .classList.add("move-beaker-on-pycnometer");
        setTimeout(() => {
          document
            .getElementById("pycnometer")
            .classList.remove("water-in-pycnometer");
          document.getElementById("pycnometer").style.backgroundImage =
            "";
          document
            .getElementById("pycnometer")
            .classList.add("water-in-pycnometer");
        }, 1500);
      }, 3000);
      setTimeout(() => {
        toggleFunnel(document.querySelector("#funnel"));
        toggleCapBottole();
        document.getElementById("pycnometer").style.backgroundImage =
          "url('./images/pycnometerwater.png')";
        document.getElementById("pycnometer").style.backgroundSize = "90% 80%";
        document.getElementById("pycnometer").style.backgroundRepeat =
          "no-repeat";
        document.getElementById("pycnometer").style.backgroundPosition =
          "bottom";
        document
          .getElementById("pycnometer")
          .classList.remove("water-in-pycnometer");
        toggleBottle();
        weightValue = W4;
        measurWeight();
      }, 11000);
      break;
    default:
      break;
  }
  count++;
}

function fill_water_in_pycnometer() {
  let pycnometer = document.getElementsByClassName("pycnometer")[0];
  pycnometer.classList.add("water-in-pycnometer");
}

function toggleMachine(btn) {
  machineOn = !machineOn;
  btn.textContent = machineOn ? "ON" : "OFF";
  if(machineOn){
      const display = document.getElementById("display");
  display.textContent = "0.00g";
  }
  else{
      const display = document.getElementById("display");
  display.textContent = " ";
  }
}

function toggleTrf(btn) {
   if(machineOn){
      const display = document.getElementById("display");
  display.textContent = "0.00g";
  }
}

function useSpatula(el) {
  if (!openCap) {
    toggleCap();
  }

  el.classList.toggle("move-spetula");

  setTimeout(() => {
    document.getElementById("spatula-powder11").style.display = "block";
    setTimeout(() => {
      document.getElementById("spatula-powder11").style.display = "none";
      document
        .getElementById("pycnometer")
        .classList.remove("water-in-pycnometer");
      document.getElementById("pycnometer").style.backgroundImage =
        "url('./images/samplepowder.png')";
      document.getElementById("pycnometer").style.backgroundSize = "60% 50%";
      document.getElementById("pycnometer").style.backgroundRepeat =
        "no-repeat";
      document.getElementById("pycnometer").style.backgroundPosition = "bottom";
      document
        .getElementById("pycnometer")
        .classList.add("powder-in-pycnometer");
    }, 1800);
  }, 1800);
}

function resetFields() {
  const onBtn = document.querySelector(".onoff-button");
  const trfBtn = document.querySelector(".trf-button");
  onBtn.textContent = "OFF";
  onBtn.classList.remove("active");
  trfBtn.classList.remove("active");
  machineOn = false;
}

function measurWeight() {
  if (!bottleOnWeight) {
    toggleBottle();
  }

  setTimeout(() => {
    animateWeight(bottleOnWeight ? weightValue : 0.0);
  }, 1500);

  setTimeout(() => {
    const popup = document.getElementById("popup");
    const result = document.getElementById("result");
    const resultp = document.getElementById("resultp");
    resultp.innerText = `Measured weight: ${weightValue}g`;
    popup.style.display = "block";
    result.style.display = "block";
    toggleBottle();
  }, 4000);
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("result").style.display = "none";
}

function observationTable() {
  const popup = document.getElementById("popup");
  const result = document.getElementById("result");
  const resultp = document.getElementById("resultp");
  const Sound = document.getElementById("Sound");

  const tableHTML = `
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="border: .2vw solid black; padding: .8vw; width: 14vw">W1(Empty Pycnometer)</th>
            <th style="border: .2vw solid black; padding: .8vw; width: 14vw">W2(Pycnometer with water)</th>
            <th style="border: .2vw solid black; padding: .8vw; width: 14vw">W3(Pycnometer with Powder)</th>
            <th style="border: .2vw solid black; padding: .8vw; width: 14vw">W4(Pycnometer with Powder and Water)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: .2vw solid black; padding: .8vw; width: 14vw">${W1.toFixed(2)}g</td>
            <td style="border: .2vw solid black; padding: .8vw; width: 14vw">${W2.toFixed(2)}g</td>
            <td style="border: .2vw solid black; padding: .8vw; width: 14vw">${W3.toFixed(2)}g</td>
            <td style="border: .2vw solid black; padding: .8vw; width: 14vw">${W4.toFixed(2)}g</td>
          </tr>
        </tbody>
      </table>
    `;
  document.querySelector("h2").innerText = "Observation Table";
  resultp.innerHTML = tableHTML;
  popup.style.display = "block";
  result.style.display = "block";

  setTimeout(() => {
    Sound.src = `./sounds/observation.mp3`;
    Sound.currentTime = 0;
    Sound.play();
  }, 1000);
}

function calculateDensity() {
  const popup = document.getElementById("popup");
  const result = document.getElementById("result");
  const resultp = document.getElementById("resultp");

  let massPowder = (W3 - W1).toFixed(2);
  let displacedWater = ((W2 - W1) - (W4 - W3)).toFixed(2);
  let volPowder = (displacedWater / densityLiquid).toFixed(2);
  let trueDensity = (massPowder / volPowder).toFixed(2);

  document.querySelector("h2").innerText = "Calculation Result";
  
  const resultHTML2 = `
    <table style="width: 100%; border-collapse: collapse;">
     <tr>
        <td style="border: .2vw solid black; padding: .8vw;"> Volume of powder = volume of water displaced.</td>
     </tr>
     <tr><td style="border: .2vw solid black; padding: .8vw;">
    V = (W4 - W3) - (W2 - W1) / density of water.</td></tr>
    <tr><td style="border: .2vw solid black; padding: .8vw;">
    V = (${W4.toFixed(2)} - ${W3.toFixed(2)}) - (${W2.toFixed(2)} - ${W1.toFixed(2)}) / ${densityLiquid}</td></tr>

     <tr><td style="border: .2vw solid black; padding: .8vw;">
    V = ${volPowder} mL<br></td></tr>
    <tr><td style="border: .2vw solid black; padding: .8vw;">
    True density = mass of powder (W3 - W1) / volume of powder (V).</td></tr>
    
    <tr><td style="border: .2vw solid black; padding: .8vw;">
    <b>True density = ${trueDensity} g/mL.</b></td></tr>
    </table>
    `;

    resultp.innerHTML = resultHTML2;
    popup.style.display = "block";
    result.style.display = "block";

    const Sound = document.getElementById("Sound");
    Sound.src = `./sounds/calculate.mp3`;
    Sound.currentTime = 0;
    Sound.play();
}

function flowWater(event) {
  const main = document.querySelector(".main");
  const startLeft = event.target.offsetLeft + 15 + "px";
  const startTop = event.target.offsetTop + 20 + "px";

  const waterSound = document.getElementById("waterSound");
  waterSound.currentTime = 0;
  waterSound.play();
  document.querySelector("#beaker").classList.add("fill");

  const interval = setInterval(() => {
    const drop = document.createElement("img");
    drop.src = "images/drop.png";
    drop.className = "drop";
    drop.style.left = startLeft;
    drop.style.top = startTop;
    main.appendChild(drop);
    setTimeout(() => drop.remove(), 200);
  }, 100);

  setTimeout(() => clearInterval(interval), 2000);
}

function toggleCap() {
  openCap = !openCap;

  const cap = document.querySelector(`#powder-cap`);
  cap.classList.toggle("open-cap");
  capTimeouts = setTimeout(() => {
    cap.classList.toggle("open-cap");
    openCap = false;
  }, 11000);
}
function toggleCapBottole() {
  if (funnelOnBottle) {
    toggleFunnel(document.querySelector("#funnel"));
  }
  openBottle = !openBottle;
  const cap = document.querySelector("#bottle-cap");
  cap.classList.toggle("open-cap");
}

function toggleBottle() {
  if (!machineOn) {
    alert("Turn ON the weight machine first.");
    return;
  }
  if (openBottle) {
    toggleCapBottole();
  }
  bottleOnWeight = !bottleOnWeight;
  if (!bottleOnWeight) {
    animateWeight(0.0);
  }
  let bottleDiv = document.getElementById("pycnometer");
  bottleDiv.classList.toggle("move-pycnometer");
}

function toggleFunnel(el) {
  if (bottleOnWeight) {
    alert("remove the botton from weight machine first ");
    return;
  }
  if (!openBottle) {
    alert("open the pycnometer cap first");
    return;
  }
  funnelOnBottle = !funnelOnBottle;
  el.classList.toggle("move-funnel");
}

function toggleBeaker(el) {
  if (el.classList.contains("move-beaker-on-tap")) {
    el.classList.replace("move-beaker-on-tap", "move-beaker-on-pycnometer");
    setTimeout(() => {
      Sound.play();
    }, 1000);
    const Sound = document.getElementById("Sound");
    Sound.src = `./sounds/water_pour_sound.wav`;
    Sound.currentTime = 1;
  } else {
    el.classList.add("move-beaker-on-tap");
    setTimeout(() => {
      const Sound = document.getElementById("Sound");
      Sound.src = `./sounds/water_pour_sound.wav`;
      Sound.currentTime = 1;
      Sound.play();
    }, 3000);
  }
}

function animateWeight(target) {
  const display = document.getElementById("display");
  let current = 0;
  const step = target / 20;
  let count = 0;
  const interval = setInterval(() => {
    current += step;
    display.textContent = current.toFixed(2) + "g";
    count++;
    if (count >= 20) clearInterval(interval);
  }, 100);
}

function toggleFlip(element) {
  element.classList.toggle("flipped");
}

function changeLanguage(lang) {
  if (lang === "hi") {
    alert("हिंदी भाषा चुनी गई है। (Hindi selected)");
  } else if (lang === "en") {
    alert("English language selected.");
  }
}

function handleRadioChange() {
  let acid_selected = document.querySelector(
    ".input-group input[type='radio']:checked"
  );
  let acid_selected_value = acid_selected.value;
  toggleCap(acid_selected_value);
}
