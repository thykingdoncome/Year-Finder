//Start
//declaring required variables and assigning them.
const resultBtn = document.querySelector("#showBtn");
const resultFeild = document.querySelector(".displayfeild");
const input = document.getElementById("input");
const date = new Date();
const dateDisplay = date.getFullYear();
let birthYear;

// attaching a click event to the button
resultBtn.addEventListener('click', getResult);

//function to be handeled in the eventlistener
function getResult(e) {
    e.preventDefault();
    if (input.value === "0" || input.value === "") {
        resultFeild.style.display = 'block';
        resultFeild.innerHTML = "Please input a valid age!";
        input.value = "";
        input.focus();
    } else if (input.value > 6260) {
        resultFeild.style.display = 'block';
        resultFeild.innerHTML = `Earliest recorded date in Egyptian calendar (4241 B.C.). 
        First year of Jewish calendar (3760 B.C.). First phonetic writing appears (c. 3500 B.C.). 
        Sumerians develop a city-state civilization (c. 3000 B.C.).`;
        input.value = "";
        input.focus();
    } else if (input.value > dateDisplay) {
        resultFeild.style.display = 'block';
        birthYear = input.value - dateDisplay;
        resultFeild.innerHTML = "Your Birth Year is " + birthYear + "BC";
        input.value = "";
        input.focus();
    } else {
        birthYear = dateDisplay - input.value;
        resultFeild.style.display = 'block';
        resultFeild.innerHTML = "Your Birth Year is " + birthYear;
        input.value = "";
        input.focus();
    }
}