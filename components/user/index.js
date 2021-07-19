import styled from "styled-components";
import Link from "next/link";


const UserCard = ({ user }) => {
    return (
        <Card>
            <CardInfo>
                <CardTitle href={`/user/${user.id}`} passHref><a>{user.name}</a></CardTitle>
                <SubTitle>
                    {user.website}
                </SubTitle>
            </CardInfo>
            <CardContact>
                Contact at : {user.email}
            </CardContact>
        </Card>
    );
}

export default UserCard;


const Card = styled.div`
    width:70vw;
    padding:10px 20px;
    margin-bottom:10px;
    box-shadow:0px 0px 5px #999;
    display:flex;
    flex-direction:column;
`

const CardTitle = styled(Link)`
    text-decoration:none;
    color:#333;
    font-size:1.1rem;
    font-weight:500;
`

const SubTitle = styled.span`
    font-size:.8rem;
    color:#999;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    display:block;
`

const CardInfo = styled.div`
    margin-bottom:10px;
`

const CardContact = styled.p`
    font-weight:500;
`