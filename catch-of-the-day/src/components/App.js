import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

import FunctionStyleA from './FunctionStyleA';
import FunctionStyleB from './FunctionStyleB';
import FunctionStyleC from './FunctionStyleC';
class App extends React.Component {
    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header
                        tagline="Fresh seafood Market" 
                        cost={300}
                        sexual ="female"
                    />
                    <FunctionStyleA class="Hello" name="Andrew" sexual="Man"/>
                    <FunctionStyleB count={100 + 20}/>
                    <FunctionStyleC title="9 Crimes" artist="Damien Rice"/>
                </div>
                <Order />
                <Inventory />
            </div>
        )
    }
}

export default App;   