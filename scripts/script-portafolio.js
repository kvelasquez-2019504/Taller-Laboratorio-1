var progreso = 0;
function mostrarProgreso() {
	let bar = document.getElementById("bar");
    console.log(progreso);
	if(progreso<55){
        progreso+=5;
        bar.style.width = progreso+"%";
        setTimeout("mostrarProgreso()",1000);
        bar.innerHTML = progreso+"%";
    }else{
        setTimeout("progreso=0;mostrarProgreso()",5000);
        bar.innerHTML = progreso;
    }
}

function barJava(){
    if(progreso<71){

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