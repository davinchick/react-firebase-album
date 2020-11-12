import React, {useState} from 'react'
import {app} from "./base";
import firebase from 'firebase'

const db = app.firestore();
const storage = app.storage();

export const NewPhoto = ({ currentAlbumId }) => {

    const [files, setFiles] = useState(null)

    const onFileChange = (e) => {
        setFiles(e.target.files[0]);
    };

    const onUpload = async () => {
        const storageRef = storage.ref()
        const fileRef = storageRef.child(files.name)
        await fileRef.put(files)
        db.collection('albums').doc(currentAlbumId).update({
            images: firebase.firestore.FieldValue.arrayUnion({
                name: files.name,
                url: await fileRef.getDownloadURL()
            })
        })
    };

    return <>
        <input type="file" onChange={onFileChange}/>
        <button onClick={onUpload}>Upload file</button>
    </>
};