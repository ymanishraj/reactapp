import { Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/bootstrap-icons/'

function ListItem(props) {
    const [line, setLine] = useState(false);

    function lineThrough(event) {
        setLine(true);
    }

    return (
        <>
            <li style={{ textDecoration: line ? 'line-through' : 'none' }}>
                {props.data}
            </li>
            <button className="btn-danger" onClick={lineThrough}>
                dange
            </button>
        </>
    );
}

function ListComponent(props) {
    return (
        <>
            {props.data.map((value, index) => {
                return (
                    <div key={index} className="list">
                        <ListItem data={value} />
                    </div>
                );
            })}
        </>
    );
}

export default ListComponent;
