interface Todo {
    id : number,
    title : string,
    done: boolean
};

let todoItems : Todo[];

// api
function fetchTodoItems() : Todo[] {
    const todos = [
        {id: 0, title: '맥모닝먹기', done: false},
        {id: 1, title: '아침 유산소', done: true},
        {id: 2, title: '저녁 근력운동', done: false},
        {id: 3, title: '1일 1커밋', done: false},
        {id: 4, title: '도시락 싸기', done: false},
    ];
    return todos;
}

const addList = (item : Todo) => {
    let className : string;

    if(!item.done) {
        className = 'wrap_box';
    }
    if(item.done) {
        className = 'wrap_box-done';
    }

    const parentEl : HTMLElement = document.querySelector(`.${className}`);

    // list > inner > Done button
    const doneButton : HTMLElement = document.createElement('button');
    doneButton.className = `${className}__button`;
    doneButton.innerText = item.done ? '미완료' : '완료';
    doneButton.dataset.done = `${item.done}`;

    // list > inner > delBbutton
    const delButton : HTMLElement = document.createElement('button');
    delButton.className = `${className}__button`;
    delButton.innerText = '삭제';
    delButton.dataset.delete = `${true}`;

    // list > inner
    const inner : HTMLElement = document.createElement('div');
    inner.className = `${className}__inner`;

    inner.appendChild(doneButton);
    inner.appendChild(delButton);

    // list > i
    const i : HTMLElement = document.createElement('i');
    i.className = `fas fa-check ${className}__ico`;

    // list > p
    const p : HTMLElement = document.createElement('p');
    p.className = `${className}__text`
    p.innerText = item.title;

    // list
    const li : HTMLElement = document.createElement('li');
    li.className = `${className}__list`;
    li.appendChild(i);
    li.appendChild(p);
    li.appendChild(inner);

    parentEl.appendChild(li);
}

const delList = (index : number) => {
    todoItems.splice(index, 1);
}

todoItems = fetchTodoItems();

(() => {
    todoItems.forEach((item) => {
        addList(item);
    })
})()