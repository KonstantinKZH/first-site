const input = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

btn.addEventListener("click", function(){
    if(input.value == 'Привет!'){
        output.innerHTML = "И тебе привет!"
    };
});