let ans = "";
let history = "";
let s = "+-/*";
document.getElementById("1").onclick = function () {
  ans += "1";
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("clear").onclick = function () {
  ans = "";
  document.getElementById("output").innerHTML = "0";
};
document.getElementById("2").onclick = function () {
  ans += "2";
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("3").onclick = function () {
  ans += "3";
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("4").onclick = function () {
  ans += "4";
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("5").onclick = function () {
  ans += "5";
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("6").onclick = function () {
  ans += "6";
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("7").onclick = function () {
  ans += "7";
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("8").onclick = function () {
  ans += "8";
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("9").onclick = function () {
  ans += "9";
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("0").onclick = function () {
  ans += "0";
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("plus").onclick = function () {
  test();
  ans += "+";
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("min").onclick = function () {
  test();
  ans += "-";
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("mul").onclick = function () {
  test();
  ans += "*";
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("divide").onclick = function () {
  test();
  ans += "/";
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("dot").onclick = function () {
  if (ans === "") {
    ans = "0.";
  } else {
    ans += ".";
  }
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("backspace").onclick = function () {
  ans = ans.slice(0, -1);
  document.getElementById("output").innerHTML = ans;
};
let agadi;
let pachadi;
function f1(sym) {
  agadi = Number(ans.slice(0, ans.indexOf(sym)));
  pachadi = Number(ans.slice(ans.indexOf(sym) + 1));
}

document.getElementById("equal").onclick = function () {
  document.getElementById("history").innerHTML = ans;
  for (i = 0; i < s.length; i++) {
    let smt = s[i];
    if (ans.includes(smt)) {
      switch (smt) {
        case "+":
          f1("+");
          ans = agadi + pachadi;
          document.getElementById("output").innerHTML = ans;
          break;
        case "-":
          f1("-");
          ans = agadi - pachadi;
          document.getElementById("output").innerHTML = ans;
          break;
        case "/":
          f1("/");
          ans = agadi / pachadi;
          document.getElementById("output").innerHTML = ans;
          break;
        case "*":
          f1("*");
          ans = agadi * pachadi;
          document.getElementById("output").innerHTML = ans;
          break;
        default:
          break;
      }
    }
  }
};
document.getElementById("sroot").onclick = function () {
  test();
  document.getElementById("history").innerHTML = ans;
  ans = ans ** (1 / 2);
  document.getElementById("output").innerHTML = ans;
};
document.getElementById("percentage").onclick = function () {
  test();
  document.getElementById("history").innerHTML = ans;
  ans /= 100;
  document.getElementById("output").innerHTML = ans;
};
function test() {
  let count = 0;
  for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (ans[i] === s[j]) {
        count += 1;
        if (count > 0) {
          document.getElementById("history").innerHTML = ans;
          let ava = s[j];
          if (ans.includes(ava)) {
            switch (ava) {
              case "+":
                f1("+");
                ans = agadi + pachadi;
                document.getElementById("output").innerHTML = ans;
                break;
              case "-":
                f1("-");
                ans = agadi - pachadi;
                document.getElementById("output").innerHTML = ans;
                break;
              case "/":
                f1("/");
                ans = agadi / pachadi;
                document.getElementById("output").innerHTML = ans;
                break;
              case "*":
                f1("*");
                ans = agadi * pachadi;
                document.getElementById("output").innerHTML = ans;
                break;
              default:
                break;
            }
          }
        }
      }
    }
  }
}
