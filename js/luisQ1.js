function Question1() {


do{

var resposta = prompt(`Por favor, Digite o NÚMERO da resposta desejada. Vazio não é a resposta:
Quem foi Arariboia?
1- Presidente da Bolivia.
2- Chefe da Tribo Temimó, localizada no norte do Brasil. 
3- Cacique badass que expulsou os vacilões dos franceses da baia de guanabara e fundou a cidade de niterói
` )
} while(resposta.length == 0)

    resposta = Number(resposta)
    
    if(typeof resposta == 'number') {
        // console.log(typeof resposta)
        if(resposta == 3) {
           var resposta = document.querySelector('#answer').innerText = 'Conseguimos, pegamos o dinheiro!!'
           var button = document.querySelector('.playButton').style.display = 'none'
            setTimeout(function() {
                return  window.location.href = "luisegidio2.html";
            }, 1000)
        
        }
        else {
            var resposta = document.querySelector('#answer').innerText = 'Oh nao, ja era!!'
            var button = document.querySelector('.playButton').style.display = 'none'
            setTimeout(function() {
                return  window.location.href = "luisegidioGAMEOVER.html";
            }, 1000)
        
        }

        var resposta = document.querySelector('#answer').innerText = 'Oh nao, ja era!!'
        var button = document.querySelector('.playButton').style.display = 'none'
       
    }
       
   
}

