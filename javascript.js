alert("JavaScript оқимыз");
result=prompt("Сіздің есіміңіз кім?");
result=confirm("Сіз осы сайтқа кіргіңіз келедіме?");

var a=prompt("Сан жазыңыз");
if(a>1)
alert("a 1-ден үлкен");
else
alert("a 1-ден кіші");

var color=prompt("Қандай түс?");
switch(color){
    case "қызыл":
        alert("red");
        break;
    case "жасыл":
        alert("green");
        break;
    case "көк":
        alert("blue");
        break;
    default:
    alert("бізде бұл тілде құжат жоқ")
}
var a=prompt("Сан жазыңыз");
while(a<100){
    a*=2;
    alert(a);
}
var eart=new Array();
earth [0]="Планета";
earth [1]="Жер";
earth [2]="24 сағат";
earth [3]="365.25";
