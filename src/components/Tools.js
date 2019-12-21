import React from 'react';

class Tools extends React.Component{
    render(){
        var props_list = this.props;
        var keys = Object.keys(props_list);
        const content = [];
        for (var i = 0; i < keys.length; i++){
            console.log(props_list[keys[i]]);
            if (keys[i] === "languages"){
                content.push(<p><span className="sub-title">{props_list["languages"]}</span>{props_list["languagesAll"]}</p>);
            }
            if (keys[i] === "frameworksLibraries"){
                content.push(<p><span className="sub-title">{props_list["frameworksLibraries"]}</span>{props_list["frameworksAll"]}</p>);
            }
            if (keys[i] === "design"){
                content.push(<p><span className="sub-title">{props_list["design"]}</span>{props_list["designAll"]}</p>);
            }
        }
        return(
            <div className="introduction">
                <h3>{props_list["title"]}</h3>
                <div className="div-content">
                    {content}
                </div>
            </div>
        );
    }
}

export default Tools;