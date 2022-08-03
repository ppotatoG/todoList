;
var todoItems;
// api
function fetchTodoItems() {
    var todos = [
        { id: 0, title: '맥모닝먹기', done: false },
        { id: 1, title: '아침 유산소', done: true },
        { id: 2, title: '저녁 근력운동', done: false },
        { id: 3, title: '1일 1커밋', done: false },
        { id: 4, title: '도시락 싸기', done: false },
    ];
    return todos;
}
var addList = function (item) {
    var className;
    if (!item.done) {
        className = 'wrap_box';
    }
    if (item.done) {
        className = 'wrap_box-done';
    }
    var parentEl = document.querySelector(".".concat(className));
    // list > inner > Done button
    var doneButton = document.createElement('button');
    doneButton.className = "".concat(className, "__button");
    doneButton.innerText = item.done ? '미완료' : '완료';
    doneButton.dataset.done = "".concat(item.done);
    // list > inner > delBbutton
    var delButton = document.createElement('button');
    delButton.className = "".concat(className, "__button");
    delButton.innerText = '삭제';
    delButton.dataset["delete"] = "".concat(true);
    // list > inner
    var inner = document.createElement('div');
    inner.className = "".concat(className, "__inner");
    inner.appendChild(doneButton);
    inner.appendChild(delButton);
    // list > i
    var i = document.createElement('i');
    i.className = "fas fa-check ".concat(className, "__ico");
    // list > p
    var p = document.createElement('p');
    p.className = "".concat(className, "__text");
    p.innerText = item.title;
    // list
    var li = document.createElement('li');
    li.className = "".concat(className, "__list");
    li.appendChild(i);
    li.appendChild(p);
    li.appendChild(inner);
    parentEl.appendChild(li);
};
var delList = function (index) {
    todoItems.splice(index, 1);
};
todoItems = fetchTodoItems();
(function () {
    todoItems.forEach(function (item) {
        addList(item);
    });
})();
