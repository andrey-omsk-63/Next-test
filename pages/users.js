import * as React from "react";
//import {useState, useEffect} from 'react'
import Link from "next/link";
import MainContainer from "../components/MainContainer";
const Users = ({ users }) => {
  // const [users, setUsers] = React.useState([
  //   { id: 1, name: "Петя" },
  //   { id: 2, name: "Вася" },
  // ]);

  // React.useEffect(async () => {
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  //   const data = await response.json();
  //   setUsers(data)
  // }, [])

  return (
    <MainContainer keywords={"users next js"}>
      <h1>Cписок пользователей</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link legacyBehavior href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
