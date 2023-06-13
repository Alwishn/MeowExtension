// Получение активной вкладки

let tabId;
let activeTab;

const b = () => {
  const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, span, div:not([class]), td');
  for (var i = 0; i < elements.length; i++) 
  {
    var element = elements[i];
    // Замена текста каждого элемента
    const words = element.innerText.split(' ');
    const meowWords = Array.from({ length: words.length }, () => 'Meow');
    element.innerText = meowWords.join(' ');

  }
}

const replaceWords  = () => {
  chrome.scripting.executeScript({
    target: {tabId: tabId},
    function: b,
  })
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  activeTab = tabs[0];
  tabId = activeTab.id;
  document.querySelector('#meowButton').addEventListener('click', replaceWords);
});

const refreshPage = () => {
  chrome.tabs.reload();
};

document.querySelector('#undoButton').addEventListener('click', refreshPage);



