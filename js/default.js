(function(){
    //todo esto se debe cargar después de cargar los menus
    
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
    document.getElementById('CloseSesionTool').children[1].children[0].addEventListener("click",function logout(){location.href = window.location.origin + '/' + window.location.pathname.split("/")[1] + _logout;});
    //el menu
    function closeMenu(){        
        if (document.getElementById('menu').classList.contains('menuTransition')) document.getElementById('menu').classList.remove('menuTransition');
        if (!document.getElementById('iconoMenu').classList.contains('open')) return;
        document.getElementById('menuHamburger').classList.toggle('site-nav--open');
        document.getElementById('iconoMenu').classList.toggle('open');
        document.getElementById('menu').classList.remove('menuVisible');
        document.getElementById('menu').classList.add('menuHidden');
        EliminaRotacionMenu();
    }
    document.getElementById('iconoMenu').addEventListener("click",function openMenu(){ 
        document.getElementById('menuHamburger').classList.toggle('site-nav--open');
        document.getElementById('iconoMenu').classList.toggle('open');
        if (!document.getElementById('menu').classList.contains('menuTransition')) document.getElementById('menu').classList.add('menuTransition');
        if (document.getElementById('iconoMenu').classList.contains('open')) {
            document.getElementById('menu').classList.remove('menuHidden');        
            document.getElementById('menu').classList.add('menuVisible');
        }
        else {
            document.getElementById('menu').classList.remove('menuVisible');
            document.getElementById('menu').classList.add('menuHidden');
            EliminaRotacionMenu();
        }
    });

    var handleMediaChange = function (mql) {

        // For some reason Firefox has trouble always running this code.
        // The console.log seems to help it.
        // TODO: Figure out what the hell that's all about
        //console.log();        
        if (mql.matches) EliminaRotacionMenu();
        if (mql.matches && (mql.media==='screen and (max-width: 660px)' || mql.media==='screen and (max-width:660px)')) {
            //si estaba abierto el menu, lo cierro            
            closeMenu();            
        }        
    };

    //https://bugs.chromium.org/p/chromium/issues/detail?id=49001
    //poner el chrome con --allow-file-access-from-files para probarlo en local
    mqEvents(handleMediaChange);

    //icono del menu rodante, el bucle forEach no va en IE ni EDGE
    //https://stackoverflow.com/questions/27065659/why-does-foreach-not-work-in-an-iframe-in-ie11
    var itemsMenu = document.querySelectorAll('.item');
    var i;
    for (i = 0; i < itemsMenu.length; i++) {        
        itemsMenu[i].addEventListener("mouseover",function mouseovermenuitem(){  
            this.children[1].style.display = 'table';
            //si mide mas pixels que recogido-> return     
            if (this.offsetWidth!==52) {
                //miro si tiene el icono en el centro
                if (this.classList.contains('itemAlto') && !this.children[0].classList.contains('iconAlto')) this.children[0].classList.add('iconAlto');
                return;
            }    
            var _elem = this.children[0];    
            _elem.classList.add('rollable');
            if (this.classList.contains('itemAlto')) _elem.classList.add('iconAlto');        
            _elem.onCSSAnimationEnd(function()
            {
                _elem.classList.remove('rollable');
                _elem.removeEventListener("mouseover",mouseovermenuitem);                
            });
        });
        itemsMenu[i].addEventListener("mouseleave",function mouseoutmenuitem(){
            this.children[1].style.display = 'none';
            var _elem = this.children[0];
            _elem.classList.add('unrollable');        
            if (_elem.classList.contains('iconAlto')) _elem.classList.remove('iconAlto');
            _elem.onCSSAnimationEnd(function()
            {
                _elem.classList.remove('unrollable');                
            });
        });
    }

    //quitar la rotacion de los elementos menu
    function EliminaRotacionMenu() {
        var itemsMenu = document.querySelectorAll('.item');
        var i;
        for (i = 0; i < itemsMenu.length; i++) {
            if (itemsMenu[i].children[0].classList.contains('rollable')) itemsMenu[i].children[0].classList.remove('rollable');
            if (itemsMenu[i].children[0].classList.contains('unrollable')) itemsMenu[i].children[0].classList.remove('unrollable');
        }
    }

})();