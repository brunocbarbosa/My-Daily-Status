import React from 'react';
import Link from 'next/link';
import auth0 from '../lib/auth0';

const NavLink = ({ href, children }) => {
    return (
        <Link href={href}>
            <a className="p-2 hover:underline hover:text-red-800">{children}</a>
        </Link>
    );
}

export default function NavBar(props){
    // console.log(props.isAuth)
    if(!props.isAuth){
        return(
           
            <div className="bg-gray-500 py-4 text-center">
                <NavLink href="/api/login">entrou no if</NavLink>
                <NavLink href="/">Página Inicial</NavLink>
                <NavLink href="/api/login">Entrar/Cadastrar</NavLink>
                <NavLink href="/sobre">Sobre</NavLink>
                <NavLink href="/api/logout">Sair</NavLink>
            </div>
        );
    }else{
        return(
            <div className="bg-gray-500 py-4 text-center">
            <NavLink href="/api/login">entrou no else</NavLink>
                <NavLink href="/sobre">Sobre</NavLink>
                <NavLink href="/api/login">Entrar</NavLink>
                <NavLink href="/api/logout"></NavLink>
            </div>
        );
    }
}

export async function getServerSideProps({req, res}){
    const session = await auth0.getSession(req);
    console.log(session)
    if(session){   
        return{
            props: {
                isAuth: true,
                user: session.user,
            }
        }
    }
    return {
        props:{
            isAuth: false,
            user: {}
        }
    }
}