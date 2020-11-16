interface todosResponseType {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
interface usersResponseType {
  address: {
    city: string
    geo: {lat: string,
          lng: string}
    street: string
    suite: string
    zipcode: string
  },
  company: {
    bs: string
    catchPhrase: string
    name: string
  },
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}

const requestForTodos = async () => {
  const url = `https://jsonplaceholder.typicode.com/todos`;
  const loadData = await fetch(url);
  const data: todosResponseType[]  = await  loadData.json();
  return data
}
const requestForUsers = async () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const loadData = await fetch(url);
  const data: usersResponseType[] = await  loadData.json();
  return data
}

let obj = {}
// select book by id;
const selectById = async (id:number) => {

  let response = await requestForTodos()

  if(id in obj){
      console.log('request found in memo: ')
      return obj[id]
  } else {
      console.log('requesting from API...')
      let result = response.filter(book => book.id === id);
      obj[id] = result
      return result
  }
};
selectById(1).then((res: todosResponseType[]) => {
  console.log(res)
});

selectById(1).then((res: todosResponseType[]) => {
  console.log(res)
});


// 1. grouping todos by users:
const groupTodoByUser = async (): Promise<void> => {
  let todosGroupByUsers = {}

  let response = await requestForTodos()

  response.map(todo => {
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
  let response = await requestForTodos()
  let result = response.filter(todo => todo.userId === userId);
  return console.log(`Select all user's todos by userId(${userId}):`,result) 
}
selectTodoByUserId(2)


// 3. select todos by user name:
const selectTodosByUserName = async (userName: string) => {
  let responseUsers = await requestForUsers()
  let resultUsersResponse = responseUsers.filter(user => {
      if (user.username === userName){
          return user.id
      }
  })

  let responseTodos = await requestForTodos()
  let result = responseTodos.filter(todo => todo.userId === resultUsersResponse[0].id)
     
  return console.log(`Select todos by user name '${userName}': `, result)
}
selectTodosByUserName("Bret")