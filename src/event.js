window.addEventListener('click', (e) => {
    // this 지정
    const target = e.target;

    // 타겟이 버튼일 떄
    if(target.nodeName === 'BUTTON') {
        // 버튼 부모 앨리먼트의 innerText === todoItems.title
        const title = target.parentNode.previousSibling.innerText;
            
        // title을 갖고있는 배열 내 객체
        const item = todoItems.find(val => val.title === title);

        // title을 갖고있는 배열 내 객체의 인덱스
        const index = todoItems.findIndex(val => val.title === title);

        // removeChild(item);
        const itemEl = target.parentNode.parentNode;
        const itemParent = itemEl.parentNode;


        // done을 변경하는 버튼일 때
        if(target.dataset.done) {    
            // item의 done을 변경
            item.done = item.done === true ? false : true;

            // 리스트 삭제
            itemParent.removeChild(itemEl);
    
            // 리스트 추가
            addList(item);
        }

        // 리스트 추가
        else if(target.dataset.addlist) {
            const input = document.querySelector('#todoList');

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
        else if(target.dataset.delete) {
            itemParent.removeChild(itemEl);
            todoItems.splice(index, 1);
        }

        // 모달 열기
        else if(target.dataset.modalopen) {
            document.querySelector('.wrap_box-modal').style.display = 'block';
        }

        // 모달 닫기
        else if(target.dataset.modalclose) {
            document.querySelector('.wrap_box-modal').style.display = 'none';
        }
    }
})