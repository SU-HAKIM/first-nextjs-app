import React from 'react';
import styled from "styled-components";

function Layout({ children }) {
    return (
        <>
            <Header>
                <h1>I am trying data fetching with next.js</h1>
            </Header>
            <Main>{children}</Main>
            <Footer><p>SU Hakim &copy; copy right</p></Footer>
        </>
    )
}

export default Layout

const Header = styled.header`
    padding:10px;
    text-align:center;
    background:#005678;

    h1{
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color:white;
        text-transform:capitalize;

        @media screen and (max-width:700px){
            font-size:1.5rem;
        }
        @media screen and (max-width:460px){
            font-size:1.2rem;
        }
    }
`

const Footer = styled.footer`
    padding:5px;
    background:#005678;
    text-align:center;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    p{
        color:white;
        font-family:Arial, Helvetica, sans-serif;
    }
`

const Main = styled.main`
    padding:30px 0px;
`