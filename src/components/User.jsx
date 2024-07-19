import React from "react";
import {useState} from "react";

const User = (props) => {

    const [count,setCount] = useState(0);
    const [count2] = useState(1);

    // api call
    // useEffect()

    return <div className="user-card m-4 p-4 bg-green-500">
        <h1>Count: {count} </h1>
        <h1>Count: {count2} </h1>
        <h2>Name: {props.name} </h2>
        <h2>Location: Gorakhpur</h2>
        <h3>Contact: @as9670</h3>
    </div>
}

export default User;