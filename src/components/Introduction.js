import React from 'react';
import ReactDOM from 'react-dom';

class Introduction extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div className="introduction">
                <h3>TASDFASDFJH:{this.props.title}</h3>
                <div className="div-content">

                </div>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Introduction/>, app);