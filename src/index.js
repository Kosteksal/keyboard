const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', builder);

function builder () {
  const container = document.createElement('div');
  container.classList.add('container');
  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerText = 'Virtual Keyboard';
  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
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

}