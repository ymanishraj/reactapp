import React, { useState } from 'react';
import DisplayName from './components/DisplayName';
import InputName from './components/InputName';

function App() {
    const [username, setUsername] = useState('manish');

    function changeUsername(event) {
        setUsername(event.target.value);
    }

    return (
        <div>
            <InputName changeUsername={changeUsername} username={username} />
            <DisplayName username={username} />
        </div>
    );
}

export default App;
