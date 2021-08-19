function Question1() {


    do{
    
    var resposta = prompt(`Por favor, Digite o NÚMERO da resposta desejada:
    Era uma vez a história de quatro homens: João, José, Jacinto e Joel. Os quatro eram construtores de barcos e em quatro dias conseguiam construir 
    quatro embarcações. 
    Quanto tempo demoraria um dos quatro homens para construir um único barco?
    1 - 4 dias
    2 - 1 dia
    3 - 3 dias
    ` )
    } while(resposta.length == 0)
    
        resposta = Number(resposta)
        
        if(typeof resposta == 'number') {
            // console.log(typeof resposta)
            if(resposta == 1) {
               var resposta = document.querySelector('#answer').innerText = 'Conseguimos, um já foi!!'
               var button = document.querySelector('.playButton').style.display = 'none'
                setTimeout(function() {
                    return  window.location.href = "grandesmoke2.html";
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


        do{
        
        var resposta = prompt(`Por favor, Digite o NÚMERO da resposta desejada:
        Num mesmo dia, uma mercadoria foi comprada por R$ 70,00, vendida por R$ 80,00,
        recomprada por R$ 90,00 e, finalmente, vendida por R$ 100,00. 
        No final dessa seqüência de compras e vendas, o dono dessa mercadoria:
        1 - Teve um lucro de 10 reais
        2 - Prejuizo de 10 reais
        3 - Prejuizo de 10 reais
        4 - Teve um lucro de 20 reais
        5 - Não teve lucro
        ` )
        } while(resposta.length == 0)
        
            resposta = Number(resposta)
            
            if(typeof resposta == 'number') {
                // console.log(typeof resposta)
                if(resposta == 4) {
                   var resposta = document.querySelector('#answer').innerText = 'Mais um!! Daaaammmm!!'
                   var button = document.querySelector('.playButton').style.display = 'none'
                    setTimeout(function() {
                        return  window.location.href = "grandesmoke3.html";
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

        function Question3() {


            do{
            
            var resposta = prompt(`Em uma igreja havia 4 velas. Entraram 2 ladrões e cada um levou uma vela. 
            Quantas velas ficaram?:
            1 - 1 Vela
            2 - 2 Velas
            3 - 4 Velas
            4 - 6 Velas
            ` )
            } while(resposta.length == 0)
            
            resposta = Number(resposta)
                        
            if(typeof resposta == 'number') {
                // console.log(typeof resposta)
                if(resposta == 1) {
                var resposta = document.querySelector('#answer').innerText = 'JA era, ele nos viu!! NAAAAAAO!!'
                    setTimeout(function() {
                        return  window.location.href = "luisegidioGAMEOVER.html";
                    }, 2000)
                
                }
                else if(resposta == 2) {
                    var resposta = document.querySelector('#answer').innerText = 'Como sao ladroes, podem muito bem ter levado embora as velas. Conseguimos!!!'
                    var button = document.querySelector('.playButton').style.display = 'none'
                    setTimeout(function() {
                        return  window.location.href = "luisegidioFIM.html";
                    }, 5000)
                
                }
                else if(resposta == 3) {
                    var resposta = document.querySelector('#answer').innerText = 'Parabens!! Estamos mortos'
                    var button = document.querySelector('.playButton').style.display = 'none'
                    setTimeout(function() {
                        return  window.location.href = "luisegidioGAMEOVER.html";
                    }, 2000)
                
                }
                else if (resposta == 4) {
                    var resposta = document.querySelector('#answer').innerText = 'O levarmos pode gerar ambiguidade, portanto ao levar podem ter levado duas velas para a igreja!! Conseguimos'
                    var button = document.querySelector('.playButton').style.display = 'none'
                    setTimeout(function() {
                        return  window.location.href = "luisegidioFIM.html";
                    }, 5000)
                
                }
    
            
            }
    
              
               
            }