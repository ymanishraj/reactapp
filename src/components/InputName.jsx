import React from 'react';

function InputName(props) {
    const username = props.username;

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={props.changeUsername}
            />
        </div>
    );
}

export default InputName;
