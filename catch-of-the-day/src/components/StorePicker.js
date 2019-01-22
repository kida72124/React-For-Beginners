import React from 'react';
import {Fragment} from 'react';
import { format } from 'util';
import {getFunName} from '../helpers';
class StorePicker extends React.Component {
    handleClick(){
        alert('home');
    }
    render(){
        return (
        React.createElement('p',{className:"hey"},'test'),
        <Fragment>
        
        <form className="store-selector">Enter a Store
            <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
            <button onClick={this.handleClick()}>Click me</button>
            <button type="submit">Visit Store -></button>
        </form>
        
        </Fragment>
        )
    }
}

export default StorePicker;