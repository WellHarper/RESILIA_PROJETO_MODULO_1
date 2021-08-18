function textWriter(element) {
    var textArray = element.innerHTML.split('')
    element.innerHTML = ''
    textArray.forEach(function(letra, indice) {
        setTimeout(function() {
            element.innerHTML += letra
        }, 40*indice)
    });

 

        
      
    
}

function show(element) {
    console.log(element)
    element.style.display = 'flex'
    
    }
    

var text = document.querySelector('#mainText')
// var card = document.querySelector('.cards')

textWriter(text)
//retorne o número de sorrisos válidos presentes em arr
// function contaSorrisos(arr) {
//   console.log(arr.length)

//   if(arr.length > 0) {
//     var i = 0
//     var newArr = []
//     var z = ''

//     while(i < arr.length) {

//      if(arr[i] === ':)')  {
//          newArr.push(arr[i])
//          i++
//      }
//     else if(arr[i] === ':D')  {
//         newArr.push(arr[i])
//         i++
//     }
//     else if(arr[i] === ';-D')  {
//         newArr.push(arr[i])
//         i++
//     }
//     else if(arr[i] === ':~)')  {
//         newArr.push(arr[i])
//         i++
//     }
//     else {
//         i++
//     }

//   }


//  return console.log(newArr)
  
// }
// return console.log('tá vazia')
// }
// contaSorrisos([':)', ';(', ';}', ':-D']); 
