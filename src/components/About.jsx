import React from "react";
import User from "./User";
import UserClass from "./UserClass";


const About = () => {

   

    return (
       
            <div className="bg-green-400">
                <h1 className="about">About Us</h1>
                <h2>This is about page of Food company</h2>
                {/* <User name= {"Ashish"}/> */}
                <UserClass name= {"Ashish Kumar (class)"} location={"Pune"}/>
            </div>
        
        
    );
};

export default About;