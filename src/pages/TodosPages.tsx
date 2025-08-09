import { useSearchParams } from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";
import { useEffect, useState } from "react";
import { apiService } from "../services/Api.services";
import Todos from "../components/todos/Todos";
import { ITodo } from "../models/ITodoModel";

const TodosPages = () => {
  const [query, setQuery] = useSearchParams({ page: "1" });
  const [todos,setTodos]=useState<ITodo[]>([]);
  const [flag,setFlag] = useState<boolean>(false)

  useEffect(() => {
    const page = query.get("page");
    if (page) {
      apiService.todo.getAll(+page)
      .then(value =>{
        setTodos(value.todos)
         const lastId =value.todos[value.todos.length-1].id;
         if(lastId >=value.total){
          setFlag(true)
         }else{
           setFlag(false)
         }
          
      })
    }
  },[query]);

  return (
    <div>
      <Todos todos={todos}/>

      <PaginationComponent flag={flag}/>
    </div>
  );
};

export default TodosPages;
