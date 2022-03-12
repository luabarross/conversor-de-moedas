// inicio da conversão em dolar

function Converter() {
  var valorElemento = document.getElementById("valordolar");

  var valorDolar = valorElemento.value;

  var valorDolarNumerico = parseFloat(valorDolar);

  var valorEmReal = valorDolarNumerico * 5.22;

  var elementoValorConvertidoDolar = document.getElementById(
    "valorConvertidoDolar"
  );

  var valorConvertidoDolar =
    "O resultado em real é R$" + valorEmReal.toFixed(2).replace(".", ",");

  elementoValorConvertidoDolar.innerHTML = valorConvertidoDolar;
}

//final da converção em dolar

//inicio da conversão em euro

function ConverterEuro() {
  var valorElemento = document.getElementById("valoreuro");

  var valorEuro = valorElemento.value;

  var valorEuroNumerico = parseFloat(valorEuro);

  var valorEmReal = valorEuroNumerico * 5.68;

  var elementoValorConvertidoEuro = document.getElementById(
    "valorConvertidoEuro"
  );

  var valorConvertidoEuro =
    "O resultado em real é R$" + valorEmReal.toFixed(2).replace(".", ",");

  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
}

//final da converção em euro
