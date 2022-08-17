import { Navbar, NavbarBrand } from 'reactstrap';
import Main from '~/component/MainComponent';
import React, { Component } from 'react';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Main />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
