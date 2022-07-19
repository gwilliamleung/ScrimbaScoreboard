let pointHome = document.getElementById("pointHome");
let pointGuest = document.getElementById("pointGuest");
let pointH = 0 
let pointG = 0


function plusOneH(){
    pointH++ ;
    pointHome.textContent = pointH;
}
function plusTwoH(){
    pointH+= 2 ;
    pointHome.textContent = pointH;
}

function plusThreeH(){
    pointH+= 3 ;
    pointHome.textContent = pointH;
}

function plusOneG(){
    pointG++ ;
    pointGuest.textContent = pointG;
}
function plusTwoG(){
    pointG+= 2 ;
    pointGuest.textContent = pointG;
}

function plusThreeG(){
    pointG+= 3 ;
    pointGuest.textContent = pointG;
}