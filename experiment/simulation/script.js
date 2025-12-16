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

showPowder();
function showPowder() {
  const powder = document.getElementById("select-powder").value;
  const powderImg = document.getElementById("selected-powder");
  document.getElementById("acid-powder").style.visibility = "visible";
  if (powder === "S") {
    powderImg.src = "./images/salicyclicacid.png";
    powderSelected = true;
  } else if (powder === "B") {
    powderImg.src = "./images/Benzoicacid.png";
    powderSelected = true;
  } else {
    document.getElementById("acid-powder").style.visibility = "hidden";
  }
}

function changeLang(el) {
  lang = el.value;
}

function showWeight(el) {
  switch (el.value) {
    case "e":
      weightValue = 15.2;
      break;
    case "pw":
      weightValue = 31.4;
      break;
    case "pp":
      weightValue = 25.05;
      break;
    default:
      weightValue = 40.55;
      break;
  }
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
    2: "2. Prepare the Weigh Machine:* Switch it on.",
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
      toggleMachine(document.querySelector("#on-off-button"));
      break;
    case 3:
      toggleBottle();
      weightValue = 15.2;
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
        weightValue = 31.4;
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
        weightValue = 25.4;
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
        weightValue = 40.55;
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

  // setTimeout(() => {
  //   document.querySelector(".powder").classList.toggle("powder-hiddne");
  // }, 3000);
  // setTimeout(() => {
  //   document.querySelector(".bottle").classList.add("sample-powder");

  //   const interval = setInterval(() => {
  //     const powder = document.createElement("img");
  //     powder.src = "./images/samplepowder.png";
  //     powder.className = "powder-fill";

  //     document.querySelector(".bottleDiv").appendChild(powder);
  //     setTimeout(() => powder.remove(), 50);
  //   }, 100);

  //   document.querySelector(".powder").classList.toggle("powder-hiddne");
  //   setTimeout(() => clearInterval(interval), 3000);
  // }, 7000);

  // setTimeout(() => {
  //   el.classList.remove("animate_spatula", "animate_spatula-s");
  //   toggleFunnel(document.querySelector(".funnel"));
  //   toggleCapBottole();
  // }, 10000);
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
    // if (weightValue >= 40 ) {
    //   animateWeight(bottleOnWeight ? 40.55 : 0.0);
    //   weightValue = 41.55;
    // } else if (
    //   document
    //     .querySelector(".pycnometer")
    //     .classList.contains("powder-in-pycnometer")
    // ) {
    //   animateWeight(bottleOnWeight ? 25.05 : 0.0);
    //   weightValue = 25.05;
    // } else if (
    //   document
    //     .querySelector(".pycnometer")
    //     .classList.contains("water-in-pycnometer")
    // ) {
    //   animateWeight(bottleOnWeight ? 31.4 : 0.0);
    //   weightValue = 31.4;
    // } else {
    //   animateWeight(bottleOnWeight ? 15.2 : 0.0);
    //   weightValue = 15.2;
    // }
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
      <table style="width=max-content; border-collapse: collapse;">
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
            <td style="border: .2vw solid black; padding: .8vw; width: 14vw">15.20g</td>
            <td style="border: .2vw solid black; padding: .8vw; width: 14vw">31.40g</td>
            <td style="border: .2vw solid black; padding: .8vw; width: 14vw">25.05g</td>
            <td style="border: .2vw solid black; padding: .8vw; width: 14vw">40.55g</td>
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
  resultp.innerText = `
   <table style="width=max-content; border-collapse: collapse;">
        <tbody>
          <tr>
            <td style="border: .2vw solid black; padding: .8vw; width: 14vw"><p>Weight of empty pycnometer : <b>W1</b></p></td>
            <td style="border: .2vw solid black; padding: .8vw; width: 14vw"><p> Weight of pycnometer with water: <b>W2</b></p></td>
             <td style="border: 2px solid black; padding: 8px; width: 100px"><p>  Weight of  pycnometer with powder: <b>W3</b></p></td>
             <td style="border: .2vw solid black; padding: .8vw; width: 14vw"><p> Weight of pycnometer with water and powder: <b>W4</b></p></p></td>
          </tr>
        </tbody>
      </table>
  `;
  popup.style.display = "block";
  result.style.display = "block";
  const resultHTML = `
   <table style="width=max-content; border-collapse: collapse;">
        <tbody>
          <tr>
            <td style="border: .2vw solid black; padding: .8vw; width: 14vw"><p>Weight of empty pycnometer : <b>W1</b></p></td>
            <td style="border: .2vw solid black; padding: .8vw; width: 14vw"><p> Weight of pycnometer with water: <b>W2</b></p></td>
             <td style="border: .2vw solid black; padding: .8vw; width: 10vw"><p>  Weight of  pycnometer with powder: <b>W3</b></p></td>
             <td style="border: .2vw solid black; padding: .8vw; width: 14vw"><p> Weight of pycnometer with water and powder: <b>W4</b></p></p></td>
          </tr>
        </tbody>
      </table>
  `;
  setTimeout(() => {
    // popup.style.display = "none";
    const resultHTML2 = `
    <table style="width=max-content; border-collapse: collapse;">
    
     
     <tr>
        <td style="border: .2vw solid black; padding: .8vw; width: 34vw"> Volume of powder = volume of water displaced.</td>
     </tr>
     <tr><td style="border: .2vw solid black; padding: .8vw; width: 34vw">
    V=(W4-W1)-(W3-W2).</td></tr>
    <tr><td style="border: .2vw solid black; padding: .8vw; width: 34vw">
    V=(40.55-15.20)-(25.05-31.40).</td></tr>

     <tr><td style="border: .2vw solid black; padding: .8vw; width: 34vw">
    V=31.70cm³.<br></td></tr>
    <tr><td style="border: .2vw solid black; padding: .8vw; width: 34vw">
    True density = mass of powder(W4-W2)/volume of powder(V)..</td></tr>
    
    <tr><td style="border: .2vw solid black; padding: .8vw; width: 34vw">
    <b>True density = 0.2886g/cm³.</b></td></tr>
    
    
    
     
    </table>
    `;
    document.querySelector("h2").innerText = "Calculation Result";
    resultp.innerHTML = resultHTML2;
    // popup.style.display = "block";
    const Sound = document.getElementById("Sound");
    Sound.src = `./sounds/calculate.mp3`;
    Sound.currentTime = 0;
    Sound.play();
  }, 15000);

  document.querySelector("h2").innerText = "Representations";
  resultp.innerHTML = resultHTML;
  // popup.style.display = "block";

  setTimeout(() => {
    const Sound = document.getElementById("Sound");
    Sound.src = `./sounds/observation.mp3`;
    Sound.currentTime = 0;
    Sound.play();
  }, 500);
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
  // clearTimeout(capTimeouts[type]);
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

  // if (
  //   document.querySelector("#beaker").classList.contains("fill") &&
  //   !el.classList.contains("on-tap")
  // ) {
  //   if (!funnelOnBottle) {
  //     alert("place the funnel on bottle first ");
  //     return;
  //   }

  //   el.classList.toggle("filled-beaker");
  //   document.querySelector(".bottle").classList.add("water-bottle");
  //   setTimeout(() => {
  //     toggleFunnel(document.querySelector(".funnel"));
  //     el.classList.toggle("fill-bottle");
  //   }, 5000);
  // } else {
  //   el.classList.toggle("on-tap");
  // }
  // setTimeout(() => {
  //   const tapElement = document.querySelector(".tap");
  //   const fakeEvent = {
  //     target: tapElement,
  //   };

  //   flowWater(fakeEvent);
  // }, 2500);

  // setTimeout(() => {
  //   el.classList.remove("on-tap");
  // }, 8000);
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
    // You can extend this to change UI text dynamically
  } else if (lang === "en") {
    alert("English language selected.");
    // Extend to update UI text back to English
  }
}

function handleRadioChange() {
  let acid_selected = document.querySelector(
    ".input-group input[type='radio']:checked"
  );
  let acid_selected_value = acid_selected.value;
  toggleCap(acid_selected_value);
}
