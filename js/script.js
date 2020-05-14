var byline = document.getElementById('byline');     // Encontre o H2
bylineText = byline.innerHTML;                                      // Obtenha o conteúdo do H2
bylineArr = bylineText.split('');                                   // Dividir o conteúdo em matriz
byline.innerHTML = '';                                                      // Conteúdo atual vazio

var span;                   // Crie variáveis para criar elementos
var letter;

for(i=0;i<bylineArr.length;i++){                                    // Loop para cada letra
  span = document.createElement("span");                    // Crie um elemento <span>
  letter = document.createTextNode(bylineArr[i]);   // Crie a carta
  if(bylineArr[i] == ' ') {                                             // Se a letra é um espaço ...
    byline.appendChild(letter);                 // ...Adicione o espaço sem um espaço
  } else {
        span.appendChild(letter);                       // Adicione a letra ao intervalo
    byline.appendChild(span);                   // Adicione a extensão ao h2
  }
}