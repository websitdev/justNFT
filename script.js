window.onload = ()=>{

document.querySelector("#loader").style.display="none"; document.querySelector("#container").style.display="block";
  var mList = [
{   name:"Strawberry Pancakes",
    dish:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDp74ggwp1Zk1jCf0xbRbnkUeFtJ49yPpSzw&usqp=CAU",
    icon:"https://dl.dropbox.com/s/10uwrklbloivrts/IMG_20210105_215408.png?dl=0",
},{
    name:"Samosa",
    dish:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3vPUlPQExNwhdc_qfkpnvrIkjAXpLj-8daA&usqp=CAU",
    icon:"https://dl.dropbox.com/s/10uwrklbloivrts/IMG_20210105_215408.png?dl=0",
},
{
    name:"Chole Bhature",
    dish:"https://res.cloudinary.com/dhktoeo0l/image/upload/v1609922250/images-removebg-preview_2_z1vhyy.png",
    icon:"https://dl.dropbox.com/s/10uwrklbloivrts/IMG_20210105_215408.png?dl=0",
},{
    name:"Spaghetti",
    dish:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYOPpX3aakB0J9rFEn77Wq6jLfGt5p6kqlw&usqp=CAU",
    icon:"https://dl.dropbox.com/s/10uwrklbloivrts/IMG_20210105_215408.png?dl=0",
},{
    name:"Maggie",
    dish:"https://res.cloudinary.com/dhktoeo0l/image/upload/v1609921542/IMG_20210106_134858-removebg-preview_driknf.png",
    icon:"https://dl.dropbox.com/s/10uwrklbloivrts/IMG_20210105_215408.png?dl=0",
},{
    name:"Hamburger",
    dish:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYx_K1AzkRbLTX1cb4bS5gWc8WJbT5dp0cQ&usqp=CAU",
    icon:"https://dl.dropbox.com/s/10uwrklbloivrts/IMG_20210105_215408.png?dl=0",
},{
    name:"Chocolate Cream Waffles",
    dish:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCsTW11hIsI2IO-_z9yprD-vrRLaHEevY6Q&usqp=CAU",
    icon:"https://dl.dropbox.com/s/10uwrklbloivrts/IMG_20210105_215408.png?dl=0",
},
]
for(var c = 0;c<mList.length;c++){ 
document.getElementById("m-list").innerHTML+=
<div id="d-cards">

<div id="d-dish">
<img id="symbols" src="${mList[c].icon}">
<img id="dish" src="${mList[c].dish}">
</div>
<h2 id="d-name">${mList[c].name}</h2>
<h5 id="d-info">I'm trying to set up first Tron NFT network just for fun</h5>
<div id="buy">
<button id="d-buy">BUY NFT</button>
</div>
</div>

 
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
}
