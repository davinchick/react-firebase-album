import React, {useState, useEffect} from 'react'
import {app} from './base'
import {Switch, Route} from 'react-router-dom'
import {Album} from './Album'
import {Home} from './Home'

const db = app.firestore();

function App() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const unmount = db.collection('albums')
            .onSnapshot((snap) => {
            const tempAlb = [];
            snap.forEach((doc) => {
                tempAlb.push({...doc.data(), id: doc.id});
            });
            setAlbums(tempAlb);
        });
        return unmount;
    }, []);

    return (
        <main>
            <Switch>
                <Route exact path={'/'} render={() => <Home albums={albums} />} />
                <Route path="/:album" component={Album} />
            </Switch>
        </main>
    );
}

export default App;
