(function(){
    //barra de navegacion (perfil + usuario)    
    document.getElementById('UserTool').addEventListener("mouseover", function mouseoverut() {
        document.getElementById('ToolBar').children[0].classList.remove('ToolBarHidden');
        document.getElementById('ToolBar').children[0].classList.add('ToolBarVisible');
    });
    document.getElementById('UserTool').addEventListener("mouseleave", function mouseoouut() {
        document.getElementById('ToolBar').children[0].classList.remove('ToolBarVisible');
        document.getElementById('ToolBar').children[0].classList.add('ToolBarHidden');
    });
    //salida de la aplicacion
    //document.getElementById('CloseSesionTool').children[1].children[0].addEventListener("click",function logout(){location.href = window.location.origin + '/' + window.location.pathname.split("/")[1] + _logout;});
})();