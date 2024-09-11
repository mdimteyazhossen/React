import React from "react";
const users=[
    {
        fullName:"Anis",
        age:32,
        phones:[
            {home:"018454545"},
            {office:"96545521"}
        ]
    },
    {
        fullName:"mahir",
        age:22,
        phones:[
            {home:"15548796"},
            {office:"95548123"}
        ]
    }
]

export default function App(){
    return (
        <div>
            <h1>Nested List</h1>
            {users.map((user, index) => (
                // const {fullName,age,phone}=users;
                <article key={index}>
                    <h3>{user.fullName}</h3>
                    <p>{user.age}</p>
                    {
                        user.phones.map((phone,index) => (
                        <div key={index}>
                            <p>Home: {phone.home}</p>
                            <p>office: {phone.office}</p>
                        </div>
                   ))}
                </article>
            ))}
        </div>
    )

}

// export default App;