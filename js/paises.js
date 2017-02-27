$(document).ready(init);

function init()
{
    var listaPaises = $("#lista-country");
    var pais = $.parseJSON(paises);
    
    $.each(pais,function(){
    
    var html='<a href="signup.html"> <li><img class="imagen"  src="'+this['imagen']+'" alt="">'+this['nombre']+'<span class="codigo">'+this['phone_code']+'</span></li></a>';
    
        listaPaises.append(html);
        asignaEventoClick();
});
}
function asignaEventoClick(){
    var lista=$('li');
    $.each(lista,function(){
        $(this).on('click',onClickList)
    }); 
}
function onClickList(evt)
{
    var srcImg=$(evt.currentTarget).find('.imagen').attr('src');
    var code=$(evt.currentTarget).find('.codigo').text();
        
        
    localStorage.setItem('src',srcImg);
     localStorage.setItem('codigo',code);
    
}


/*

function init(){
    createList();
    var listaPaises = $("#li");
    
    for(var i=0; i<listaPaises.length; i++){
        listaPaises[i].click(onCountryClick);
    }
    
}

function createList() {
    var elListCountries = $("#list-countries");
    for(var i in paises){
        var listHtml= 
            '<li id="' + i + '">'+
                '<img class="img-size" src="'+ paises[i].imageURL +'" alt=""><p class="country-name">'+ paises[i].nombre +'</p> <span><strong>+'+ paises[i].phone_code +'</strong></span>'+
            '<hr></li>';
        elListCountries.append(listHtml);
    }
}
/*function init(){
    createList();
    var listaPaises = document.getElementsByTagName("li");
    //var listaPaises = $('li');
     
    for(var i=0; i<listaPaises.length; i++){
        listaPaises[i].addEventListener("click",onCountryClick);
    }
    
}

function createList() {
    var elListCountries = document.getElementById("list-countries");
    for(var i in paises){
        var listHtml= 
            '<li id="' + i + '">'+
                '<img class="img-size" src="'+ paises[i].imageURL +'" alt=""><p class="country-name">'+ paises[i].nombre +'</p> <span><strong>+'+ paises[i].phone_code +'</strong></span>'+
            '<hr></li>';
        elListCountries.innerHTML += listHtml;
    }
}

function onCountryClick(evt) {
     var imgSrc=evt.currentTarget.getElementsByClassName("imagen")[0].src;
    //console.log(imgSrc);
    var codigo=evt.currentTarget.getElementsByClassName("codigo")[0].textContent;
    localStorage.setItem('srcimg',imgSrc);
    localStorage.setItem('code',codigo);
}


//BUSCADOR
var search = $("#search");
var ulListCountries = $("#list-countries");

var contacto = ulListCountries.getElementsByClassName("country-name");
var forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(e){
   var choice = this.value;
 
   forEach.call(contacto, function(f){
       
       if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
           f.parentNode.style.display = "none";   
       else
          f.parentNode.style.display = "block";        
   });
}, 
false);*/
