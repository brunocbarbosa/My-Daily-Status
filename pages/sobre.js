import React from 'react';

export default function Sobre(){
    return(
        <div>
            <h1 className="pt-4 pb-4 text-lg">Sobre o My Daily Status:</h1>
            <p className="mt-2">O My Daily Status é um sistema desenvolvido durante a semana <span className="font-bold">Fullstack Lab</span>, com o professor <span className="font-bold">Túlio Faria</span>.</p>
            <p className="mt-2">O projeto tem como objetivo auxiliar no controle do COVID-19, pois, através dele você poderá saber se o estado de saúde das pessoas ao se redor.</p>
            <p className="mt-2">Assim que você compartilhar seu estado de saúde diário, poderá visualizar as pessoas a sua volta, e seu estado de saúde de forma anônima.</p>
            <p className="mt-2 pb-4"> Clique no botão abaixo para se cadastrar.</p>
            <a href="/api/login" className="py-4 px-2 rounded bg-pink-800 font-bold shadow-xl hover:shadow block w-1/4 text-center mx-auto text-white">Cadastre-se</a>
        </div>
    );
}