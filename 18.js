// javascript HTML DOM Events 

function message(){
    alert("Yes, i am Heading Tag");
}

function datashow(){
    document.getElemnetById("date").innerHTML=Date();
}

function UpperCase(){
    const change = document.getElementById("emails");
    change.value = change.value.toUpperCase();
}

function red(one){
    one.style.colour = "red";
}
{
    function Down(obj){
        obj.style.backgroundcolor = "#1ec5e5";
        obj.innerHTML =  "Release Me"
    }
}