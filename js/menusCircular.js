//titulos y perfil
var tituloPagina = "RETO";
var proyecto = "RETO";
var descripcionProyecto = "Registro Electrónico de Transacciones y Operaciones";
var pie = "Ministerio de Agricultura y Pesca, Alimentación y Medio Ambiente";
var perfil = "Perfil: Administrador";
var usuario = "Usuario: 11111111H Admin Admini Admino";
var estadisticasHREF = window.location.origin + '/cuadrodemando/?apli=' + 'RETO';
var _logout = '/default.aspx?action=logout';

document.title = tituloPagina;
document.getElementById('titulo').innerText = proyecto;
document.getElementById('subtitulo').innerText = descripcionProyecto;
document.getElementById('footerTexto').innerText = pie;
document.getElementById('perfil').innerText = perfil;
document.getElementById('usuario').innerText = usuario;    

var urlAplicacion = window.location.origin + '/' + window.location.pathname.split("/")[1] + '/';
//menus
var _Menus = [];
_Menus.push(GenerateInicio());
_Menus = _Menus.concat(GenerateMenusIntemedios(),GeneratePerfilClose());
GenerateMenu(_Menus);

function GenerateInicio() {
    //Padre { "tituloPadre": "", "id": "", "claseIcono": "", "claseTitulo": "", "claseMenuItem": "", "hijos": []};
    var MenuInicio = { "titulo": "Inicio", "id": "", "claseIcono": "home.png", "claseTitulo": "", "claseMenuItem": "itemAlto", "hijos": []};
    //Hijos { "titulo": "", "href": "", "clase": ""};
    var HijoInicio = { "titulo": "Inicio", "href": urlAplicacion + "default.html", "clase": ""};
    var HijoDocumentacion = { "titulo": "Documentación", "href": urlAplicacion + "pages/Documentacion.aspx", "clase": ""};
    MenuInicio.hijos.push(HijoInicio, HijoDocumentacion);
    return MenuInicio;
}

function GeneratePerfilClose() {
    var MenuAdministracion = { "titulo": "Administración", "id": "", "claseIcono": "userAdmin.png", "claseTitulo": "", "claseMenuItem": "itemAlto", "hijos": []};
    var HijoUsuarios = { "titulo": "Usuarios", "href": urlAplicacion + "Regeus.UAdmin.aspx", "clase": ""};
    var HijoEstadisticas = { "titulo": "Estadísticas de acceso", "href": estadisticasHREF, "clase": ""};
    MenuAdministracion.hijos.push(HijoUsuarios, HijoEstadisticas);
    var MenuPerfil = { "titulo": "Perfil de Usuario", "id": "UserTool", "claseIcono": "user.png", "claseTitulo": "tituloAlto", "claseMenuItem": "", "hijos": []};
    var MenuClose = { "titulo": "Cerrar Sesión", "id": "CloseSesionTool", "claseIcono": "logout.png", "claseTitulo": "pulseClose", "claseMenuItem": "", "hijos": []};
    var _menu = [];
    _menu.push(MenuAdministracion, MenuPerfil, MenuClose);
    return _menu;
}

function GenerateMenusIntemedios() {
    var _menu = [];

    var MenuTransaccion = { "titulo": "Transacciones", "id": "", "claseIcono": "transaccion.png", "claseTitulo": "", "claseMenuItem": "itemAlto", "hijos": []};
    var HijoTransaccion1 = { "titulo": "Nueva transacción", "href": urlAplicacion + "pages/NTransaccion.aspx", "clase": ""};
    var HijoTransaccion2 = { "titulo": "Consulta de transacciones", "href": urlAplicacion + "pages/Transaccion.aspx", "clase": ""};
    MenuTransaccion.hijos.push(HijoTransaccion1, HijoTransaccion2);
    var MenuCSV = { "titulo": "Carga de Datos", "id": "", "claseIcono": "cargaDatos.png", "claseTitulo": "", "claseMenuItem": "itemAlto", "hijos": []};
    var HijoCSV1 = { "titulo": "Nueva carga", "href": urlAplicacion + "pages/Data/Send.aspx", "clase": ""};
    var HijoCSV2 = { "titulo": "Consulta de cargas", "href": urlAplicacion + "pages/Data/list.aspx", "clase": ""};
    MenuCSV.hijos.push(HijoCSV1, HijoCSV2);
    var MenuAux = { "titulo": "Tablas Auxiliares", "id": "", "claseIcono": "tablasAux.png", "claseTitulo": "", "claseMenuItem": "itemAlto", "hijos": []};
    var HijoAux1 = { "titulo": "Tipos de unidades", "href": urlAplicacion + "pages/Unidad.aspx", "clase": ""};
    var HijoAux2 = { "titulo": "Representantes de entidades ROPO", "href": urlAplicacion + "pages/RepreROPO.aspx", "clase": ""};
    var HijoAux3 = { "titulo": "Entidades de baja con usuarios activos", "href": urlAplicacion + "pages/Huerfanos.aspx", "clase": ""};
    MenuAux.hijos.push(HijoAux1, HijoAux2, HijoAux3);
    _menu.push(MenuTransaccion, MenuCSV, MenuAux);
    return _menu;
}

function GenerateMenu(Menus) {
    //generar esto como hijos de menu
    //<li class="s2"><a href="index.html"><span>Home</span></a></li>
     //             <li class="s2"><a href="#url"><span>Services</a>
     //               <ul class="p3 a3"> //<- a3 es el numero de hijos (3)
    //                  <li><a href="index.html">Printing</a></li>
    //                  <li><a href="index.html">Editing</a></li>
    //                  <li><a href="index.html">Storage</a></li>
    //                </ul>
    //              </li>
    var i;
    for (i = 0; i < Menus.length; i++) {
        var liItem = document.createElement('li');        
        liItem.className='s2';
        if ((Menus.length-1)===i) liItem.className='s2 b' + Menus.length;
        if (Menus[i].id && Menus[i].id.length>0) liItem.id = Menus[i].id || '';
        var aref = document.createElement('a');    
        aref.href = '#';
        var spanItem = document.createElement('span');
        if (Menus[i].claseTitulo && Menus[i].claseTitulo.length>0) spanItem.className = Menus[i].claseTitulo || '';
        spanItem.innerText = Menus[i].titulo || '';
        aref.appendChild(spanItem);
        liItem.appendChild(aref);
         
        if (Menus[i].hijos && Menus[i].hijos.length>0) {            
            var ul = document.createElement('ul');
            ul.className = 'p3 a' + Menus[i].hijos.length;
            var j;
            for (j = 0; j < Menus[i].hijos.length; j++) {
                var li = document.createElement('li');
                var arefItem = document.createElement('a');
                arefItem.href = Menus[i].hijos[j].href || '';
                var spanItem1 = document.createElement('span');
                if (Menus[i].hijos[j].titulo && Menus[i].hijos[j].titulo.length>0) spanItem1.innerText = Menus[i].hijos[j].titulo || '';
                if (Menus[i].hijos[j].clase && Menus[i].hijos[j].clase.length>0) spanItem1.className = Menus[i].hijos[j].clase || '';
                arefItem.appendChild(spanItem1);
                li.appendChild(arefItem);
                ul.appendChild(li);
            }
            liItem.appendChild(ul);
        }            
        document.getElementById('menu').appendChild(liItem);            
    }
}