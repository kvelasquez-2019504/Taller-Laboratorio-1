var progresos=0;
var progresoJava=0;
var progresoJavaEE=0;
var progresoSQL=0;
var progresoJS=0;
var progresoHTML=0;
var progresoCSS=0;
function cargarBarras() {
    if(progresos == 6){
        progresos=0;
        cargarBarras();
    }else{
        if(progresos==0){
            barJava();
            barJavaEE();
            barSQL();
            barJS();
            barHTML();
            barCSS();
        }
    }
}

function barJava(){
    let barJava = document.getElementById("barJava");
    if(progresoJava<65){
        progresoJava+=5;
        barJava.style.width = progresoJava+'%';
        barJava.innerHTML = progresoJava+"%";
        setTimeout("barJava()",1000);
    }else{
        progresoJava=0;
        progresos+=1;
        cargarBarras();
    }
}
function barJavaEE(){
    let barJavaEE = document.getElementById("barJavaEE");
    if(progresoJavaEE <60){
        progresoJavaEE+=5;
        barJavaEE.style.width = progresoJavaEE+'%';
        barJavaEE.innerHTML = progresoJavaEE+"%";
        setTimeout("barJavaEE()",1000);
    }else{
        progresoJavaEE=0;
        progresos+=1;
        cargarBarras();
    }
}
function barSQL(){
    let barSQL= document.getElementById("barSQL");
    if(progresoSQL <55){
        progresoSQL+=5;
        barSQL.style.width = progresoSQL+"%";
        barSQL.innerHTML = progresoSQL+"%";
        setTimeout("barSQL()",1000);
    }else{
        progresoSQL=0;
        progresos+=1;
        cargarBarras();
    }
}
function barJS(){
    let barJS = document.getElementById("barJS");
    if(progresoJS<40){
        progresoJS+=5;
        barJS.style.width = progresoJS+"%";
        barJS.innerHTML = progresoJS+"%";
        setTimeout("barJS()",1000);
    }else{
        progresoJS=0;
        progresos+=1;
        cargarBarras();
    }
}
function barHTML(){
    let barHTML = document.getElementById("barHTML");
    if(progresoHTML<45){
        progresoHTML+=5;
        barHTML.style.width = progresoHTML+"%";
        barHTML.innerHTML = progresoHTML+"%";
        setTimeout("barHTML()",1000);
    }else{
        progresoHTML=0;
        progresos+=1;
        cargarBarras();
    }
}
function barCSS(){
    let barCSS = document.getElementById("barCSS");
    if(progresoCSS <45){
        progresoCSS+=5;
        barCSS.style.width = progresoCSS+"%";
        barCSS.innerHTML = progresoCSS+"%";
        setTimeout("barCSS()",1000);
    }else{
        progresoCSS=0;
        progresos+=1;
        cargarBarras();
    }
}