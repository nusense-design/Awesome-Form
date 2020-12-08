const inputs = document.querySelectorAll('.input');
console.log(inputs)

function functFocus() {
    let prent = this.parentNode;
    prent.classList.add("focus");
}
function blurFocus() {
    let prent = this.parentNode;
    if (this.value == '') {
        prent.classList.remove("focus");
    }
     
}
inputs.forEach(element => {
    element.addEventListener('focus', functFocus);
    element.addEventListener("blur", blurFocus);
    
});

