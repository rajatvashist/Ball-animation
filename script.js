function mouseOver() {
  document.getElementById("ball").style.animationPlayState = "paused";
  document.getElementById("ball").style.cursor = "pointer";
}
function mouseOut() {
  document.getElementById("ball").style.animationPlayState = "running";
}

let target = [0, 10, 130, 250, 370, 490];

function process(n) {
  let tops = target[n];
  let b = "#target";
  b += n;
  var ball = $("#ball");
  ball.animate({ left: "83vw", top: tops + "px" }, 2000, function () {
    blast.play();
    $(b).effect({
      duration: 2000,
      effect: "explode",
      pieces: 200,
    });
    ball.css({ left: "10px", top: "240px" });
  });
}

let numbers_r = [1, 2, 3, 4, 5];
function suffle() {
  for (let i = numbers_r.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [numbers_r[i], numbers_r[j]] = [numbers_r[j], numbers_r[i]];
  }

  return numbers_r.pop();
}

$(document).ready(function () {
  $("#ball").click(function () {
    let n = suffle();
    process(n);
  });
});
