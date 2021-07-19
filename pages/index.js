import UserCard from "../components/user";
import styled from "styled-components";
const url = "http://localhost:5000/users";

export const getStaticProps = async () => {
  let res = await fetch(url)
  let data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  console.log(data)
  return (
    <UserList>
      {
        data.map(item => (
          <UserCard key={item.id} user={item} />
        ))
      }
    </UserList>
  )
}

const UserList = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`