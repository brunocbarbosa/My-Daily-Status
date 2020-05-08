import React from 'react';

export default function Index() {
    return(
        <div>
            <h1 className="bg-gray-200"><img className="h-24 mx-auto py-4" src="/logo.png" alt="Olá FSL!" height="60"></img></h1>
            <h2 className="pt-4 pb-4 text-lg text-center">Em tempos de COVID-19, gostaria de saber o estado de saúde das pessoas perto de você? </h2>         
            
            <div className="flex items-center">
                <a href="/sobre" className="py-4 px-2 rounded bg-pink-800 font-bold shadow-xl hover:shadow block w-1/4 text-center mx-auto text-white">Sobre</a>
                <a href="/api/login" className="py-4 px-2 rounded bg-pink-800 font-bold shadow-xl hover:shadow block w-1/4 text-center mx-auto text-white">Entrar/Cadastrar</a>    
            </div>
        </div>
    );
}