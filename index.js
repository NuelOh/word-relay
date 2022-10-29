//쿵쿵따
// 3글자로 고정
// 3글자가 아닐경우 다시 입력하하고 창
// 또한 promp창에서 사용자가 취소 누르면 코드 실행 안되게

const $order = document.querySelector('#order');
const $word = document.querySelector('#word');
const $input = document.querySelector('input');
const $btn = document.querySelector('#btn');
const userNumber = parseInt(prompt('몇 명이 참가하시나요?'));

let word // 제시어
let newWord // 입력받은 값

if(!userNumber) {
  alert('빠빠')
  document.querySelector('.container').style.display = 'none';
} else {
  const onInput = (event) => {
    newWord = event.target.value;
  }

  const plusOrder = () => {
    const number = parseInt($order.textContent);
    if(number === userNumber) {
      $order.textContent = '1';
    } else {
      $order.textContent = number + 1;
    }
  }

  const changeWord = () => {
    word = newWord;
    $word.textContent = newWord;
    $input.value = '';
    $input.focus();
  }

  const onClickButton = () => {
    if(newWord.length !== 3){
      alert('3글자 단어를 입력하시오');
    } else {
      if(!word) {
        changeWord()
        plusOrder()
      } else {
        if(newWord[0] === word[word.length - 1]){
          changeWord()
          plusOrder()
        } else {
          alert('올바른 단어를 입력하시오.');
        }
      }
    }
  }
  $input.addEventListener('input', onInput);
  $btn.addEventListener('click', onClickButton);
}



