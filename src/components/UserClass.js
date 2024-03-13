import React from "react";

class UserClass extends React.Component {
    constructor(props){
       super(props);

       this.state = {
       userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
       },
       
       };
     //  console.log("Child Constructor" );
    }

  async  componentDidMount(){
      //  console.log("Child Compontent Did Mount")
      const data = await fetch("https://api.github.com/users/prabhakar9550");
      const json = await data.json();

      this.setState({
        userInfo: json,
      });

   //   console.log(json);
     }

     componentDidUpdate(){
        console.log("component did update")
     };

     


    render(){
        const {name, location, avatar_url} = this.state.userInfo;
      

    //    console.log(" Child Render");
        return  (
            <div className="user-card">
            <img src={avatar_url} alt="user_logo"/>
           <h2>Name: {name}</h2>
           <h3>Location: {location}</h3>
           <h4>Contact: @prabhakar</h4>
       </div>
       )
    }
}

export default UserClass;