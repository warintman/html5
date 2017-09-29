(function(){ 
    //barra de navegacion (perfil + usuario)
    document.getElementById('UserTool').addEventListener("mouseover",function mouseover(){document.getElementById('ToolBar').style.display='block';});
    document.getElementById('UserTool').addEventListener("mouseout",function mouseover(){document.getElementById('ToolBar').style.display='none';});
    //salida de la aplicacion
    document.getElementById('CloseSesionTool').addEventListener("click",function logout(){location.href = window.location.origin + '/' + window.location.pathname.split("/")[1] + '/default.aspx?action=logout';});
})();