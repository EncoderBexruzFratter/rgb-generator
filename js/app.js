// sort
// continue
//  for (let i = 1; i < 5; i++){
//     if(i === 3) continue;
//     console.log(i);
// }
// let arr = ["Ali" , "Islomjon" , "Sultonbek" , "Bexruz" , "Xurshit" , "Saidiskandarhon"]

// let b = arr.map(function(item , index){
//     // return item.toLocaleLowerCase()
//     // item.toLocaleUpperCase()
//     return item++ == item++
// })
// console.log(b);
let inp = document.querySelectorAll("input");
let text = document.querySelectorAll("label");
let body = document.querySelector("body");

// inp.forEach(function(item , index){
//     text.forEach(function(text , index){
//         inp.addEventListener("input" , function(){
//             text.textContent = inp.value
//         })
//     })
// })
let btn = document.querySelector("button");
function rangefun(input, textfun) {
  textfun.textContent = "0";
  input.value = 0;
  body.style.backgroundColor = "black";
  input.addEventListener("input", function () {
    let inps = document.querySelectorAll("input");
    textfun.textContent = input.value;
    document.body.style.backgroundColor = `rgb(${inps[0].value} ,${inps[1].value},${inps[2].value} )`;
    let boxlabel = document.querySelector(".box-label");
    let title = document.querySelectorAll(".title");
    title.forEach(function (item, index) {
      if (input.value > 50) {
        item.style.color = "black";
      } else {
        item.style.color = "white";
      }
    });
    if (input.value > 50) {
      boxlabel.style.color = "black";
    } else {
      boxlabel.style.color = "white";
    }
  });
  btn.addEventListener("click", function () {
    navigator.clipboard.writeText(
      `background-color:${window.getComputedStyle(body).backgroundColor};`
    );
  });
}

rangefun(inp[0], text[0], body);
rangefun(inp[1], text[1], body);
rangefun(inp[2], text[2], body);
