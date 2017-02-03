var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}
// GO!

// TASK 1 -- Show/Hide Nav

var answerBtnEl = document.querySelector('.push-btn')
answerBtnEl.addEventListener( 'click' , function(evt){
  // console.log(evt);

  var navText = document.querySelector('.nav-menu')
    console.log(navText.className)
 if(navText.className === 'nav-menu') {
   navText.className = 'nav-menu nav-menu-hidden';
 } else if (navText.className === 'nav-menu nav-menu-hidden'){
   navText.className = 'nav-menu';
 }

})

// TASK 2 -- Select an Icon

var answerSelected = document.querySelectorAll('.option')

  forEach(answerSelected, function(optionEl, index, theAray){
    optionEl.addEventListener('click', function(evt){

    if(optionEl.className === 'option' ) {
      optionEl.className = 'option selected'
    } else if (optionEl.className === 'option selected') {
      optionEl.className = 'option'
    }
    })
  })


// TASK 3 -- Move Item From List to List

var circleSelected = document.querySelectorAll('.point')

  forEach(circleSelected, function(btnEl, index, theArray){
    var totalPoints = document.querySelector('.total-points')

    btnEl.addEventListener('click', function(evt){
      var myVal = totalPoints.textContent
      // var newNumber = Number(myVal)
      // console.log(Number(myVal))
      var newNumber = Number(myVal) + Number(btnEl.textContent)

      console.log(btnEl.textContent)
      console.log(newNumber)
      totalPoints.textContent = newNumber
    })
  })
// TASK 4 -- Add Guest to List

var goodListEl = document.querySelectorAll('.good-standing-list li')
  var goodChild = ''
  forEach(goodListEl, function(liEl, index, theArray){
    liEl.addEventListener('click', function(evt){
      var goodParent = document.querySelector('.probation-list')
      // console.log(goodParent)
       goodParent.appendChild(liEl)
      // console.log(goodChild)
    })


  })

var badListEl = document.querySelectorAll('.probation-list li')
  var badChild = ''
  forEach(badListEl, function(liEl, index, theArray){
    liEl.addEventListener('click', function(evt){
      var badParent = document.querySelector('.good-standing-list')
      badParent.appendChild(liEl)
      
    })

  })
// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
