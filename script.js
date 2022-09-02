function start(){
    var botaoCaucula=document.querySelector('#botao-caucular')
   botaoCaucula.addEventListener('click',handleButtonClick)

   var inputWeight=document.querySelector('#input-weight')
   var inputHeight=document.querySelector('#input-height')

   inputWeight.addEventListener('input', handleButtonClick)
   inputHeight.addEventListener('input',handleButtonClick)

   handleButtonClick();
;}

function calculaImc(weight, height){
    return weight/(height*height);
}

function handleButtonClick(){
var inputWeight=document.querySelector('#input-weight')
var inputHeight=document.querySelector('#input-height')
var imcResultado=document.querySelector('#imc-resultado')

var weight=Number (inputWeight.value);
var height=Number (inputHeight.value);

var imc=calculaImc(weight,height)
var formatacaoImc=imc.toFixed(2).replace('.',',');

imcResultado.textContent=formatacaoImc;
}

start()