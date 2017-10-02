(function(){ 
    //barra de navegacion (perfil + usuario)
    document.getElementById('UserTool').addEventListener("mouseover",function mouseover(){document.getElementById('ToolBar').style.display='block';});
    document.getElementById('UserTool').addEventListener("mouseout",function mouseover(){document.getElementById('ToolBar').style.display='none';});
    //salida de la aplicacion
    document.getElementById('CloseSesionTool').addEventListener("click",function logout(){location.href = window.location.origin + '/' + window.location.pathname.split("/")[1] + '/default.aspx?action=logout';});
    //el menu
    document.getElementById('menuOpen').addEventListener("click",function openMenu(){
        document.getElementById('menuOpen').style.display='none';
        document.getElementById('menuClose').style.display='block';
        document.getElementById('menu').classList.remove('menuHidden');        
        document.getElementById('menu').classList.add('menuVisible');
    });
    document.getElementById('menuClose').addEventListener("click",closeMenu);

    function closeMenu(){
        document.getElementById('menuOpen').style.display='block';
        document.getElementById('menuClose').style.display='none';
        document.getElementById('menu').classList.remove('menuVisible');
        document.getElementById('menu').classList.add('menuHidden');
    }

    var handleMediaChange = function (mql) {

        // For some reason Firefox has trouble always running this code.
        // The console.log seems to help it.
        // TODO: Figure out what the hell that's all about
        console.log();

        if (mql.matches && (mql.media==='screen and (max-width: 660px)')) {
            //si estaba abierto el menu, lo cierro
            closeMenu();
        }        
    };

    //https://bugs.chromium.org/p/chromium/issues/detail?id=49001
    //poner el chrome con --allow-file-access-from-files para probarlo en local
    mqEvents(handleMediaChange);

})();