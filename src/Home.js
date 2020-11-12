import React from 'react'
import {Link} from 'react-router-dom'
import {NewAlbumForm} from './NewAlbumForm'


export const Home = ({ albums }) => {
    return <>
        <section>
            {albums.map(alb => (
                <Link to={`/${alb.id}`}>
                    <aside key={alb.name}>
                        <img src={alb.images ? alb.images[0].url : ""} alt="album"/>
                        <h3>{alb.name}</h3>
                    </aside>
                </Link>
            ))}
        </section>
        <footer>
            <NewAlbumForm />
        </footer>
    </>
};