
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
     constructor(props){
        super(props)

   //     console.log("Parent constructor")
     }

     componentDidMount(){
     //   console.log("Parent Compontent Did Mount")
     }

    render(){
     //   console.log("Parent Render")
        return (
            <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
           
            <UserClass 
             name={"Prabhakar (cls)"}
             location={"Hyderabad (cls)"}
            />
         
        </div>
        )
    }
}



export default About;