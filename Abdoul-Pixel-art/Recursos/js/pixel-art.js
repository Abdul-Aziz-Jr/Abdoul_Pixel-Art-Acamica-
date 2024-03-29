  var nombreColores = ['White', 'LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
    'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
    'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
    'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
    'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
    'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
    'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
    'LightGreen', 'PaleGreen', 'PaleTurquoise',
    'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
    'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
    'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
    'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
    'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
    'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
    'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
    'BlueViolet', 'DarkViolet', 'DarkOrchid',
    'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
  ];


  window.onload = function(){
    actualizarPaleta(nombreColores);
    crearGrilla();
    elegirColor();
  }

  var paleta = document.getElementById('paleta')

  var grilla_pixeles=document.getElementById('grilla-pixeles')


  var colorElegido;
  var nombreColorElegido;

  var indicadorColor = document.getElementById('indicador-de-color');

  var indicadorColorTexto = document.getElementById('indicador-de-color-mensaje');

  var colorPersonalizado = document.getElementById('color-personalizado');

  var mouseApretado = false;

  var botonGuardar = document.getElementById('guardar');

  var botonBorrar = document.getElementById('borrar');

  var batmanImg = document.getElementById('batman');
  var mujerMaravillaImg = document.getElementById('wonder');
  var flashImg = document.getElementById('flash');
  var invisibleImg = document.getElementById('invisible');




  function actualizarPaleta(lista) {
    for (var i = 0; i < lista.length; i++) {
      var el = document.createElement('div')
      el.style.backgroundColor = lista[i];
      el.className = 'color-paleta';
      paleta.appendChild(el);

    }
  }



  function crearGrilla(){
    for (var i = 0; i < 1750; i++) {
      var pix = document.createElement('div');
      pix.className='pixels';
      grilla_pixeles.appendChild(pix);
      }
  }



  function elegirColor(){
    var color = document.getElementById('paleta');
    color.addEventListener("click", tomarColor);

    function tomarColor(e){
      indicadorColor.style.backgroundColor = e.target.style.backgroundColor;
      colorElegido = e.target.style.backgroundColor;
      indicadorColorTexto.textContent="Pincel Color "+colorElegido;
    }
  }
  grilla_pixeles.addEventListener("click",pintarPixel)
  function pintarPixel(e){
      e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
    }





  colorPersonalizado.addEventListener('change', 
    (function() {
      // Se guarda el color de la rueda en colorActual
      colorActual = colorPersonalizado.value;
      // Completar para que cambie el indicador-de-color al colorActual
      indicadorColor.style.backgroundColor = colorActual;
      indicadorColorTexto.textContent = indicadorColor.style.backgroundColor;

    })
  );


                          grilla_pixeles.addEventListener("mousedown", apretar);
                          grilla_pixeles.addEventListener("mouseup", suelto);
                          grilla_pixeles.addEventListener("mouseover", mover);
                          function apretar(e){
                            mouseApretado=true;
                          }
                          function suelto(e){
                            mouseApretado=false;
                          }
                          function mover(e) {
                            if (mouseApretado) {
                              pintarPixel(e);

                              }
                            }





    
    botonGuardar.addEventListener("click", guardarPixelArt); 


            function CargarHeroe(superheroe){
              var grilla = document.querySelectorAll("#grilla-pixeles div" );
              for (var i = 0; i < grilla.length; i++) {
                grilla[i].style.backgroundColor = superheroe[i];
              }
            }
            batmanImg.addEventListener("click", function(){
              CargarHeroe(batman);
            })

            mujerMaravillaImg.addEventListener("click", function(){
              CargarHeroe(wonder);
            })

            flashImg.addEventListener("click", function(){
              CargarHeroe(flash);
            })

            invisibleImg.addEventListener("click", function(){
              CargarHeroe(invisible);
            })




                    function Borrar(){
                    var grilla = document.querySelectorAll("#grilla-pixeles div" );
                    for (var i = 0; i < grilla.length; i++) {
                      grilla[i].style.backgroundColor = 'white';
                    }
                  }
                  botonBorrar.addEventListener("click", function(){
                    Borrar();
                  })











