import React, { Component } from "react";
import axios from "axios";

export default class EX13 extends Component {
  state = { users: [], last: "Ohana", img: "", searchByName: "" };

  async componentDidMount() {
    let res = [];
    for (let i = 0; i <= 10; i++) {
      res.push(await axios.get("https://randomuser.me/api/"));
    }

    let users = res.map(({ data: { results } }) => ({
      first: results[0].name.first,
      last: results[0].name.last,
      img: results[0].picture.large,
    }));
    this.setState({ users });
  }
  onSearchSubmit(event) {
    let find = event.target.value;
    // console.log(find);
    this.setState({
      users: this.state.users.filter((user) => user.first.includes(find)),
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          //   value={this.state.searchByName}
          onChange={(event) => this.onSearchSubmit(event)}
        ></input>{" "}
        <br />
        {this.state.users.map((user) => {
          return (
            <>
              <br /> {user.first} {user.last} <br /> <br />
              <img src={user.img}></img>
            </>
          );
        })}
      </div>
    );
  }
}
