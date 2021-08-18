function Question2() {

do {

var resposta = prompt(`Por favor, Digite o NÚMERO da resposta desejada:
Qual o Estado foi o Distrito Federal durante 1960 a 1975 
1- Salvador.
2- Rio de Janeiro. 
3- Goias 
4- Guanabara
` )
} while(resposta.length == 0)

    resposta = Number(resposta)
    
    if(typeof resposta == 'number') {
        // console.log(typeof resposta)
        if(resposta == 4) {
           var resposta = document.querySelector('#answer').innerText = 'Eureka!! O Adailton liberou, suba na moto e vamos ao resgate do Mário'
           var button = document.querySelector('.playButton').style.display = 'none'
            setTimeout(function() {
                return  window.location.href = "luisegidio3.html";
            }, 2000)
        
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

