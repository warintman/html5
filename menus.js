(function(){
    //titulos y perfil
    document.title = "RETO";
    document.getElementById('titulo').innerText = 'RETO';
    document.getElementById('subtitulo').innerText = 'Registro Electrónico de Transacciones y Operaciones';
    document.getElementById('footerTexto').innerText = 'Ministerio de Agricultura y Pesca, Alimentación y Medio Ambiente';
    document.getElementById('perfil').innerText = 'Perfil: Administrador';
    document.getElementById('usuario').innerText = 'Usuario: 11111111H Admin Admini Admino';
    //menus
    var _Menus = [];
    _Menus.push(GenerateInicio());
    _Menus = _Menus.concat(GenerateMenusIntemedios(),GeneratePerfilClose());
    GenerateMenu(_Menus);

    function GenerateInicio() {
        //Padre { "tituloPadre": "", "id": "", "claseIcono": "", "claseAnimacion": "", "claseAncho": "", "claseAlto": "", "hijos": []};
        var MenuInicio = { "titulo": "Inicio", "id": "", "claseIcono": "icon_home", "claseAnimacion": "", "claseAncho": "", "claseAlto": "itemAlto", "hijos": []};
        //Hijos { "titulo": "", "href": "", "clase": ""};
        var HijoInicio = { "titulo": "Inicio", "href": "", "clase": ""};
        var HijoDocumentacion = { "titulo": "Documentación", "href": "", "clase": ""};

        MenuInicio.hijos.push(HijoInicio, HijoDocumentacion);
        return MenuInicio;
    }

    function GeneratePerfilClose() {
        var MenuAdministracion = { "titulo": "Administración", "id": "", "claseIcono": "icon_admin", "claseAnimacion": "", "claseAncho": "", "claseAlto": "itemAlto", "hijos": []};
        var HijoUsuarios = { "titulo": "Usuarios", "href": "", "clase": ""};
        var HijoEstadisticas = { "titulo": "Estadísticas de acceso", "href": "", "clase": ""};
        MenuAdministracion.hijos.push(HijoUsuarios, HijoEstadisticas);
        var MenuPerfil = { "titulo": "Perfil de Usuario", "id": "UserTool", "claseIcono": "icon_user", "claseAnimacion": "", "claseAncho": "", "claseAlto": "", "hijos": []};
        var MenuClose = { "titulo": "Cerrar Sesión", "id": "CloseSesionTool", "claseIcono": "icon_logout", "claseAnimacion": "pulse cajaClose", "claseAncho": "", "claseAlto": "", "hijos": []};
        var _menu = [];
        _menu.push(MenuAdministracion, MenuPerfil, MenuClose);
        return _menu;
    }

    function GenerateMenusIntemedios() {
        var _menu = [];

        var MenuTransaccion = { "titulo": "Transacciones", "id": "", "claseIcono": "icon_transaccion", "claseAnimacion": "", "claseAncho": "", "claseAlto": "itemAlto", "hijos": []};
        var HijoTransaccion1 = { "titulo": "Nueva transacción", "href": "", "clase": ""};
        var HijoTransaccion2 = { "titulo": "Consulta de transacciones", "href": "", "clase": ""};
        MenuTransaccion.hijos.push(HijoTransaccion1, HijoTransaccion2);
        var MenuCSV = { "titulo": "Carga de Datos", "id": "", "claseIcono": "icon_carga", "claseAnimacion": "", "claseAncho": "", "claseAlto": "itemAlto", "hijos": []};
        var HijoCSV1 = { "titulo": "Nueva carga", "href": "", "clase": ""};
        var HijoCSV2 = { "titulo": "Consulta de cargas", "href": "", "clase": ""};
        MenuCSV.hijos.push(HijoCSV1, HijoCSV2);
        var MenuAux = { "titulo": "Tablas Auxiliares", "id": "", "claseIcono": "icon_tablasAux", "claseAnimacion": "", "claseAncho": "", "claseAlto": "itemAlto", "hijos": []};
        var HijoAux1 = { "titulo": "Tipos de unidades", "href": "", "clase": ""};
        var HijoAux2 = { "titulo": "Representantes de entidades ROPO", "href": "", "clase": ""};
        var HijoAux3 = { "titulo": "Entidades de baja con usuarios activos", "href": "", "clase": ""};
        MenuAux.hijos.push(HijoAux1, HijoAux2, HijoAux3);
        _menu.push(MenuTransaccion, MenuCSV, MenuAux);
        return _menu;
    }

    function GenerateMenu(Menus) {
        //generar esto como hijos de menu
        //<div class="item itemAlto" id="">
        //    <a class="linkIcon icon_home"></a>
        //    <div class="item_content">
        //        <h2 class="pulse">Inicio</h2>
        //        <p><a href="">Inicio</a></p>
        //        <p><a href="">Documentación</a></p>
        //    </div>
        //</div>
        var i;
        for (i = 0; i < Menus.length; i++) {
            var divMenuItem = document.createElement('div');
            divMenuItem.className = 'item ' + Menus[i].claseAlto || '' + ' ' + Menus[i].claseAncho || '';
            if (Menus[i].id && Menus[i].id.length>0) divMenuItem.id = Menus[i].id || '';
            var icono = document.createElement('a');
            icono.className = 'linkIcon ' + Menus[i].claseIcono || '';
            var divItemcontent = document.createElement('div');
            divItemcontent.className='item_content';
            var h2Titulo = document.createElement('h2');
            if (Menus[i].claseAnimacion && Menus[i].claseAnimacion.length>0) h2Titulo.className = Menus[i].claseAnimacion || '';
            h2Titulo.innerText = Menus[i].titulo || '';
            divItemcontent.appendChild(h2Titulo);
            if (Menus[i].hijos && Menus[i].hijos.length>0) {
                var j;
                for (j = 0; j < Menus[i].hijos.length; j++) {
                    var pItem = document.createElement('p');
                    var aItem = document.createElement('a');
                    aItem.href = Menus[i].hijos[j].href || '';
                    if (Menus[i].hijos[j].titulo && Menus[i].hijos[j].titulo.length>0) aItem.innerText = Menus[i].hijos[j].titulo || '';
                    if (Menus[i].hijos[j].clase && Menus[i].hijos[j].clase.length>0) aItem.className = Menus[i].hijos[j].clase || '';
                    pItem.appendChild(aItem);
                    divItemcontent.appendChild(pItem);
                }
            }
            divMenuItem.appendChild(icono);
            divMenuItem.appendChild(divItemcontent);
            document.getElementById('menu').appendChild(divMenuItem);
        }
    }

})();