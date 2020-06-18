window.onload = () => {
  if (AFRAME.utils.device.isMobile() == false) { // DESKTOP
        var el = document.getElementById("mycursor");
        el.setAttribute('cursor', 'rayOrigin: mouse;fuse: false');
    } else {
        var el = document.getElementById("mycursor"); // MOBILE
        el.setAttribute('cursor', 'rayOrigin: cursor;fuse: true');
        el.object3D.visible = true;
    }
}

const botao = document.getElementById("botaoProximo");
const furadeira = document.getElementById("furadeira");
var certo = 0;

function clickBotao(){
  //furadeira.object3D.rotation.y += 1;
  certo += 1;
  furadeira.object3D.position.x += 1;
  if(furadeira.object3D.position.x == 0){
    furadeira.object3D.position.x -= 2;
  }
}

botao.addEventListener("click", clickBotao);









//muda a cor do bloco

document.querySelector("#botaoCheck").addEventListener("click", (e)=>{ 
  
  var el = document.querySelector("#cube");
  if(certo === 1){
    el.setAttribute('material', 'color', 'red');
  }


 
});




























//const porta = document.querySelector("porta");
//const seta1 = document.querySelector("setaDireita");
//const seta2 = document.querySelector("setaDireita0");

//function andarPraDireita() {
  //porta.object3D.rotation.y += 0.1;
//}

//seta1.addEventListener("click", andarPraDireita);
//seta2.addEventListener("click", andarPraDireita);

