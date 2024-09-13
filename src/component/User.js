import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
   
    this.state={
        count:0
    }
  
    console.log(props);
  }

  render() {
   const {name}=this.props;
const {count} = this.state;
    return (
      <div className="border border-box m-2">
        <h1>I Am {name}</h1>
        <h1>count : {count}</h1>
      </div>
    );
  }
}

export default User;
