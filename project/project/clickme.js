const button = document.querySelector('button');
const h2El = document.querySelector('h2');
const bgEl = document.querySelector('section');

button.addEventListener('click',() => {
    let color ='#';
    color += Math.random().toString(16).slice(2,8);
    bgEl.style.backgroundColor = color;
    h2El.innerText = color;
    console.log(color)
//     var color = ["red","green","Blue","pink"];
//     var i = 0;
//     document.querySelector('button').addEventListener("click",
//          function(){
//             i = 1 < color.length ? ++i : 0;
//     document.querySelector("body").style.background = color[i]
//             let color = '#';
// })
         
    
})
