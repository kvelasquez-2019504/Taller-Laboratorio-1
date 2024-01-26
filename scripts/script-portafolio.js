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
