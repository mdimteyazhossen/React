import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const todos=[
    {
        title:"todo1",
        desc: "todo1 dexcription 1"
    },
    {
        title:"todo2",
        desc: "todo2 dexcription 2"
    },
    {
        title:"todo3",
        desc: "todo3 dexcription 3"
    },
];
const List =() => {
    console.log(uuidv4())
    return  <div>
        {todos.map((todo) => {
            return <div key={uuidv4()}>
                <h3>{todo.title}</h3>
                <p>{todo.desc}</p>
            </div>
        })}
    </div>

}

export default List;