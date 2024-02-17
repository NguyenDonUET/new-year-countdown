const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const title = document.getElementById("title");

const timerId = setInterval(runTimer, 1000);

function runTimer() {
  const today = new Date();
  const deadline = new Date(
    `Jan 1, ${today.getFullYear() + 1} 00:00:00`
  ).getTime();
  //   console.log("🚀 ~ deadline:", deadline);
  //   console.log("🚀 ~ deadline:", deadline);

  const timeLeft = deadline - today.getTime();
  console.log("🚀 ~ runTimer ~ timeLeft:", timeLeft);
  // Tính số giây còn lại: 1s = 1000ms
  let seconds = Math.floor((timeLeft / 1000) % 60);

  // Tính số phút còn lại
  let minutes = Math.floor((timeLeft / 1000 / 60) % 60);

  // Tính số giờ còn lại
  let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);

  // Tính số ngày còn lại
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  if (timeLeft < 0) {
    clearInterval(timerId);
    title.textContent = "🎉 Happy new year 🎉";
    title.style.color = "red";
  }

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}
