// interface Todo {
//   id : number, 
//   title : string, 
//   done: boolean
// };

// let todoItems : Todo[];

// // api
// function fetchTodoItems() : Todo[] {
//   const todos = [
//     {id: 0, title: '역량평가 작성', done: false},
//     {id: 1, title: '영스타 모바일 이벤트 페이지 이전', done: false},
//     {id: 2, title: '개발3팀 주간업무 보드글 작성', done: false},
//     {id: 3, title: '1월 연차 사용 전결', done: false},
//   ];
//   return todos;
// }

// // crud methods
// function fetchTodos() : object[] {
//   const todos = fetchTodoItems();
//   return todos;
// }

// function addTodo(todo : Todo) : void{
//   todoItems.push(todo);
// }

// function deleteTodo(index : number) : void{
//   todoItems.splice(index, 1);
// }

// function completeTodo(index : number, todo : Todo) : void{
//   todo.done = true;
//   todoItems.splice(index, 1, todo);
// }

// function showCompleted() : object[] {
//   return todoItems.filter(item => item.done);
// }

// todoItems = fetchTodoItems();

// // const promise = new Promise(resolve, reject) => {

// // }

