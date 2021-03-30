
    let numbers = [];
function numberf(){


    for(let i=0;i<5;i++){
        let number = prompt('Please put a number')
        numbers.push(parseInt(number))
    }
    numbers.sort(function(a, b) {
        return a - b;
      });

    console.log(numbers)
    alert('The minimum number is '+ numbers[0] )
    alert('The maximum number is '+ numbers[numbers.length-1] )
}
numberf()