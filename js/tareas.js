(function(){

    var _Tareas = [];
    _Tareas = _Tareas.concat(GenerateTareasComunes(),GenerateTablasAuxiliares(),GenerateAdministracion());
    GenerateTareas(_Tareas);
    
    function GenerateTareas(_Tareas) {
        /** poner como hijos de idFlexMainContainer */
        /* generar este html por cada tarea 
        <h4 class="tituloTarea">Tareas Comunes</h4> <- TareaPadre
        <div class="grupoTareas" > 

            <div class="G5 lightSpeedIn" id="Div1"> <- Tarea/s
                <div class="G5-container">                
                    <div class="G5-image i_send_csv">
                        <div class="G5-texto">
                            <h5><a class="link" href="pages/Transaccion.aspx">Transacciones</a></h5>
                            Permite gestionar el alta, edición o borrado de las transacciones.
                        </div>
                    </div>
                </div>
                <div class="G5-buttons">             <- Enlace/s
                    <a id="NCarga" class="link" href="pages/NTransaccion.aspx">Nueva transacción</a>       
                    <a class="link" id="consulta" href="pages/Transaccion.aspx">Consulta de transacciones</a>
                </div> 
            </div>

        </div>
        */
        var i;
        for (i = 0; i < _Tareas.length; i++) {
            var h4TareaPadreItem = document.createElement('h4');
            h4TareaPadreItem.className = 'tituloTarea';
            if (_Tareas[i].id && _Tareas[i].id.length>0) h4TareaPadreItem.id = _Tareas[i].id;
            h4TareaPadreItem.innerText = _Tareas[i].titulo || '';
            document.getElementById('idFlexMainContainer').appendChild(h4TareaPadreItem);
            if (_Tareas[i].tareas && _Tareas[i].tareas.length>0) {
                var divGrupoTareas = document.createElement('div');
                divGrupoTareas.className = 'grupoTareas';
                var j;
                for (j = 0; j < _Tareas[i].tareas.length; j++) {
                    var divG5 = document.createElement('div');
                    divG5.className = 'G5 ' + _Tareas[i].tareas[j].claseAnimacion || '';
                    if (_Tareas[i].tareas[j].id && _Tareas[i].tareas[j].id.length>0) divG5.id = _Tareas[i].tareas[j].id;
                    var divG5c = document.createElement('div');
                    divG5c.className = 'G5-container';
                    var divIcono = document.createElement('div');
                    divIcono.className = 'G5-image ' + _Tareas[i].tareas[j].claseIcono || '';
                    var divG5txt = document.createElement('div');
                    divG5txt.className = 'G5-texto';
                    var h5 = document.createElement('h5');
                    if (_Tareas[i].tareas[j].href && _Tareas[i].tareas[j].href.length>0) {
                        var aTarea = document.createElement('a');
                        aTarea.href = _Tareas[i].tareas[j].href;
                        aTarea.className = 'link';
                        aTarea.innerHTML = _Tareas[i].tareas[j].tituloHTML || '';
                        h5.appendChild(aTarea);
                    }
                    else {
                        h5.innerHTML = _Tareas[i].tareas[j].tituloHTML || '';
                    }
                    divG5txt.appendChild(h5);
                    var spanTxt = document.createElement('span');
                    spanTxt.innerHTML = _Tareas[i].tareas[j].textoHTML || '';
                    divG5txt.appendChild(spanTxt);
                    divIcono.appendChild(divG5txt);
                    divG5c.appendChild(divIcono);
                    divG5.appendChild(divG5c);
                    if (_Tareas[i].tareas[j].enlaces && _Tareas[i].tareas[j].enlaces.length>0) {
                        var divEnlaces = document.createElement('div');
                        divEnlaces.className = 'G5-buttons';
                        var k;
                        for (k = 0; k < _Tareas[i].tareas[j].enlaces.length; k++) {
                            var aEnlace = document.createElement('a');
                            if (_Tareas[i].tareas[j].enlaces[k].id && _Tareas[i].tareas[j].enlaces[k].id.length>0) aEnlace.id = _Tareas[i].tareas[j].enlaces[k].id;
                            aEnlace.href = _Tareas[i].tareas[j].enlaces[k].href;
                            aEnlace.className = 'link';
                            aEnlace.innerHTML = _Tareas[i].tareas[j].enlaces[k].textoHTML || '';
                            divEnlaces.appendChild(aEnlace);
                        }
                        divG5.appendChild(divEnlaces);
                    }
                    divGrupoTareas.appendChild(divG5);
                }                
                document.getElementById('idFlexMainContainer').appendChild(divGrupoTareas);
            }
        }
    }
        /* TareaPadre {"id": "", "titulo": "", "tareas": []} */
        /* Tarea {"id": "", "claseAnimacion": "", "claseIcono": "", "tituloHTML": "", "href": "", "textoHTML": "", "enlaces": []} */
        /* Enlace {"id": "", "href": "", "textoHTML": ""} */
    function GenerateAdministracion() {
        var Administracion = {"id": "AdminUsers", "titulo": "Administración", "tareas": []};
        var AdministracionTarea = {"id": "TaskUsers", "claseAnimacion": "lightSpeedIn", "claseIcono": "i_users", "tituloHTML": "Gestión de usuarios", "href": "Regeus.UAdmin.aspx", "textoHTML": "Permite a los <b>administradores</b> la gestión de usuarios.", "enlaces": []};
        var EnlaceTarea = {"id": "", "href": "Regeus.UAdmin.aspx", "textoHTML": "Ir a la página"};

        AdministracionTarea.enlaces.push(EnlaceTarea);
        Administracion.tareas.push(AdministracionTarea);

        return Administracion;
    }

    function GenerateTareasComunes() {
        var Comunes = {"id": "", "titulo": "Tareas comunes", "tareas": []};

        var TransaccionesTarea = {"id": "Transaccion", "claseAnimacion": "lightSpeedIn", "claseIcono": "i_send_csv", "tituloHTML": "Transacciones", "href": "pages/Transaccion.aspx", "textoHTML": "Permite gestionar el alta, edición o borrado de las transacciones.", "enlaces": []};
        var TransaccionesEnlaceNuevo = {"id": "NCarga", "href": "pages/NTransaccion.aspx", "textoHTML": "Nueva transacción"};
        var TransaccionesEnlaceConsulta = {"id": "TransaccionConsulta", "href": "pages/Transaccion.aspx", "textoHTML": "Consulta de transacciones"};
        TransaccionesTarea.enlaces.push(TransaccionesEnlaceNuevo);
        TransaccionesTarea.enlaces.push(TransaccionesEnlaceConsulta);
        Comunes.tareas.push(TransaccionesTarea);

        var CSVTarea = {"id": "TaskCSV", "claseAnimacion": "lightSpeedIn", "claseIcono": "i_send_csv", "tituloHTML": "Carga de datos", "href": "pages/Data/list.aspx", "textoHTML": "Permite realizar la carga y/o modificación masiva de los datos de las transacciones por medio de archivos de texto (<b>.csv</b>).", "enlaces": []};        
        var CSVEnlaceNuevo = {"id": "", "href": "pages/Data/Send.aspx", "textoHTML": "Nueva carga"};
        var CSVEnlaceConsulta = {"id": "CSVconsulta", "href": "pages/Data/list.aspx", "textoHTML": "Consulta de cargas"};
        CSVTarea.enlaces.push(CSVEnlaceNuevo);
        CSVTarea.enlaces.push(CSVEnlaceConsulta);
        Comunes.tareas.push(CSVTarea);

        var DocumentosTarea = {"id": "TaskHelp", "claseAnimacion": "lightSpeedIn", "claseIcono": "i_docs", "tituloHTML": "Descarga de documentos", "href": "pages/Documentacion.aspx", "textoHTML": "Manuales del funcionamiento de la aplicación y documentos, archivos y guías útiles para la carga masiva de datos.", "enlaces": []};
        var DocumentosEnlace = {"id": "", "href": "pages/Documentacion.aspx", "textoHTML": "Ir a la página"};
        DocumentosTarea.enlaces.push(DocumentosEnlace);        
        Comunes.tareas.push(DocumentosTarea);

        return Comunes;
    }

    function GenerateTablasAuxiliares() {
        var Auxiliares = {"id": "groupAuxiliares", "titulo": "Tablas auxiliares", "tareas": []};
        var UnidadesTarea = {"id": "TaskUnidades", "claseAnimacion": "lightSpeedIn", "claseIcono": "i_tables", "tituloHTML": "Tipos de unidades", "href": "pages/Unidad.aspx", "textoHTML": "Permite gestionar el alta, edición o borrado de los tipos de unidades.", "enlaces": []};
        var UnidadesEnlace = {"id": "", "href": "pages/Unidad.aspx", "textoHTML": "Ir a la página"};
        UnidadesTarea.enlaces.push(UnidadesEnlace);
        Auxiliares.tareas.push(UnidadesTarea);

        var RepresentantesTarea = {"id": "TaskRepreROPO", "claseAnimacion": "lightSpeedIn", "claseIcono": "i_tables", "tituloHTML": "Representantes de entidades ROPO", "href": "pages/RepreROPO.aspx", "textoHTML": "Permite gestionar el alta, edición o borrado de los representantes de entidades ROPO que tendrán acceso a la aplicación.", "enlaces": []};        
        var RepresentantesEnlace = {"id": "", "href": "pages/RepreROPO.aspx", "textoHTML": "Ir a la página"};
        RepresentantesTarea.enlaces.push(RepresentantesEnlace);
        Auxiliares.tareas.push(RepresentantesTarea);

        return Auxiliares;
    }

})();