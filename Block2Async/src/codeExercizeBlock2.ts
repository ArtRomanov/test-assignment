import { requestForTodos, requestForUsers } from "./DAL";
import { TodosResponseType, UsersResponseType } from "./interface";

let obj = {}
// select book by id;
const selectById = async (id:number) => {

  const response = await requestForTodos()

  if(id in obj){
      console.log('request found in memo: ')
      return obj[id]
  } else {
      console.log('requesting from API...')
      const result = response.filter(book => book.id === id);
      obj[id] = result
      return result
  }
};
selectById(1).then((res: TodosResponseType[]) => {
  console.log(res)
});

selectById(1).then((res: TodosResponseType[]) => {
  console.log(res)
});


// 1. grouping todos by users:
const groupTodoByUser = async (): Promise<void> => {
  let todosGroupByUsers = {}

  const response = await requestForTodos()

  response.forEach(todo => {
      if(todo.userId in todosGroupByUsers){
          todosGroupByUsers[todo.userId].push(todo)  
      } else {
          todosGroupByUsers[todo.userId] = [todo]     
      }
  });

  return console.log('Grouping todos by users: ', todosGroupByUsers) 
}
groupTodoByUser()


// 2. select all user's todos by userId:
const selectTodoByUserId = async (userId: number): Promise<void> => {
  const response = await requestForTodos()
  const result = response.filter(todo => todo.userId === userId);
  return console.log(`Select all user's todos by userId(${userId}):`,result) 
}
selectTodoByUserId(2)


// 3. select todos by user name:
const selectTodosByUserName = async (userName: string) => {
  const predicate = (u:UsersResponseType) => u.username === userName
  const responseUsers = await requestForUsers()
  let resultUsersResponse = responseUsers.filter(predicate)
  


  const responseTodos = await requestForTodos()
  const result = responseTodos.filter(todo => todo.userId === resultUsersResponse[0].id)
  
  return console.log(`Select todos by user name '${userName}': `, result)
}
await (selectTodosByUserName("Bret"))