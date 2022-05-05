const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', builder);

const buttons = [
  ['`', '1','2','3','4','5','6','7','8','9','0','-','=','BackSpace',],
  ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','&#92;',],
  ['Caps','a','s','d','f','g','h','j','k','l',';','"','Enter',],
  ['Shift','z','x','c','v','b','n','m',',','.','/','&#8593;','Shift',],
  ['Ctrl','&#8862;','Alt','Space','Alt','Ctrl','&#8592;','&#8595;','&#8594;',]
]

function builder () {
  const container = document.createElement('div');
  container.classList.add('container');
  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerText = 'Virtual Keyboard';
  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  textArea.innerHTML = '';
  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('keyboard-container');
  const textOS = document.createElement('p');
  textOS.classList.add('text');
  textOS.innerText = 'Клавиатура создана в Windows';
  const textLang = document.createElement('p');
  textLang.classList.add('text');
  textLang.innerText = 'Для смены языка: левые Shift и Ctrl';
  body.append(container);
  container.append(title);
  container.append(textArea);
  container.append(keyboardContainer);
  container.append(textOS);
  container.append(textLang);

  
  

  buttons.forEach((i) => {
    const row = document.createElement('div');
    row.classList.add('row');
    keyboardContainer.append(row);
    i.forEach((e) => {
      const button = document.createElement('button');
      button.classList.add('button');
      button.innerHTML = e;
      row.append(button);
    });
  })
  longer();
  clicker();
}

function longer () {
  const btns = document.querySelectorAll('.button');
  btns[13].classList.add('backspace');
  btns[14].classList.add('tab');
  btns[28].classList.add('caps');
  btns[40].classList.add('enter');
  btns[41].classList.add('shift');
  btns[53].classList.add('shift');
  btns[57].classList.add('space');
}



function clicker () {
  const textAr = document.querySelector('.textarea');
  val = textAr.value;
  console.log(val)
  const keys = document.querySelectorAll('.button');
  keys.forEach(i => {i.addEventListener('click', btnClick)});
}

function btnClick (event) {
  const textAr = document.querySelector('.textarea');
  val = textAr.value;
  val1 = textAr.innerHTML;
  if (event.target.innerText == 'Space') {
    textAr.innerHTML = val1 + ' ';
  } else if (event.target.innerText == 'Tab') {
    textAr.innerHTML = val1 + '    ';
  } else if (event.target.innerText == 'BackSpace') {
    textAr.innerHTML = val1.slice(0, -1);
  } else if (event.target.innerText == 'Enter') {
    textAr.innerHTML = val1 + '&#10;';
  } else if (event.target.innerText == 'Shift') {
    textAr.innerHTML = val;
  } else if (event.target.innerText == 'Ctrl') {
    textAr.innerHTML = val;
  } else if (event.target.innerText == 'Alt') {
    textAr.innerHTML = val;
  } else if (event.target.innerText == '⊞') {
    textAr.innerHTML = val;
  }
   else {
    textAr.innerHTML = val1 + event.target.innerText;
  }
  
}

