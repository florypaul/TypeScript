import React from "react";
import TypeTodoClass from "../models/TypeTodoClass";

const Todos: React.FC<{items: TypeTodoClass[]}> = (props) => {

    return (
       <ul>
        {props.items.map((item)=>(
            <li key={item.id}>{item.text}</li>
        ))}
       </ul>
    );
}

export default Todos;