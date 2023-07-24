const inputEl = document.querySelector("input");
const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");
let num;
btnEl.addEventListener("click", (e) => {
  num = inputEl.value;

  if (num > 3999 || num < 1) {
    alert("input number should be in the range of 1-3999");
    inputEl.value = "";
    resultEl.innerHTML = "The result will be shown here";
  } else {
    let romanNumerals = [
      ["I", "IV", "V", "IX"],
      ["X", "XL", "L", "XC"],
      ["C", "CD", "D", "CM"],
      ["M"],
    ];
    let j;
    let result = "";
    let digitNumbers = num.toString().length;
    let devider = "1";
    let arr = [];
    let newLetter = "";
    let newLetterArr = [];
    for (let i = 0; i < digitNumbers - 1; i++) {
      devider = devider + "0";
    }
    devider = +devider;
    for (let i = 0; i < digitNumbers; i++) {
      arr.push(Math.floor(num / devider));
      num = num % devider;
      devider = devider / 10;
      if (devider < 1) {
        break;
      }
    }
    for (let i = arr.length - 1; i >= 0; i--) {
      j = arr.length - 1 - i;
      if (arr[i] >= 1 && arr[i] <= 3) {
        newLetter = "";
        for (let k = 1; k <= arr[i]; k++) {
          newLetter = newLetter + romanNumerals[j][0];
        }
        newLetterArr.unshift(newLetter);
      } else if (arr[i] == 4) {
        newLetter = "";
        newLetter = romanNumerals[j][1];
        newLetterArr.unshift(newLetter);
      } else if (arr[i] == 5) {
        newLetter = "";
        newLetter = romanNumerals[j][2];
        newLetterArr.unshift(newLetter);
      } else if (arr[i] >= 6 && arr[i] <= 8) {
        newLetter = "";
        newLetter = newLetter + romanNumerals[j][2];
        for (let k = 1; k <= arr[i] - 5; k++) {
          newLetter = newLetter + romanNumerals[j][0];
        }
        newLetterArr.unshift(newLetter);
      } else if (arr[i] == 9) {
        newLetter = "";
        newLetter = romanNumerals[j][3];
        newLetterArr.unshift(newLetter);
      }
    }
    result = newLetterArr.join("");
    resultEl.innerHTML = `The Roman equivalent of the number ${inputEl.value} is `;
    let spanEl = document.createElement("span");
    resultEl.appendChild(spanEl);
    spanEl.innerHTML = `${result}`;
    inputEl.value = "";
  }
});
