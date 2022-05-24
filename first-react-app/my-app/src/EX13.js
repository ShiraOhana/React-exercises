import React, { Component } from "react";
import axios from "axios";

export default class EX13 extends Component {
  state = { users: [], last: "Ohana", img: "" };

  async componentDidMount() {
    let res = [];
    for (let i = 0; i <= 10; i++) {
      res.push(await axios.get("https://randomuser.me/api/"));
    }

    // let specificData = res.data.results[0];
    // map((item) => item);
    let users = res.map(({ data: { results } }) => ({
      first: results[0].name.first,
      last: results[0].name.last,
      img: results[0].picture.large,
    }));
    this.setState({ users });
  }

  render() {
    return (
      <div>
        <input></input> <br />
        {this.state.users.map((user) => {
          return (
            <>
              {user.first} {user.last} <br />
              <img src={user.img}></img>
            </>
          );
        })}
      </div>
    );
  }
}
