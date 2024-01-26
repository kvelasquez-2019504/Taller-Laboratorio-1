var progresos = 0;
var progresoJava =0;
function mostrarProgreso() {
	/*let bar = document.getElementById("bar");
    console.log(progreso);
	if(progreso<55){
        progreso+=5;
        bar.style.width = progreso+"%";
        setTimeout("mostrarProgreso()",1000);
        bar.innerHTML = progreso+"%";
    }else{
        setTimeout("progreso=0;mostrarProgreso()",5000);
        bar.innerHTML = progreso;
    }*/
    if(progresos == 6){
        cargarBarras();
    }else{
        barJava();
       /* barJavaEE();
        barSQL();
        barJS();
        barHTML();
        barCSS();*/
    }
}

function barJava(){
    let barJava = document.getElementById("barJava");
    if(progresoJava<70){
        progresoJava+=5;
        barJava.style.width = progresoJava+'%';
        barJava.innerHTML = progresoJava+"%";
        setTimeout("barJava()",1000);
    }else{
        progresoJava=0;
        progresos+1;
    }
}
function barJavaEE(){
    if(progreso <61){

    }
}
function barSQL(){
    if(progreso <56){

    }
}
function barJS(){
    if(progreso<41){

    }
}
function barHTML(){
    if(progreso >46){

    }
}
function barCSS(){
    if(progreso >46){

    }
}