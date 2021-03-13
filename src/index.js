import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './components/keep/App';
import ToDoList from './components/todo/ToDoList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ProductInformationComponet extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="comp">
                <select name="products">
                    <option value="apple">apple</option>
                    <option value="copy">copy</option>
                    <option value="book">book</option>
                    <option value="mobile">mobile</option>
                    <option value="car">car</option>
                    <option value="orange">orange</option>
                </select>
                <input
                    type="text"
                    placeholder="enter quantity"
                    value={this.props.quantity}
                    onChange={this.props.changeValue}
                />
            </div>
        );
    }
}

class AddressComponent extends React.Component {
    render() {
        return (
            <div className="comp">
                <input
                    type="text"
                    value={this.props.address}
                    onChange={this.props.changeValue}
                />
            </div>
        );
    }
}

class SummeryComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="comp">
                <h1 defaultValue={'hell'} onChange={this.props.changeValue}>
                    quantity: {this.props.quantity}
                </h1>
                <h1>address: {this.props.address}</h1>
            </div>
        );
    }
}

class OrderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 0, address: 'sonma' };
    }

    componentDidMount() {
        console.log(`component mounted`);
    }

    componentDidUpdate() {
        console.log('component updated');
    }

    handelQuantityChange(event) {
        const quantity = event.target.value;

        this.setState({
            quantity: isNaN(quantity) ? this.state.quantity : quantity,
        });

        // console.log(this);
    }

    handelAddressChange(event) {
        this.setState({ address: event.target.value });
        // console.log(this);
    }

    render() {
        return (
            <div className="comp">
                <ProductInformationComponet
                    quantity={this.state.quantity}
                    changeValue={this.handelQuantityChange.bind(this)}
                />
                <AddressComponent
                    address={this.state.address}
                    changeValue={this.handelAddressChange.bind(this)}
                />
                <SummeryComponent
                    address={this.state.address}
                    quantity={this.state.quantity}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
