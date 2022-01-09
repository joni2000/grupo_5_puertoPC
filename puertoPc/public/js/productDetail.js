let counter = 1
let $count = document.getElementById('count');

  function add () {
    if(counter <= 10) {
        counter = counter + 1
        $count.innerHTML = `<p>${counter}</p>`
    }
  }

  function subtract () {
    if(counter > 0) {
        counter = counter - 1
        $count.innerHTML = `<p>${counter}</p>`
    }
  }