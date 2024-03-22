const form=document.getElementById('form');

form.addEventListener('submit',handleSubmit);
const inputValue=document.getElementById('value-real');
const selectedCurrency=document.getElementById('currency');
const result=document.getElementById('result');
let valueConverted=0;

function handleSubmit(e){
    e.preventDefault();
    
    if(!inputValue.value || inputValue <0){
    alert(' Esse valor é invalido ');
    return
}  else if (!selectedCurrency.value){
    alert('Selecione uma moeda')
    return;
}
converter();
};

function converter(){
if( selectedCurrency.value=="eur"){
    valueConverted = inputValue.value/5,29;
    result.innerHTML =valueFormatter('pt-BR','EUR');
    animateResult();
}else if(selectedCurrency.value=="dol"){
    valueConverted = inputValue.value/4,87; 
    result.innerHTML= valueFormatter('en-US','USD');
    animateResult();
}
inputValue.value='';
selectedCurrency.value='';


};
function valueFormatter(locale,currency)
{
    const value = valueConverted.toLocaleString(`${locale}`,{style:'currency', currency: `${currency}`})
    return `<span>💰</span>${value}<span>💰</span>`

};
function animateResult(){
    return result.animate([
    {transform:'translatey(-150px)'},
    {transform:'translatey(0px)',}

    ], {duration:600 })
}