const body = document.querySelector('body');

let buttons = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92;'],
  ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#8242;', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593;', 'Shift'],
  ['Ctrl', '&#8862;', 'Alt', 'Space', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;'],
];

let langMem = 'EN';

function longer() {
  const btns = document.querySelectorAll('.button');
  btns[13].classList.add('backspace');
  btns[14].classList.add('tab');
  btns[28].classList.add('caps');
  btns[40].classList.add('enter');
  btns[41].classList.add('shift');
  btns[53].classList.add('shift');
  btns[57].classList.add('space');
}

function shifter() {
  const btns = document.querySelectorAll('.button');
  const keyboardContainer = document.querySelector('.keyboard-container');
  if (btns[0].innerHTML === '~') {
    buttons = [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'],
      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92;'],
      ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#8242;', 'Enter'],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593;', 'Shift'],
      ['Ctrl', '&#8862;', 'Alt', 'Space', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;'],
    ];
    keyboardContainer.innerHTML = '';
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
    });
    longer();
  }
  if (btns[0].innerHTML === '`') {
    buttons = [
      ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'BackSpace'],
      ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
      ['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
      ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#8593;', 'Shift'],
      ['Ctrl', '&#8862;', 'Alt', 'Space', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;'],
    ];
    keyboardContainer.innerHTML = '';

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
    });
    longer();
    document.querySelectorAll('.button')[28].classList.add('caps-active');
  }
  if (btns[0].innerHTML === 'ё') {
    buttons = [
      ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'BackSpace'],
      ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|'],
      ['Caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
      ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#8593;', 'Shift'],
      ['Ctrl', '&#8862;', 'Alt', 'Space', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;'],
    ];
    keyboardContainer.innerHTML = '';

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
    });
    longer();
    document.querySelectorAll('.button')[28].classList.add('caps-active');
  }
  if (btns[0].innerHTML === 'Ё') {
    buttons = [
      ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'],
      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&#92;'],
      ['Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
      ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593;', 'Shift'],
      ['Ctrl', '&#8862;', 'Alt', 'Space', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;'],
    ];
    keyboardContainer.innerHTML = '';
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
    });
    longer();
  }
  const keys = document.querySelectorAll('.button');
  keys.forEach((i) => {
    i.addEventListener('click', (event) => {
      const textAr = document.querySelector('.textarea');
      const val = textAr.value;
      const val1 = textAr.innerHTML;
      if (event.target.innerText === 'Space') {
        textAr.innerHTML = `${val1} `;
      } else if (event.target.innerText === 'Tab') {
        textAr.innerHTML = `${val1}    `;
      } else if (event.target.innerText === 'BackSpace') {
        textAr.innerHTML = val1.slice(0, -1);
      } else if (event.target.innerText === 'Enter') {
        textAr.innerHTML = `${val1}&#10;`;
      } else if (event.target.innerText === 'Shift') {
        textAr.innerHTML = val;
      } else if (event.target.innerText === 'Ctrl') {
        textAr.innerHTML = val;
      } else if (event.target.innerText === 'Alt') {
        textAr.innerHTML = val;
      } else if (event.target.innerText === '⊞') {
        textAr.innerHTML = val;
      } else if (event.target.innerText === 'Caps') {
        textAr.innerHTML = val;
        shifter();
      } else {
        textAr.innerHTML = val1 + event.target.innerText;
      }
    });
  });
}

function btnClick(event) {
  const textAr = document.querySelector('.textarea');
  const val = textAr.value;
  const val1 = textAr.innerHTML;
  if (event.target.innerText === 'Space') {
    textAr.innerHTML = `${val1} `;
  } else if (event.target.innerText === 'Tab') {
    textAr.innerHTML = `${val1}    `;
  } else if (event.target.innerText === 'BackSpace') {
    textAr.innerHTML = val1.slice(0, -1);
  } else if (event.target.innerText === 'Enter') {
    textAr.innerHTML = `${val1}&#10;`;
  } else if (event.target.innerText === 'Shift') {
    textAr.innerHTML = val;
  } else if (event.target.innerText === 'Ctrl') {
    textAr.innerHTML = val;
  } else if (event.target.innerText === 'Alt') {
    textAr.innerHTML = val;
  } else if (event.target.innerText === '⊞') {
    textAr.innerHTML = val;
  } else if (event.target.innerText === 'Caps') {
    textAr.innerHTML = val;
    shifter();
  } else {
    textAr.innerHTML = val1 + event.target.innerText;
  }
}

function clicker() {
  const keys = document.querySelectorAll('.button');
  keys.forEach((i) => { i.addEventListener('click', btnClick); });
}

function clear() {
  const clearBtn = document.querySelector('.clBtn');
  const area = document.querySelector('.textarea');
  clearBtn.addEventListener('click', () => { area.innerHTML = ''; });
}

function language() {
  const langSw = document.querySelector('.langBtn');
  const btns = document.querySelectorAll('.button');
  const keyboardContainer = document.querySelector('.keyboard-container');
  if (btns[0].innerHTML === '~' || btns[0].innerHTML === '`') {
    buttons = [
      ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'],
      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&#92;'],
      ['Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
      ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593;', 'Shift'],
      ['Ctrl', '&#8862;', 'Alt', 'Space', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;'],
    ];
    keyboardContainer.innerHTML = '';
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
    });
    longer();
    clicker();
    langSw.innerHTML = 'RU';
    langMem = 'RU';
  }
  if (btns[0].innerHTML === 'ё' || btns[0].innerHTML === 'Ё') {
    buttons = [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'],
      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92;'],
      ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#8242;', 'Enter'],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593;', 'Shift'],
      ['Ctrl', '&#8862;', 'Alt', 'Space', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;'],
    ];
    keyboardContainer.innerHTML = '';
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
    });
    longer();
    clicker();
    langSw.innerHTML = 'EN';
    langMem = 'EN';
  }
}

function builder() {
  const container = document.createElement('div');
  container.classList.add('container');
  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerText = 'Virtual Keyboard';
  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  textArea.innerHTML = '';
  textArea.readOnly = 'true';
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btnContainer');
  const clBtn = document.createElement('div');
  clBtn.classList.add('clBtn');
  clBtn.innerText = 'Clear';
  const langBtn = document.createElement('div');
  langBtn.classList.add('langBtn');
  langBtn.innerText = langMem;
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
  container.append(btnContainer);
  btnContainer.append(clBtn);
  btnContainer.append(langBtn);
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
  });
  longer();
  clicker();
  clear();
  langBtn.addEventListener('click', language);
}

document.addEventListener('DOMContentLoaded', builder);

let hold = 'down';

function hardKey(event) {
  const hardKeys = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

  const btns = document.querySelectorAll('.button');
  const key = event.code;
  const keyR = event.repeat;
  const keyNum = hardKeys.indexOf(key);
  const event1 = new Event('click');
  btns[keyNum].dispatchEvent(event1);
  btns[keyNum].style.backgroundColor = 'rgba(6, 29, 46, 0.95)';
  btns[keyNum].style.boxShadow = '1px 2px 33px 2px rgba(6, 29, 46, 0.95)';
  document.addEventListener('keyup', (even) => {
    const keyU = even.code;
    const keyNumU = hardKeys.indexOf(keyU);
    btns[keyNumU].style.backgroundColor = 'rgb(50 76 100)';
    btns[keyNumU].style.boxShadow = '1px 2px 3px 2px rgba(34, 60, 80, 0.25)';
  });

  if (key === 'ShiftLeft' || key === 'ShiftRight') {
    hold = 'down';
    if (hold === 'down' && keyR === false) { shifter(); }
  }
  document.addEventListener('keyup', (even1) => {
    const keyi = even1.code;
    if (keyi === 'ShiftLeft' || keyi === 'ShiftRight') {
      hold = 'up';
      if (hold === 'up') { shifter(); }
    }
  });
}

document.addEventListener('keydown', hardKey);

document.addEventListener('keydown', (ev) => {
  const evCode = ev.code;
  const evCtrl = ev.shiftKey;
  if (evCode === 'ControlLeft' && evCtrl === true) {
    language();
  }
});

function setLocalStorage() {
  window.localStorage.setItem('language', langMem);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  const landStor = window.localStorage.getItem('language');
  if (landStor === 'RU') {
    buttons = [
      ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'],
      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&#92;'],
      ['Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
      ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593;', 'Shift'],
      ['Ctrl', '&#8862;', 'Alt', 'Space', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;'],
    ];
    langMem = 'RU';
  }

  if (landStor === 'EN') {
    buttons = [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'],
      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92;'],
      ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#8242;', 'Enter'],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593;', 'Shift'],
      ['Ctrl', '&#8862;', 'Alt', 'Space', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;'],
    ];
    langMem = 'EN';
  }
}
window.addEventListener('load', getLocalStorage());
