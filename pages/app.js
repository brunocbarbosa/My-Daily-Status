import React, { useEffect } from 'react';
import auth0 from '../lib/auth0';
import router from 'next/router';
import { db } from '../lib/db';

export default function App(props){
    useEffect(() => {
        if(!props.isAuth){
            router.push('/');
            alert('Não está logado');
        }else if(props.forceCreate){
            router.push('/create-status')
        }
    })
    if(!props.isAuth || props.forceCreate){
        return null;
    }
    return(
        <div>
        <h1>APP</h1>
        <table>
            { props.checkins.map(checkin => {
                return(
                    <tr>
                        { checkin.id }
                    </tr>
                )
            }) }
        </table>
        <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
    );
}

export async function getServerSideProps({req, res}){
    const session = await auth0.getSession(req) 
    if(session){
        const today = new Date()
        const currentDate = `${today.getFullYear()}'-'${today.getMonth()+1}'-'${today.getDate()}`
        const todaysCheckin = await db
                .collection('markers')
                .doc(currentDate)
                .collection('checks')
                .doc(session.user.sub)
                .get()
        
        const todaysData = todaysCheckin.data()
        let forceCreate = true;
        if(todaysData){
            forceCreate = false;
            const checkins = await db
                .collection('markers')
                .doc(currentDate)
                .collection('checks')
                .near({
                    center: todaysData.coordinates,
                    radius: 1000
                })
                .get()
            
            const checkinsList = []
            
            checkins.docs.forEach(doc => {
                checkinsList.push({
                    id: doc.id,
                    status: doc.data().status,
                    coords: {
                        lat: doc.data().coordinates.latitude,
                        long: doc.data().coordinates.longitude
                    }
                })
            })

            return{
                props: {
                    isAuth: true,
                    user: session.user,
                    forceCreate: false,
                    checkins: checkinsList
                }
            }
        }

        return{
            props: {
                isAuth: true,
                user: session.user,
                forceCreate
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