document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();
});
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  if (
    document.getElementById("name-1").value != null ||
    document.getElementById("name-2").value != null
  ) {
    $(".sec-1").fadeOut("slow");
    $(".sec-2").fadeOut("fast");
    $(".loader").fadeIn("fast");
    setTimeout(() => {
      $(".loader").fadeOut("fast");
      $(".sec-2").fadeIn("slow");
    }, 4000);
  }
});

//Animation Part

//Game Logic

//TODO: user turn
let draw = document.getElementById("  draw");
let change = document.querySelectorAll(".borders");
let count = 0;
flag = 0;
clicks = 0;
change.forEach((draw) =>
  draw.addEventListener("click", () => {
    if (flag == 0) {
      document.getElementById("who").innerText =
        document.getElementById("name-1").value + "  " + "Played";
      draw.innerHTML = "<h1> X </h1>";
      playerOne();
    } else {
      document.getElementById("who").innerText =
        document.getElementById("name-2").value + "  " + "Played";
      draw.innerHTML = "<h1> O </h1>";
      playerTwo();
    }
  })
);
function playerOne() {
  clicks++;
  console.log(clicks);
  if (
    (change[0].innerText === "X" &&
      change[1].innerText === "X" &&
      change[2].innerText === "X") ||
    (change[3].innerText === "X" &&
      change[4].innerText === "X" &&
      change[5].innerText === "X") ||
    (change[6].innerText === "X" &&
      change[7].innerText === "X" &&
      change[8].innerText === "X") ||
    (change[0].innerText === "X" &&
      change[4].innerText === "X" &&
      change[8].innerText === "X") ||
    (change[0].innerText === "X" &&
      change[3].innerText === "X" &&
      change[6].innerText === "X") ||
    (change[1].innerText === "X" &&
      change[4].innerText === "X" &&
      change[7].innerText === "X") ||
    (change[2].innerText === "X" &&
      change[5].innerText === "X" &&
      change[8].innerText === "X")
  ) {
    document.getElementById("who").innerText =
      document.getElementById("name-1").value + "  " + "Wins";
    setTimeout(() => {
      $(".sec-2").fadeOut("slow");
      $(".loader").fadeIn("fast");
    }, 2000);
    setTimeout(() => {
      window.location.href =
        "file:///C:/Users/aswan/OneDrive/Documents/JS%20Projects/Tic-Tac-Toe/index.html";
    }, 3000);
  } else {
    if (clicks == 9) {
      document.getElementById("who").innerText = "Match Draw";
      setTimeout(() => {
        $(".sec-2").fadeOut("slow");
        $(".loader").fadeIn("fast");
      }, 2000);
      setTimeout(() => {
        window.location.href =
          "file:///C:/Users/aswan/OneDrive/Documents/JS%20Projects/Tic-Tac-Toe/index.html";
      }, 3000);
      clicks = 0;
    }
  }
  flag = 1;
}

function playerTwo() {
  clicks++;
  console.log(clicks);
  if (
    (change[0].innerText === "O" &&
      change[1].innerText === "O" &&
      change[2].innerText === "O") ||
    (change[3].innerText === "O" &&
      change[4].innerText === "O" &&
      change[5].innerText === "O") ||
    (change[6].innerText === "O" &&
      change[7].innerText === "O" &&
      change[8].innerText === "O") ||
    (change[0].innerText === "O" &&
      change[4].innerText === "O" &&
      change[8].innerText === "O") ||
    (change[0].innerText === "O" &&
      change[3].innerText === "O" &&
      change[6].innerText === "O") ||
    (change[1].innerText === "O" &&
      change[4].innerText === "O" &&
      change[7].innerText === "O") ||
    (change[2].innerText === "O" &&
      change[5].innerText === "O" &&
      change[8].innerText === "O")
  ) {
    document.getElementById("who").innerText =
      document.getElementById("name-2").value + "  " + "Wins";
    setTimeout(() => {
      $(".sec-2").fadeOut("slow");
      $(".loader").fadeIn("fast");
    }, 2000);
    setTimeout(() => {
      window.location.href =
        "file:///C:/Users/aswan/OneDrive/Documents/JS%20Projects/Tic-Tac-Toe/index.html";
    }, 3000);
  } else {
    if (clicks == 9) {
      document.getElementById("who").innerText = "Match Draw";
      setTimeout(() => {
        $(".sec-2").fadeOut("slow");
        $(".loader").fadeIn("fast");
      }, 2000);
      setTimeout(() => {
        window.location.href =
          "file:///C:/Users/aswan/OneDrive/Documents/JS%20Projects/Tic-Tac-Toe/index.html";
      }, 3000);
    }
  }
  flag = 0;
}
