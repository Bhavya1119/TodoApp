import { TodoItem } from "./TodoItem";
export function TodoList({Todos,toggletodo,deletetodo})
{
 return ( 
 <ul className='list'>
{Todos.length === 0 && "No Todos"}
{Todos.map(todo =>{
    return ( 
    <TodoItem 
    {...todo}
    key = {todo.id}
    toggletodo = {toggletodo}
    deletetodo = {deletetodo}
    />
    )
})}
</ul>
 )
}