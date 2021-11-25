var getInputValue = document.getElementById('inputValue');
var returnResult = document.getElementById('currentResult');
var returnHistory = document.getElementById('resultHistory');


//window.onload() 方法用于在网页加载完毕后立刻执行的操作，即当 HTML 文档加载完毕后，立刻执行某个方法。通常用于 <body> 元素，在页面完全载入后(包括图片、css文件等等)执行脚本代码。
window.onload = function () {
  document.getElementById('number-submit').addEventListener('click', playGame);
  document.getElementById('restart-game').addEventListener('click', resetGame);
};

var randomNumber = Math.floor(Math.random() * 100) + 1;

//array=数据结构
var historyArray = [];

//const 允许您只修改数组的值，但不能更改对数组的引用。 const 变量仅创建对该值的引用。可以更改对象属性，但不能更改对对象的引用。
const playGame = () => {
  var createHistoryElement = document.createElement('div');
  createHistoryElement.classList.add('list-group-item');
  createHistoryElement.innerText = 'You guessed ' + getInputValue.value;
  returnHistory.append(createHistoryElement);

  historyArray.push(getInputValue.value);

//用于在控制台输出信息

  console.log(historyArray);
  if (getInputValue.value === '') {
    returnResult.innerHTML =
      '<div class="alert alert-danger">Please Enter number</div>';
  } else if (getInputValue.value > 100) {
    returnResult.innerHTML =
      '<div class="alert alert-danger">Number is Invalid</div>';
  } else if (getInputValue.value < 0) {
    returnResult.innerHTML =
      '<div class="alert alert-danger">Number is Invalid</div>';
  }else {
    if (getInputValue.value > randomNumber) {
      returnResult.innerHTML =
        '<div class="alert alert-warning">Your guess is too high!</div>';
    } else if (getInputValue.value < randomNumber) {
      returnResult.innerHTML =
        '<div class="alert alert-warning">Your guess is too low!</div>';
    } else {
      returnResult.innerHTML =
        '<div class="alert alert-success">Congrats, you got it!</div>'
    }     
  }
};

const resetGame = () => {
  returnResult.innerHTML = '';
  randomNumber = Math.floor(Math.random() * 100) + 1;
  returnHistory.innerHTML = '';
  historyArray = [];
};


