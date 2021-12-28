;
var todoItems;
// api
function fetchTodoItems() {
    var todos = [
        { id: 0, title: '역량평가 작성', done: false },
        { id: 1, title: '영스타 모바일 이벤트 페이지 이전', done: true },
        { id: 2, title: '개발3팀 주간업무 보드글 작성', done: false },
        { id: 3, title: '1월 연차 사용 전결', done: false },
        { id: 4, title: '변호사 신규 이벤트 페이지', done: false },
        { id: 5, title: '중국어 메인 개편', done: true },
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
window.addEventListener('click', function (e) {
    // this 지정
    var target = e.target;
    // 타겟이 버튼일 떄
    if (target.nodeName === 'BUTTON') {
        // 버튼 부모 앨리먼트의 innerText === todoItems.title
        var title_1 = target.parentNode.previousSibling.innerText;
        // title을 갖고있는 배열 내 객체
        var item = todoItems.find(function (val) { return val.title === title_1; });
        // title을 갖고있는 배열 내 객체의 인덱스
        var index = todoItems.findIndex(function (val) { return val.title === title_1; });
        // removeChild(item);
        var itemEl = target.parentNode.parentNode;
        var itemParent = itemEl.parentNode;
        // done을 변경하는 버튼일 때
        if (target.dataset.done) {
            // item의 done을 변경
            item.done = item.done === true ? false : true;
            // 리스트 삭제
            itemParent.removeChild(itemEl);
            // 리스트 추가
            addList(item);
        }
        // 리스트 추가
        else if (target.dataset.addlist) {
            var input = document.querySelector('#todoList');
            // todoItems 배열에 item 추가
            todoItems.push({
                id: todoItems.length,
                title: input.value,
                done: false
            });
            // 도큐먼트에 item 추가
            addList(todoItems[todoItems.length - 1]);
            // 입력받은 인풋에 값 삭제
            input.value = '';
        }
        // 리스트 삭제
        else if (target.dataset["delete"]) {
            itemParent.removeChild(itemEl);
            todoItems.splice(index, 1);
        }
        // 모달 열기
        else if (target.dataset.modalopen) {
            document.querySelector('.wrap_box-modal').style.display = 'block';
        }
        // 모달 닫기
        else if (target.dataset.modalclose) {
            document.querySelector('.wrap_box-modal').style.display = 'none';
        }
    }
});
todoItems = fetchTodoItems();
(function () {
    todoItems.forEach(function (item) {
        addList(item);
    });
})();
