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
   


