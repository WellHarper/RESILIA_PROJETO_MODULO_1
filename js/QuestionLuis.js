function Question1() {


    do{
    
    var resposta = prompt(`Por favor, Digite o NÚMERO da resposta desejada:
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
    
          
           
        }
           
      
       
    }
    
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
        
               
           
        }
        
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
                   
                
            }
            
            function Question4() {


                do {    
                
                var resposta = prompt(`Digite o NÚMERO da opção na qual será o seu plano de fuga:
                1 - Montar no Yoshi do quarto ao lado e fugir,
                2 - Pular em cima dos vilões, agarrar o mastro para pegarmos a bandeira e entrar no castelo seguro
                3-  Se sacrificar, servindo de isca enquanto Mario, Luigi e princesa fogem
                4 - Correr!!
                ` )
                } while (resposta.length == 0)
                  
                        resposta = Number(resposta)
                        
                        if(typeof resposta == 'number') {
                            // console.log(typeof resposta)
                            if(resposta == 1) {
                            var resposta = document.querySelector('#answer').innerText = 'Sua resposta foi bastante egoista e não condiz com o que viemos fazer, ao montar no yoshi você conseguiu fugir, mas Mário, Princesa, eu fomos mortos e você perdeu o jogo'
                            var button = document.querySelector('.playButton').style.display = 'none'
                                setTimeout(function() {
                                    return  window.location.href = "luisegidioGAMEOVER.html";
                                }, 6000)
                            
                            }
                            else if(resposta == 2) {
                                var resposta = document.querySelector('#answer').innerText = 'Exato!! Estamos no universo Mario e essa é a saida mais plausivel. Parabéns, salvamos o Mário e a Princesa!'
                                var button = document.querySelector('.playButton').style.display = 'none'
                                setTimeout(function() {
                                    return  window.location.href = "luisegidioFIM.html";
                                }, 3000)
                            
                            }
                            else if(resposta == 3) {
                                var resposta = document.querySelector('#answer').innerText = 'Sua escolha fez com que voce fosse morto, mas fez com que conseguissemos sair. A missão era resgatar o Mário e não voltar vivo. Lembre-se, nem sempre aquele que é derrotado perde!! Parabéns!'
                                var button = document.querySelector('.playButton').style.display = 'none'
                                setTimeout(function() {
                                    return  window.location.href = "luisegidioFIM.html";
                                }, 7000)
                            
                            }
                            else if (resposta == 4) {
                                var resposta = document.querySelector('#answer').innerText = 'Parabéns, Estamos mortos!!'
                                var button = document.querySelector('.playButton').style.display = 'none'
                                setTimeout(function() {
                                    return  window.location.href = "luisegidioGAMEOVER.html";
                                }, 1000)
                            
                            }
                
                        
                        }
                
                    
                        
                    }
                   
                
                
                