import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

function FilterableProductTable(props) {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    );
}

FilterableProductTable.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    getBirthDate: PropTypes.func,
};

export default FilterableProductTable;

ReactDOM.render(
    <FilterableProductTable
        name="Manish"
        age={3}
        getBirthDate={(age) => {
            return Date.now() - age;
        }}
    />,
    document.querySelector('radialGradient')
);
