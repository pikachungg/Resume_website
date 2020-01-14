import React from 'react';

class Content extends React.Component{
    render(){
        var props_list = this.props;
        var keys = Object.keys(props_list);
        const paragraphs = [];
        for (var i = 0; i < keys.length; i++){
            if(keys[i] !== "title"){
                var paragraphs_add= props_list[keys[i]];
                paragraphs.push(<p>{paragraphs_add}</p>);
            }   
        }
        return (
            <div className="introduction">
                <h3>{props_list["title"]}</h3>
                <div className="div-content">
                    {paragraphs}
                </div>
            </div>
        );
    }
}

export default Content;