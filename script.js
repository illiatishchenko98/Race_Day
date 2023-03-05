let raceNumber = Math.floor(Math.random() * 1000);
let checkRegister = true;

let age = Math.floor(Math.random() * 99);

if (age >= 18 && checkRegister) {
  console.log(raceNumber);
};


if (age >= 18 && raceNumber && checkRegister) {
  console.log(`Your race # is ${raceNumber} and race will starts at 9:30 am`);
} else if (age >= 18 && checkRegister == false) {
  console.log(`Your race # is ${raceNumber} and race will race at 11:00am`);
} else if (age <= 18) {
  console.log(`Your race # is ${raceNumber} and Youth registrants run at 12:30 pm`);
} else {
  console.log("see the registration desk.")
};