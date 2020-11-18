import { TodosResponseType, UsersResponseType } from "./interface";

export const requestForTodos = async () => {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    const loadData = await fetch(url);
    const data: TodosResponseType[]  = await  loadData.json();
    return data
  }
export const requestForUsers = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const loadData = await fetch(url);
    const data: UsersResponseType[] = await  loadData.json();
    return data
  }
  