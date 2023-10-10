<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>COSIDER Groupe® SMQ| Accueil</title>
  <link rel="shortcut icon" type="image/x-icon" href="img/icon/icon.ico" />
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <!-- Material Design Bootstrap -->
  <link href="css/mdb.min.css" rel="stylesheet">
  <!-- Your custom styles (optional) -->
  <link href="css/style.css" rel="stylesheet">

  <script src="js/assets/jquery/1.11.1/jquery-1.11.1.min.js"></script> 
  <link rel="stylesheet" type="text/css" href="css/round-menu.css">
  <link rel='stylesheet prefetch' href='https://fonts.googleapis.com/css?family=Roboto'>
</head>

<body class="overflow-hidden">

  <header class="header-cosider mb-3">
    <div class="roundy-round"></div>

              <a href="doc/management/politique qualité.pdf" target="_blank" id="btn-politique-principale" class="btn float-right badge badge-pill mr-5 mt-5 badge-politique">
                <span  class="badge badge-pill align-top ml-2 mt-3 badge-politique-mini" style="background-color: #CC0000; font-size: 13px;">Politique qualité</span>
                <?php /*include('img/svg/eco-friendly.svg')*/include('img/svg/automatic-lamp.svg'); ?>
              </a>
    
    <div class="icons">
      <a href="doc/NORME_ISO/norme-iso-9001-2015.pdf" target="_blank">
        <span class="menu-icon"><?php include('img/svg/logo-cosider2.svg'); ?></span>
        <span class="badge badge-pill  align-top mt-5" style="background-color: #DF162C;">NORME ISO 9001 Version 2015</span>
      </a>
      <h1 id="menu-title" class="h1-responsive menu-title roundy-menu-subtitle"><span class="typed-cursor"></span></h1>
    </div>
  </header>

  <div class="container-fluid" >
    <div class="row ">
      <div id="roundMenu" class="col-5 pt-3">
        <div class="row justify-content-center">
          <div id="roundMenuSvg" class="col-12">  
            <?php include("pages/menu/round-menu.php"); ?> 
          </div>
        </div>
      </div>

      <div id="sectionInfo" class="col-7 d-block">


      </div>

    </div>
  </div>

  <!-- SCRIPTS -->
  <!-- JQuery -->
  <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
  <!-- Bootstrap tooltips -->
  <script type="text/javascript" src="js/popper.min.js"></script>
  <!-- Bootstrap core JavaScript -->
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <!-- MDB core JavaScript -->
  <script type="text/javascript" src="js/mdb.js"></script>

  <script src="js/typed.min.js"></script>

  <script src='js/TweenMax.min.js'></script>

  <script type="text/javascript" src="js/round-menu2.js"></script>

  <script type="text/javascript">
    $(document).ready(function() {
    $("#sectionInfo").load("pages/management.php", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "error"){
      $("#sectionInfo").load("pages/404.php");
    }
      });
    $("#management").on('click',function(){
      $(".pointer").css('visibility','hidden');
      $(".service").removeClass( "active");
      $("#sectionInfo").load("pages/management.php", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "error"){
      $("#sectionInfo").load("pages/404.php");
    }
  });
    });

      });
  </script>

  <script type="text/javascript">

    $(document).ready(function(){

      var roundMenu = $('#roundMenu');
      var sectionInfo = $('#sectionInfo');
      var ouvre= $('#ouvre');

  var typedOptions = {
    strings: ["Système de Management de la Qualité."],
    typeSpeed: 70,
    loop: true,
    smartBackspace: true,
    backDelay: 5000
  }

  var typed = new Typed(".roundy-menu-subtitle span", typedOptions);

    });
  </script>

  <script type="text/javascript">
        function printTrigger(elementId) {
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var getMyFrame = document.getElementById(elementId);
  if (isFirefox) {
    var src=getMyFrame.getAttribute("src");
    window.open(src,"nom_de_la_fenetre","menubar=no, status=no, width=800px");
  }else{
    getMyFrame.focus();
    getMyFrame.contentWindow.print();
  }
  }
  </script>
</body>

</html>
