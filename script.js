const texts = [
  "Anh yêu em 💕","Cảm ơn em đã bên anh","Yêu Phanh mãi mãi 🌸",
  "Mãi là của nhau 💖","Em là niềm hạnh phúc ☀️"
];
const colors = ["neon-red","neon-green","neon-blue","neon-purple","neon-yellow"];
const imageSources = ["images/Love1.jpg","images/Love2.jpg","images/Love3.jpg"];
const animalSources = ["images/cat.png"];

function random(x){return Math.random()*x;}
function spawn(type){
  if(type==="text"){
    const el=document.createElement("p");
    el.classList.add("falling-text",colors[Math.floor(random(colors.length))]);
    el.innerText=texts[Math.floor(random(texts.length))];
    el.style.left=`${random(90)}vw`;
    el.style.animationDuration=`${4+random(4)}s`;
    document.body.append(el);
    setTimeout(()=>el.remove(),8000);
  }
  if(type==="image"){
    const el=document.createElement("img");
    el.src=images[Math.floor(random(images.length))];
    el.classList.add("gallery-image");
    el.style.left=`${random(90)}vw`;
    el.style.animationDuration=`${4+random(4)}s`;
    document.body.append(el);
    setTimeout(()=>el.remove(),8000);
  }
  if(type==="animal"){
    const el=document.createElement("img");
    el.src=animals[0];
    el.classList.add("animal");
    el.style.top=`${random(80)}vh`;
    el.style.left=`${random(90)}vw`;
    document.getElementById("animal-container").append(el);
    setTimeout(()=>el.remove(),12000);
  }
}

setInterval(()=>spawn("text"), 700);
setInterval(()=>spawn("image"), 1000);
setInterval(()=>spawn("animal"), 5000);
