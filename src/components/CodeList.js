import React, { Component } from "react";
import ListCodeItem from "./ListCodeItem";
class CodeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "codesList": [],
    };

  }

  componentDidMount() {
    this.fetchCodeList();
  }

  fetchCodeList = async () => {
    try {
      const response = await fetch('http://backendcodingwebapplication-production.up.railway.app:3002/getCodeList');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const { codesList } = await response.json();
      console.log('Received itemList:', codesList);
      this.setState({ codesList });
    } catch (error) {
      console.error('Error fetching code list:', error);
    }
  };
  
  render() {
    const { codesList } = this.state;
    return (
      <div>
        <h1>od bdika</h1>
        <h2>{codesList}</h2>
        <ul>
          {codesList.map((code) => (
            <ListCodeItem key={code._id} id={code._id} title= {code.title} />
          ))}
        </ul>
      </div>
    );
  }
}
  

export default CodeList;
