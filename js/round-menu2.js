"use strict";

var center = { x: 325, y: 319 }; //{ x: 325, y: 310 }; //{ x: 325, y: 175 };
var serv_dist = 250;//250;
var pointer_dist = 172;
var pointer_time = 2;
var icon_size = 42;
var circle_radius = 38;
var text_top_margin = 18;
var tspan_delta = 16;

//name is used as the title for the bubble
//icon is the id of the corresponding svg symbol
var services_data = [{ name: "G.RHF", icon: "resHumaines" }, { name: "Mng-Matériel", icon: "renovMateriel" }, { name: "HSE", icon: "hygSecurite" }, { name: "G.SI", icon: "sysInformation" }, { name: "Finances", icon: "finance" }, { name: "AUDIT", icon: "audit" }, { name: "C.Gestion", icon: "controlGest" }];

var services = document.getElementById("service-collection");
var nav_container = document.getElementById("circle-nav-services");
var symbol_copy = document.getElementById("circle-nav-copy");
var use_copy = document.querySelector("use.nav-copy");

//Keeps code DRY avoiding namespace for element creation
function createSVGElement(el) {
  return document.createElementNS("http://www.w3.org/2000/svg", el);
}

//Quick setup for multiple attributes
function setAttributes(el, options) {
  Object.keys(options).forEach(function (attr) {
    el.setAttribute(attr, options[attr]);
  });
}

//Service bubbles are created dynamically
function addService(serv, index) {
  var group = createSVGElement("g");
  group.setAttribute("class", "service serv-" + index);

  /* This group is needed to apply animations in
    the icon and its background at the same time */
  var icon_group = createSVGElement("g");
  icon_group.setAttribute("class", "icon-wrapper");

  var circle = createSVGElement("circle");
  setAttributes(circle, {
    r: circle_radius,
    cx: center.x,
    cy: center.y
  });
  var circle_shadow = circle.cloneNode();
  setAttributes(circle, {
    class: 'shadow'
  });
  icon_group.appendChild(circle_shadow);
  icon_group.appendChild(circle);

  var symbol = createSVGElement("use");
  setAttributes(symbol, {
    'x': center.x - icon_size / 2,
    'y': center.y - icon_size / 2,
    'width': icon_size,
    'height': icon_size
  });
  symbol.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + serv.icon);
  icon_group.appendChild(symbol);

  group.appendChild(icon_group);

  var text = createSVGElement("text");
  setAttributes(text, {
    x: center.x,
    y: center.y + circle_radius + text_top_margin
  });

  var tspan = createSVGElement("tspan");
  if (serv.name.indexOf('\n') >= 0) {

    var tspan2 = tspan.cloneNode();
    var name = serv.name.split('\n');
    jQuery(tspan).text(name[0]);
    jQuery(tspan2).text(name[1]);

    setAttributes(tspan2, {
      x: center.x,
      dy: tspan_delta
    });

    text.appendChild(tspan);
    text.appendChild(tspan2);
  } else {
    jQuery(tspan).text(serv.name);
    text.appendChild(tspan);
  }

  group.appendChild(text);
  services.appendChild(group);

  var service_bubble = jQuery(".serv-" + index);

  //Uses tween to look for right position
  twn_pivot_path.seek(index);
  TweenLite.set(service_bubble, {
    x: pivot_path.x,
    y: pivot_path.y,
    transformOrigin: "center center"
  });

  service_bubble.click(serviceClick);        
}

//Creates pointer
function createPointer() {
  var service_pointer = createSVGElement("circle");

  setAttributes(service_pointer, {
    cx: center.x - pointer_dist,
    cy: center.y,
    r: 12,
    class: "pointer"
  });

  nav_container.appendChild(service_pointer);

  service_pointer = document.querySelector("svg .pointer");

  var pointer_circle = [{ x: 0, y: 0 }, { x: pointer_dist, y: pointer_dist }, { x: pointer_dist * 2, y: 0 }, { x: pointer_dist, y: -pointer_dist }, { x: 0, y: 0 }];

  twn_pointer_path.to(service_pointer, pointer_time, {
    bezier: {
      values: pointer_circle,
      curviness: 1.5 },
    ease: Power0.easeNone,
    transformOrigin: "center center"
  });
}

//Defines behavior for service bubbles
function serviceClick(ev) {
  // afficher le pointer
  $(".pointer").css('visibility','visible');
  //There's always an active service
  jQuery(".service.active").removeClass("active");

  var current = jQuery(ev.currentTarget);
  current.addClass("active");

            // include des pages  avec les cercle de service
  var idAttr = current.attr('class');
    //alert (idAttr);
  if (idAttr == 'service serv-0 active') {
    $("#sectionInfo").load("pages/grh.php", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "error"){
      $("#sectionInfo").load("pages/404.php");
    }
  });
  }else if (idAttr == 'service serv-1 active') {
    $("#sectionInfo").load("pages/pat.php", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "error"){
      $("#sectionInfo").load("pages/404.php");
    }
  });
    }else if (idAttr == 'service serv-2 active') {
    $("#sectionInfo").load("pages/hse.php", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "error"){
      $("#sectionInfo").load("pages/404.php");
    }
  });
    }else if (idAttr == 'service serv-3 active') {
    $("#sectionInfo").load("pages/gsi.php", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "error"){
      $("#sectionInfo").load("pages/404.php");
    }
  });
    }else if (idAttr == 'service serv-4 active') {
    $("#sectionInfo").load("pages/fin.php", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "error"){
      $("#sectionInfo").load("pages/404.php");
    }
  });
    }else if (idAttr == 'service serv-5 active') {
    $("#sectionInfo").load("pages/dai.php", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "error"){
      $("#sectionInfo").load("pages/404.php");
    }
  });
    }else if (idAttr == 'service serv-6 active') {
    $("#sectionInfo").load("pages/cgest.php", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "error"){
      $("#sectionInfo").load("pages/404.php");
    }
  });
    }else{
      $("#sectionInfo").load("pages/management.php", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "error"){
      $("#sectionInfo").load("pages/404.php");
    }
  });
    }


  //There's a "serv-*" class for each bubble
  var current_class = current.attr("class").split(" ")[1];
  var class_index = current_class.split('-')[1];


  //Sets pointer to the right position
  twn_pointer_path.tweenTo(class_index * (pointer_time / (2 * 3.5/*6*/)));
}

//Array describes points for a whole circle in order to get
//the right curve
var half_circle = [{ x: -serv_dist, y: 0 }, { x: 0, y: serv_dist }, { x: serv_dist, y: 0 }, { x: 0, y: -serv_dist }, { x: -serv_dist, y: 0 }];

//A simple object is used in the tween to retrieve its values
var pivot_path = { x: half_circle[0].x, y: half_circle[0].y };

//The object is animated with a duration based on how many bubbles
//should be placed
var twn_pivot_path = TweenMax.to(pivot_path, 7/*12*/, {
  bezier: {
    values: half_circle,
    curviness: 1.5
  },
  ease: Linear.easeNone
});

services_data.reduce(function (count, serv) {
  addService(serv, count);
  return ++count;
}, 0);

//The variable is modified inside the function
//but its also used later to toggle its class
var twn_pointer_path = new TimelineMax({ paused: true });
createPointer();

