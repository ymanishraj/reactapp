import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import ListComponent from './ListComponent';

const ToDoList = () => {
    const [item, setItem] = useState('buy an apple');
    const [newItem, setNewItem] = useState([]);

    function itemEvent(event) {
        setItem(event.target.value);
    }

    function addItem() {
        setNewItem((PerviousValue) => {
            if (item.trim()) return [item, ...PerviousValue];
            else return [...PerviousValue];
        });

        setItem('');
    }

    function addItemThroughEnter(event) {
        if (event.keyCode === 13) addItem();
    }

    return (
        <React.Fragment>
            <div className="main">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input
                        onChange={itemEvent}
                        type="text"
                        placeholder="Add an item"
                        value={item}
                        onKeyUp={addItemThroughEnter}
                    />
                    <Button onClick={addItem} style={{ borderRadius: '50px' }}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        <ListComponent data={newItem} />
                    </ol>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ToDoList;
