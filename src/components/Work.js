import React from 'react';

class Work extends React.Component{
    render(){
        var props_list = this.props;
        var keys = Object.keys(props_list);
        const content = [];
        for (var i = 0; i < keys.length; i++){
            if (keys[i] === "place"){
                content.push(<p className="work">{props_list["position"]}/<span className="work-description">{props_list["place"]}</span></p>);
            }
            if (keys[i] === "duration"){
                content.push(<p className="work-duration">{props_list["duration"]}</p>);
            }
            if (keys[i] === "description"){
                content.push(<p>{props_list["description"]}</p>);
            }
        }

        return (
            <div className="introduction">
                <h3>{props_list["title"]}</h3>
                <div className="div-content">
                    {content}
                </div>
            </div>
        );
    }
}

export default Work;