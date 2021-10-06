// boton top
var scrollPos = 0;
window.addEventListener('scroll',function(){

    if ((document.body.getBoundingClientRect().top) < scrollPos) 
        document.getElementById('botonTop').style.display='block';
    else 
    document.getElementById('botonTop').style.display='none';
    scrollPos = (document.body.getBoundingClientRect()).top;
});
// links de navegacion
const inicio=()=>{
                    document.getElementById('linkInicio').className="nav-link";
                    document.getElementById('linkDelicias').className="nav-link";
                    document.getElementById('linkNovedades').className="nav-link";
                    document.getElementById('linkPromociones').className="nav-link";
                    document.getElementById('linkContacto').className="nav-link";
    
}
const linkInicio=()=>{
                        document.getElementById('linkInicio').className="nav-link activo";
                        document.getElementById('linkDelicias').className="nav-link";
                        document.getElementById('linkNovedades').className="nav-link";
                        document.getElementById('linkPromociones').className="nav-link";
                        document.getElementById('linkContacto').className="nav-link";

};
const linkDelicias=()=>{
                        document.getElementById('linkInicio').className="nav-link";
                        document.getElementById('linkDelicias').className="nav-link activo";
                        document.getElementById('linkNovedades').className="nav-link";
                        document.getElementById('linkPromociones').className="nav-link";
                        document.getElementById('linkContacto').className="nav-link";
};
const linkNovedades=()=>{
    document.getElementById('linkInicio').className="nav-link";
    document.getElementById('linkDelicias').className="nav-link";
    document.getElementById('linkNovedades').className="nav-link activo";
    document.getElementById('linkPromociones').className="nav-link";
    document.getElementById('linkContacto').className="nav-link";
};
const linkPromociones=()=>{
    document.getElementById('linkInicio').className="nav-link";
    document.getElementById('linkDelicias').className="nav-link";
    document.getElementById('linkNovedades').className="nav-link";
    document.getElementById('linkPromociones').className="nav-link activo";
    document.getElementById('linkContacto').className="nav-link";
};
const linkContacto=()=>{
    document.getElementById('linkInicio').className="nav-link";
    document.getElementById('linkDelicias').className="nav-link";
    document.getElementById('linkNovedades').className="nav-link";
    document.getElementById('linkPromociones').className="nav-link";
    document.getElementById('linkContacto').className="nav-link activo";
};

 // jQuery - Cerrar Menu Nav al hacer click versión Mobil
 $(document).ready(function(){
    $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    });
});


