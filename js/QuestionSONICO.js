function Question1() {


    do{
    
    var resposta = prompt(`DIGITE QUAL NUMERO CORRESPONDE A MUSICA CORRETA!!
    Deus é um cara gozador, adora brincadeira
    Pois pra me jogar no mundo, tinha o mundo inteiro
    Mas achou muito engraçado me botar cabreiro
    Na barriga da miséria, nasci brasileiro
    Eu sou do Rio de Janeiro

    1- Rio 40 Graus.
    2- Partido Alto. 
    3- Rio, eu te amo
    ` )
    } while(resposta.length == 0)
    
        resposta = Number(resposta)
        
        if(typeof resposta == 'number') {
            // console.log(typeof resposta)
            if(resposta == 2) {
               var resposta = document.querySelector('#answer').innerText = 'ACERTOU!! CONSEGUIMOS'
               var button = document.querySelector('.playButton').style.display = 'none'
                setTimeout(function() {
                    return  window.location.href = "sonico2.html";
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
           
      
       
    }
    
    function Question2() {

        do {
        
        var resposta = prompt(` DIGITE O NUMERO DA PALAVRA CORRETA!!
        Meia-noite, no meu quarto, ela vai subir
        Ouço passos na escada, vejo a porta abrir
        Um abajur cor de ... um lençol azul
        Cortinas de seda, o seu corpo nu
        1 - Carne
        2 - Carter
        3 - Carmen
        4 - Carmim 
        ` )
        } while(resposta.length == 0)
        
            resposta = Number(resposta)
            
            if(typeof resposta == 'number') {
                // console.log(typeof resposta)
                if(resposta == 4) {
                   var resposta = document.querySelector('#answer').innerText = 'ESSA CONFUNDE MUITA GENTE, MAS ACERTAMOS!! PASSEI'
                   var button = document.querySelector('.playButton').style.display = 'none'
                    setTimeout(function() {
                        return  window.location.href = "sonico3.html";
                    }, 2000)
                
                }
                else if (resposta == 1) {
                    var resposta = document.querySelector('#answer').innerText = 'NAO!! ESSA CONFUNDE MUITA GENTE, PERDEMOS!!'
                    var button = document.querySelector('.playButton').style.display = 'none'
                     setTimeout(function() {
                         return  window.location.href = "sonico3.html";
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
        
               
           
        }
        
        function Question3() {

            do {
            var resposta = prompt(`DIGITE O NUMERO DE QUEM COMPOS A MUSICA MALANDRAGEM DE CASSIA ELLER!!
            1 - CASSIA ELLER
            2 - CAZUZA E FREJAT
            3 - NANDO REIS
            ` )
            } while(resposta.length == 0)
                resposta = Number(resposta)
                
                if(typeof resposta == 'number') {
                    // console.log(typeof resposta)
                    if(resposta == 2) {
                       var resposta = document.querySelector('#answer').innerText = 'SIM!! CAZUZA E FREJAT!! O POETA ESTA VIVO!! VIVA CAZUZA!! VIVA FREJAT'
                       var button = document.querySelector('.playButton').style.display = 'none'
                        setTimeout(function() {
                            return  window.location.href = "luisegidio4.html";
                        }, 4000)
                    
                    }
                    else {
                        var resposta = document.querySelector('#answer').innerText = 'INFELIZMENTE NAO FOI, PERDEMOS!! OUCA MPB!! VALORIZE SUA CULTURA'
                        var button = document.querySelector('.playButton').style.display = 'none'
                        setTimeout(function() {
                            return  window.location.href = "luisegidioGAMEOVER.html";
                        }, 4000)
                    
                    }
            
                   
                }
                   
                
            }
            
            
                    
                   
                
                
                