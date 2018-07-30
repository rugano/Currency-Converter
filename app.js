function convertCurrency(){
 let from            =   document.getElementsByClassName("currencies_1")[0].value;
 let to              =   document.getElementsByClassName("currencies_2")[0].value;
 let fromAmount      =   document.getElementById("fromAmount").value;
 let toAmount        =   document.getElementById("toAmount");
 
 fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=ultra`).then(function(response) {
    return response.json();
    }).then(function(rates) {
       for(let rate in rates){
       	console.log(rates[rate]); 
         let calc = rates[rate]; 
         let total = (calc * fromAmount); 
         console.log(total);
         toAmount.value = total;
       }
    });
}