import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           userInfo: {
            name: "Dummy",
            location:"Default",
            avatar_url:""
           }
         
        };
    }

    async componentDidMount(){
        // to make API call- why?
        const data =await fetch("https://api.github.com/users/Ashishk9670");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    render(){
        // const { name,location } = this.props;
        // const {count}  = this.state;
        
        const {name,location,avatar_url} = this.state.userInfo;
        return (
         <div className="user-card">
            {/* <h2>Count: {count}</h2>
            <button onClick={() => {
                this.setState({
                    count:this.state.count+1,
                });
            }}>Count increase</button> */}
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h3>Contact: @as9670</h3>
        </div>
        );
    }
}

export default UserClass;