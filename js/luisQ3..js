function Question3() {

do {
var resposta = prompt(`Por favor, Digite o NÚMERO da resposta desejada:
Qual era o verdadeiro nome de Dom Pedro II?
1 - Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga de Bragança e Bourbon
2 - Pedro de Alcântara Carlos Leopoldo João Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Rafael Gonzaga de Bragança e Bourbon
3 - Pedro de Alcântara Carlos Leopoldo João Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Rafael Luis Gonzaga de Bragança e Bourbon
4 - Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga de Bourbon e Bragança
` )
} while(resposta.length == 0)
    resposta = Number(resposta)
    
    if(typeof resposta == 'number') {
        // console.log(typeof resposta)
        if(resposta == 1) {
           var resposta = document.querySelector('#answer').innerText = 'ELES NÃO ESTÃO OLHANDO, VAMOS!! EBA CONSEGUIMOS'
           var button = document.querySelector('.playButton').style.display = 'none'
            setTimeout(function() {
                return  window.location.href = "luisegidio4.html";
            }, 1000)
        
        }
        else {
            var resposta = document.querySelector('#answer').innerText = 'Oh nao, ja era!!'
            var button = document.querySelector('.playButton').style.display = 'none'
            setTimeout(function() {
                return  window.location.href = "luisegidioGAMEOVER.html";
            }, 1000)
        
        }

       
    }
       
   console.log(hmm)
}

