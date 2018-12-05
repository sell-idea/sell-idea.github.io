$(document).ready( function(){
var priceDomen=0;
var priceHost=0;
var priceAdmin=0;
var priceSite=0;
var sum=0;


var typeDomen={
  "sell-idea.ru - 1008 руб.":1008,
  "sell-idea.com - 82 руб.":82,
  "sell-idea.org - 550 руб.":550,
  "sell-idea.club - 80 руб.":80,
  "sell-idea.info - 1488 руб.":1488,
  "sell-idea.tk - бесплатно":0};

var typeHost={
  "Простой хостинг - 2000 руб.":2000,
  "Премиум хостинг - 3500 руб.":3500,
  "Бизнес хостинг - 10500 руб.":10500};

  var typeAdmin={
    "Базовое обслуживание - 5000 руб.":5000,
    "Техническое обслуживание - 8000 руб.":8000,
    "Премиум обслуживание - 10500 руб.":10500};


  var typeSite={
    "Реклама в соц.сетях - 1000 руб.":1000,
    "Реклама на youtube - 5000 руб.":5000,
    "Реклама на телевидиние - 1500 руб.":1500};



  console.log (typeHost["Простой хостинг"]);

insertDomen();
insertHost();
insertAdmin();
insertSite();
/*******************************************************/
 function insertDomen(){
   var html="";
   for(type in typeDomen){
     html+="<option value='"+type+"'>"+type+"</option>";
   }
   $('#domen').append(html);

}
/*******************************************************/
  function insertHost(){
    var html="";
    for(type in typeHost){
      html+="<option value='"+type+"'>"+type+"</option>";
    }
    $('#host').append(html);

console.log (typeHost["Простой хостинг"]);
  }
   /*******************************************************/
function insertAdmin(){
  var html="";
  for(type in typeAdmin){
    html+="<option value='"+type+"'>"+type+"</option>";
  }
  $('#admin').append(html);


}
/*******************************************************/

function insertSite(){
  var html="";
  for(type in typeSite){
    html+="<option value='"+type+"'>"+type+"</option>";
  }
  $('#site').append(html);


}

/*******************************************************/

function suma(){

  var  Domen=$("#domen").val();
  if(Domen!="-")
    priceDomen=typeDomen[Domen];
  var Host=$("#host").val();
    if(Host!="-")
    priceHost=typeHost[Host];
  var  Admin=$("#admin").val();
    if(Admin!="-")
    priceAdmin=typeAdmin[Admin];
  var Site=$("#site").val();
    if(Site!="-")
    priceSite=typeSite[Site];
 sum=priceDomen+priceHost+priceAdmin+priceSite;
 console.log (sum);

  $('.price span').text(sum);
}
/*****************************************************/
$('#site').change(function(){

  suma();
});
 /**************************************************/
$('#host').change(function(){

  suma();
});
/**************************************************/
$('#admin').change(function(){

  suma();
});
 /**************************************************/
$('#domen').change(function(){

  suma();
});
// // /***************************************/
});
