import styled from "styled-components";
const url = "http://localhost:5000/users";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
    let res = await fetch(url)
    let data = await res.json()

    const paths = data.map(item => ({
        params: { id: item.id.toString() }
    }))

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id

    let res = await fetch(`${url}/${id}`)
    let data = await res.json()


    return {
        props: { data }
    }
}

const User = ({ data }) => {
    const router = useRouter()
    return (
        <UserDetails>
            <UserName>
                Name : {data.name}
            </UserName>
            <UserWeb>
                visit: {data.website}
            </UserWeb>
            <ContactAt>
                Contact at : {data.email}
            </ContactAt>
            <GoBack onClick={() => router.push("/", "Home", { scroll: true })}>
                Back To User List
            </GoBack>
        </UserDetails>
    );
}

export default User;

const UserDetails = styled.div`
    margin:40px auto;
    box-shadow:0px 0px 3px #998;
    display:flex;
    flex-direction:column;
    padding:10px 5px;
    width:60vw;
`

const UserName = styled.h1`
    font-size:1.3rem;
    /* margin-bottom:10px; */
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

const UserWeb = styled.small`
    color:#999;
    margin-bottom:10px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:400;
`

const ContactAt = styled.p`
    color:#333;
    font-weight:400;
    font-family:Arial, Helvetica, sans-serif;
`

const GoBack = styled.div`
    padding:10px 20px;
    border:none;
    border-radius:3px;
    box-shadow:0px 0px 5px;
    background:#005577;
    color:white;
    font-weight:500;
    font-family:Arial, Helvetica, sans-serif;
    width:200px;
    text-align:center;
    margin:10px 0px;
    cursor:pointer;
`