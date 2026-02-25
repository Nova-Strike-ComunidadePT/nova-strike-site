// Partículas
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    color: { value: "#00f7ff" },
    line_linked: { enable: true, color: "#00f7ff" }
  }
});

// Contador animado
let count = 0;
let target = 127; // muda para o nº real de membros

let interval = setInterval(() => {
    if(count < target){
        count++;
        document.getElementById("memberCount").innerText = count;
    } else {
        clearInterval(interval);
    }
}, 20);
