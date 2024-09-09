const input = document.getElementById('input-bx');
const ul = document.getElementById('ul-container');
const add = document.querySelector('.add');
const empty = document.querySelector('.empty');

function addTask(){
    if(input.value === ''){
        empty.textContent = 'You must write something!';
    }
    else{
        empty.textContent = '';
        let li = document.createElement('li');
        li.innerHTML = input.value;
        ul.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    };

    input.value = '';
    saveData();
};

add.addEventListener('click',()=>addTask());

input.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        addTask();
    };
});

ul.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem('data',ul.innerHTML)
};

function showData() {
    ul.innerHTML = localStorage.getItem('data')
}

showData();