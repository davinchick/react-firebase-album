import React, {useEffect, useState} from 'react'
import { useRouteMatch } from 'react-router-dom'
import { NewPhoto } from './NewPhoto'
import {Link} from 'react-router-dom'
import {app} from "./base";

const db = app.firestore();

export const Album = () => {
    const [images, setImages] = useState([]);
    const [albumName, setAlbumName] = useState("");

    const match = useRouteMatch('/:album');
    const { album } = match.params;

    useEffect(() => {
        const unmount = db.collection("albums")
            .doc(album)
            .onSnapshot((doc) => {
            setImages(doc.data().images || []);
                setAlbumName(doc.data().name);
        });
        return unmount;
    }, []);

    return <>
        <section>
            <header>
                <h1>{albumName}</h1>
                <p>Go to the <Link to="/">Home page</Link></p>
            </header>
            {images.map(image => (
                    <aside key={image.name}>
                        <img src={image.url} alt="cat"/>
                    </aside>
            ))}
        </section>
        <footer>
            <NewPhoto currentAlbumId={album} />
        </footer>
    </>
};