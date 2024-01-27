function cargarRedSocial(redSocial){
    let contenedorCarga = document.getElementById("contenedor-Carga");
    contenedorCarga.style.display ="inline";
    if(redSocial==1){
        setTimeout(location.href="https://www.instagram.com/fundacionkinal",2000);
    }else if(redSocial == 2){
        setTimeout(location.href="https://www.facebook.com/kinal.gt",2000);
    }else{
        setTimeout(location.href="https://www.youtube.com/@FundacionKinalgt",2000);
    }
}