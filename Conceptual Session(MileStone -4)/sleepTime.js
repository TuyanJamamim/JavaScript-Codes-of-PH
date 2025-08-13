function calculateSleepTime(times) {
  // 1. find sum of array
  let sum = 0;
  for (let time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    sum = sum + time;
  }

  // calculate sleepTime

  //variles can ve declared when loop or condition is over
  let sleepSecond = sum;
  let hour = Math.floor(sleepSecond / 3600);
  sleepSecond = sleepSecond % 3600;
  let minute = Math.floor(sleepSecond / 60);
  sleepSecond = sleepSecond % 60;


  //here hour ,minute and seconds are accesile in result vecause these variales are declared inside the function..not a loop or condition inside the function
  let result = {
    hour: hour,
    minute: minute,
    second: sleepSecond,
  };
  return result;
}


