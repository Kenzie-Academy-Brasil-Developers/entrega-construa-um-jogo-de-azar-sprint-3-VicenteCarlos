const button = document.getElementById("enter");
const span = document.getElementById("hidden");
const tela = document.getElementById("tela2");
const shake = document.querySelector("#tela2, #fundo2");

const reset = () => {
    tela.innerText = '';
}

button.addEventListener("click", () => {
    reset();
    shake.style.animation =  "shake 0.5s";
    span.style.display = "none";
    let aleatorio = Math.floor(Math.random() * 6) + 1;
    let text = [], count = 0;
    let text2 = ["Sim.", "Não.", "Talvez.", 
                "Quem sabe um dia.", "Será?", "Não entendi a sua pergunta."];
    
    for (let i=0;i<6;i++) {
        count++;
        text[i] = document.createTextNode(text2[i]);
        if (aleatorio===count) {
            tela.appendChild(text[i])
        }
    }
});



