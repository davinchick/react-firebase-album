import React, {useState, useEffect} from 'react'
import {app} from './base'

const db = app.firestore();

export const NewAlbumForm = () => {
    const [albumName, setAlbumName] = useState('')

    const onAlbumNameChange = (e) => {
        setAlbumName(e.target.value)
    };

    const onAlbumCreate = () => {
        if(albumName) {
            db.collection('albums')
                .doc(albumName)
                .set({name: albumName})
        }
        setAlbumName('')
    };

    return <>
        <input type="text" value={albumName} onChange={(e) => onAlbumNameChange(e)}/>
        <button onClick={onAlbumCreate}>Create album</button>
    </>
};