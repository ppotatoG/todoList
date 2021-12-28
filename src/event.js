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
  
    // list > inner > Done button 
    const doneButton = document.createElement('button');
    doneButton.className = `${className}__button`
    doneButton.innerText = item.done ? '미완료' : '완료';
    doneButton.dataset.done = item.done;
    
    // list > inner > delBbutton 
    const delButton = document.createElement('button');
    delButton.className = `${className}__button`
    delButton.innerText = '삭제'
    delButton.dataset.delete = true;

    // list > inner
    const inner = document.createElement('div');
    inner.className = `${className}__inner`

    inner.appendChild(doneButton);
    inner.appendChild(delButton);

    // list > i
    const i = document.createElement('i');
    i.className = `fas fa-check ${className}__ico`
      
    // list > p
    const p = document.createElement('p');
    p.className = `${className}__text`
    p.innerText = item.title;

    // list
    const li = document.createElement('li');
    li.className = `${className}__list`
    li.appendChild(i);
    li.appendChild(p);
    li.appendChild(inner);
  
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
        // 버튼이 눌린 앨리먼트의 타이틀
        const title = thisBtn.parentNode.previousSibling.innerText;
            
        // title 갖고있는 배열 내 객체
        const item = todoItems.find(val => val.title === title);

        // title 갖고있는 배열 내 객체의 인덱스
        const index = todoItems.findIndex(val => val.title === title);

        console.dir(item);
        console.log(thisBtn.dataset);
        console.dir(thisBtn.dataset);

        // removeChild(item);
        const itemEl = thisBtn.parentNode.parentNode;
        const itemParent = itemEl.parentNode;


        // done을 변경하는 버튼일 때
        if(thisBtn.dataset.done) {    
            // item의 done을 변경
            item.done = item.done === true ? false : true;

            // 리스트 삭제
            itemParent.removeChild(itemEl);
    
            // 리스트 추가
            addList(item);
        }

        // 리스트 추가
        else if(thisBtn.dataset.addlist) {
            const input = document.querySelector('#todoList');

            // todoItems 배열에 item 추가
            todoItems.push({
                id: todoItems.length, 
                title: input.value, 
                done: false
            })

            // 도큐먼트에 item 추가
            addList(todoItems[todoItems.length - 1]);

            // 입력받은 인풋에 값 삭제
            input.value = '';
        }

        // 리스트 삭제
        else if(thisBtn.dataset.delete) {
            console.log(todoItems)
            itemParent.removeChild(itemEl);
            todoItems.splice(index, 1);
        }

        // 모달 열기
        else if(thisBtn.dataset.modalopen) {
            document.querySelector('.wrap_box-modal').style.display = 'block';
        }

        // 모달 닫기
        else if(thisBtn.dataset.modalclose) {
            document.querySelector('.wrap_box-modal').style.display = 'none';
        }
    }
})