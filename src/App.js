import { Navbar, NavbarBrand } from 'reactstrap';
import Main from '~/component/MainComponent';
import React, { Component } from 'react';
import { DISHES } from './shared/dishes';

class App extends Component {
    render() {
        return (
            <div>
                <Main />
            </div>
        );
    }
}

export default App;
