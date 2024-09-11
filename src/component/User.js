import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }
  render() {
    return (
      <div>
        <h1>I Am {this.props.name}</h1>
      </div>
    );
  }
}

export default User;
