import styled from "styled-components";
import axios from "axios";
import React from "react";

const UserCard = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

export default class Lista extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    const urlGetAllUsers =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(urlGetAllUsers, {
        headers: {
          Authorization: "jessica-vaughan",
        },
      })
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  deleteUser = (id) => {
    const urlDeleteUser = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .delete(urlDeleteUser, {
        headers: {
          Authorization: "jessica-vaughan",
        },
      })
      .then((response) => {
        alert("Usuário deletado com sucesso");
        this.getAllUsers();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  render() {
    console.log(this.state.users);
    const usersList = this.state.users.map((user) => {
      return (
        <UserCard key={user.id}>
          {user.name}
          <button onClick={() => this.deleteUser(user.id)}>Apagar</button>
        </UserCard>
      );
    });
    return (
      <div>
        <p>Lista de Usuários</p>
        {usersList}
        <button onClick={this.props.registerPage}>Cadastrar usuário</button>
      </div>
    );
  }
}
