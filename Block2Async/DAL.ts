import { todosResponseType, usersResponseType } from "./interface";

export const requestForTodos = async () => {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    const loadData = await fetch(url);
    const data: todosResponseType[]  = await  loadData.json();
    return data
  }
export const requestForUsers = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const loadData = await fetch(url);
    const data: usersResponseType[] = await  loadData.json();
    return data
  }
  