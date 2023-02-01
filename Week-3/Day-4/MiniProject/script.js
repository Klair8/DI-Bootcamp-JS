let color;


function rainbow(){
const paletColors = document.getElementById("paletofColor");
const colors = ["Red","OrangeRed", "Salmon","Orange","Yellow","Khaki","Pink", "HotPink","Plum","Magenta",
"BlueViolet", "DarkMagenta", "Indigo","DarkSlateBlue", "DeepPink","Lime","SeaGreen","Green","DarkCyan", "Grey","Black"];
for (let color of colors ){
    const div = document.createElement("div");
    div.style.backgroundColor = color;
    div.addEventListener("click", retrieveColor);
    paletColors.appendChild(div);
}
}
rainbow();

function zone(){
    const allZone = document.getElementById("colorZone");
    for (let i = 0; i < 1536; i++) {
      const divs = document.createElement("div");
      divs.classList.add('items');
      divs.addEventListener("click", addColor);
      divs.addEventListener("mouseover", coloring);
      divs.addEventListener("mouseup", coloring);
      divs.addEventListener("mousedown", coloring);
      colorZone.appendChild(divs);
    }
    const btn = document.getElementById('clear');
    const boxes = document.querySelectorAll('.items');
    btn.addEventListener("click", () => {
    boxes.forEach(items=> {
    items.style.backgroundColor = "white";
  });
});
}

   zone();

   function retrieveColor(evt){
    color = evt.target.style.backgroundColor;
    console.log(color);
    return color
   }

   function addColor (evt){
   evt.target.style.backgroundColor = color
   }

   function coloring (evt){
    console.log(evt);
    if("mouseover" && "mousedown" == true) {
  evt.target.style.backgroundColor= color
   }else (evt.type == "mouseup")
    evt.target.style.backgroundColor= color
   }


   
