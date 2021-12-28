let todoItems = [
    {id: 0, title: '역량평가 작성', done: false},
    {id: 1, title: '영스타 모바일 이벤트 페이지 이전', done: true},
    {id: 2, title: '개발3팀 주간업무 보드글 작성', done: false},
    {id: 3, title: '1월 연차 사용 전결', done: false},
    {id: 4, title: '변호사 신규 이벤트 페이지', done: false},
    {id: 5, title: '중국어 메인 개편', done: true},
];

const addList = (item) => {
    let className;
    
    if(!item.done) {
      className = 'wrap_box';
    }
    if(item.done) {
        className = 'wrap_box-done';
    }
    
    let parentEl = document.querySelector(`.${className}`);
  
    // list > i
    const i = document.createElement('i');
    i.className = `fas fa-check ${className}__ico`
      
    // list > p
    const p = document.createElement('p');
    p.className = `${className}__text`
    p.innerText = item.title;
  
    // list > button
    const button = document.createElement('button');
    button.className = `${className}__button`
    button.innerText = item.done ? '완료' : '미완료';
    button.dataset.done = item.done;
  
    
    // list
    const li = document.createElement('li');
    li.className = `${className}__list`
    li.appendChild(i);
    li.appendChild(p);
    li.appendChild(button);
  
    parentEl.appendChild(li);
}

const delList = (index) => {
    todoItems.splice(index, 1);
}

(() => {
    todoItems.forEach((item) => {
        addList(item)
    })
})()

window.addEventListener('click', (e) => {
    // this 지정
    const thisBtn = e.target;

    // 타겟이 버튼일 떄
    if(thisBtn.nodeName === 'BUTTON') {

        // done을 변경하는 버튼일 때
        if(thisBtn.dataset.done) {
            // 버튼이 눌린 앨리먼트의 타이틀
            const title = thisBtn.previousSibling.innerText;
    
            // title 갖고있는 배열 내 객체
            const item = todoItems.find(val => val.title === title);

            // title 갖고있는 배열 내 객체의 인덱스
            const index = todoItems.findIndex(val => val.title === title);
    
            // item의 done을 변경
            item.done = item.done === true ? false : true;
    
            // removeChild(item);
            const itemParent = thisBtn.parentNode.parentNode;
            const itemEl = thisBtn.parentNode;
    
            // 리스트 삭제, 배열에서도 삭제 필요
            itemParent.removeChild(itemEl);
            // delList(index);
    
            // 리스트 추가
            addList(item);
        }

        // 리스트 추가
        if(thisBtn.dataset.addlist) {
            const input = document.querySelector('#todoList');

            todoItems.push({
                id: todoItems.length, 
                title: input.value, 
                done: false
            })

            addList(todoItems[todoItems.length - 1]);

            input.value = '';
        }

        // 모달 열기
        if(thisBtn.dataset.modalopen) {
            console.log(thisBtn);
            document.querySelector('.wrap_box-modal').style.display = 'block';
        }

        // 모달 닫기
        if(thisBtn.dataset.modalclose) {
            console.log(thisBtn);
            document.querySelector('.wrap_box-modal').style.display = 'none';
        }
    }
})