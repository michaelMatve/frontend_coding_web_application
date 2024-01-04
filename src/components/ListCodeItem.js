import React,{ Component } from "react";
/*
This class represents a code and displays it as a list object (li).
*/
class ListCodeItem extends Component{
    constructor(props){
        super(props);
        this.state ={
            "id" : props.id,
            "title" : props.title
        };
    }

    render() {
        const { id, title } = this.state;
        return (
          <li>
            <a href={`/CodePage/${id}`}>{title}</a>
          </li>
        );
      }
}

export default ListCodeItem;