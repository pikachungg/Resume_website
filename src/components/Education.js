import React from 'react';

class Education extends React.Component{
    render(){
        var props_list = this.props;
        var keys = Object.keys(props_list);
        const content = [];
        for (var i = 0; i < keys.length; i++){
            console.log(props_list[keys[i]]);
            if (keys[i] === "university"){
                content.push(<p className="university">{props_list["university"]}</p>);
            }
            if (keys[i] === "collegeName"){
                content.push(<p className="college-name">{props_list["collegeName"]}</p>);
            }
            if (keys[i] === "titleMajor"){
            content.push(<p><span className="major">{props_list["titleMajor"]}</span>{props_list["Major"]}</p>);
            }
            if (keys[i] === "titleMinor"){
                content.push(<p><span className="major">{props_list["titleMinor"]}</span>{props_list["Minor"]}</p>);
            }
            if (keys[i] === "expected"){
                content.push(<p className="expected-graduation">{props_list["expected"]}</p>);
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

export default Education;