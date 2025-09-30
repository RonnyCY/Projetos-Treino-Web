
let vermelho = document.getElementById("vermelho");
let amarelo = document.getElementById("amarelo");
let verde = document.getElementById("verde");
let btnVermelho = document.getElementById("botao-vermelho");
let btnAmarelo = document.getElementById("botao-amarelo");
let btnVerde = document.getElementById("botao-verde");
let btnIniciar = document.getElementById("botao-iniciar");
let btnParar = document.getElementById("botao-parar");

let semaforoInterval = null;


const fase1 = () => {
    vermelho.style.backgroundImage = "radial-gradient( circle 71px at 48.3% 54.8%,  rgba(255,180,180,1) 0%, rgba(229,0,0,1) 90% )";
    vermelho.style.boxShadow = "0 0 30px rgba(255, 0, 0, 1)";

    amarelo.style.backgroundColor = "rgb(138, 138, 13)";
    amarelo.style.boxShadow = "None";
    amarelo.style.backgroundImage = "None";
    
    verde.style.backgroundColor = "rgb(28, 145, 37)";
    verde.style.boxShadow = "None";
    verde.style.backgroundImage = "None";
};

const fase2 = () => {
    vermelho.style.backgroundColor = "rgb(145, 16, 16)";
    vermelho.style.backgroundImage = "None";
    vermelho.style.boxShadow = "None";

    amarelo.style.backgroundImage = "radial-gradient( circle 57px at 47.8% 53.5%,  rgba(255,247,194,1) 0%, rgba(255,236,43,1) 90% )";
    amarelo.style.boxShadow = "0 0 30px rgba(238, 255, 0, 1)";
    
    verde.style.backgroundColor = "rgb(28, 145, 37)";
    verde.style.boxShadow = "None";
    verde.style.backgroundImage = "None";
};

const fase3 = () => {
    vermelho.style.backgroundColor = "rgb(145, 16, 16)";
    vermelho.style.backgroundImage = "None";
    vermelho.style.boxShadow = "None";
    
    amarelo.style.backgroundColor = "rgb(138, 138, 13)";
    amarelo.style.boxShadow = "None"
    amarelo.style.backgroundImage = "None";
    
    verde.style.backgroundImage = "radial-gradient( circle 36px at 47.3% 51.3%,  rgba(197,255,179,1) 0%, rgba(84,255,24,1) 77% )";
    verde.style.boxShadow = "0 0 30px rgba(0, 255, 34, 1)"
};

const fase4 = () => {
    vermelho.style.backgroundColor = "rgb(145, 16, 16)";
    vermelho.style.backgroundImage = "None";
    vermelho.style.boxShadow = "None";
    
    amarelo.style.backgroundColor =  "rgb(138, 138, 13)";
    amarelo.style.boxShadow = "None";
    amarelo.style.backgroundImage = "None";
    
    verde.style.backgroundColor = "rgb(28, 145, 37)";
    verde.style.boxShadow = "None";
    verde.style.backgroundImage = "None";
};

const semaforo = () => {
    let etapa = 0;
    if (semaforoInterval) clearInterval(semaforoInterval);
    fase1();
    iniciar = setTimeout(() => {
    semaforoInterval = setInterval(() =>{
            etapa = (etapa + 1) % 3;
            if (etapa === 0) fase1();
            else if (etapa === 1) fase2();
            else if (etapa === 2) fase3();
        },5000);
    },0);
};

btnVermelho.addEventListener("click", () => {
    if (semaforoInterval){
        clearInterval(semaforoInterval);    
    }
    fase1();
});

btnAmarelo.addEventListener("click", () => {
    if (semaforoInterval){
        clearInterval(semaforoInterval);
    } 
    fase2();
});

btnVerde.addEventListener("click", () => {
    if (semaforoInterval){
        clearInterval(semaforoInterval);
    } 
    fase3();
});

btnIniciar.addEventListener("click", () => {
    semaforo();
});

btnParar.addEventListener("click", () => {
    if(semaforoInterval){
        clearInterval(semaforoInterval);
    };
    fase4();
});