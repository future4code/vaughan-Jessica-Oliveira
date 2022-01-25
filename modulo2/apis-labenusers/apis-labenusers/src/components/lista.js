import styled from "styled-components";
import axios from "axios";
import React from "react";

// export default class Lista extends React.Component {
//     state = {
//       users: {},
//       name: "",
//       email: "",
//     };

//     componentDidMount() {
//       this.getAllUsers();
//     }

//     handleName = (event) => {
//       this.setState({ name: event.target.value });
//     };

//     handleEmail = (event) => {
//       this.setState({ email: event.target.value });
//     };

//     getAllUsers = () => {
//       const urlGetAllUsers =
//         "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
//       const axiosConfig = {
//         headers: { Authorization: "jessica-oliveira-vaughan" },
//       };
//       axios
//         .get(urlGetAllUsers, axiosConfig)
//         .then((response) => {})
//         .catch();
//     };

//     createUser = () => {
//       const urlCreateUsers =
//         "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
//       const axiosConfig = {
//         headers: { Authorization: "jessica-oliveira-vaughan" },
//       };
//       const body = { name: this.state.name, email: this.state.email };

//       axios
//         .post(urlCreateUsers, body, axiosConfig)
//         .then((response) => {
//           alert("Usuário cadastrado com sucesso!");
//           console.log(response);
//           this.setState({ name: "" });
//           this.setState({ email: "" });
//         })
//         .catch((error) => {
//           alert("Não foi possível cadastrar o usuário");
//           console.log(error);
//         });
//     };
//     render() {
//       return (
//         <div>
//           <p>Cadastre seu usuário</p>
//           <input
//             value={this.state.name}
//             onChange={this.handleName}
//             placeholder="Nome"
//           />
//           <input
//             value={this.state.email}
//             onChange={this.handleEmail}
//             placeholder="Email"
//           />
//           <button onClick={this.createUser}>Cadastrar usuário</button>
//           <button>Mudar de Tela</button>
//         </div>
//       );
//     }
//   }
