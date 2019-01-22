import React from 'react';

class FunctionStyleA extends React.Component {
    render() {
        return (
            <div className={this.props.class}>
                {this.props.name}
                <div>{this.props.sexual}</div>
            </div>
        )
    }
}
export default FunctionStyleA;