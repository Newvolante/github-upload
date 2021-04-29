let newEl = document.createElement('h1');
let textContent = document.createTextNode('This is a test');
newEl.appendChild(textContent);
document.getElementById('body').appendChild(newEl);