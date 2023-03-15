import React from "react";;

class AddComponent extends React.Component {
  state = {
    title: '',
    salary: ''
  }

  handleOnChangeTitle = (event) => {
    // this.state.name = e.target.value; //badddd
    this.setState({
      title: event.target.value,
    })
  }
  
  handleOnChangeSalary = (event) => {
    this.setState({
      salary : event.target.value
    })
  }

  handleSubmit = (event) => {

    //validate
    if(!this.state.title || !this.state.salary) {
      alert('Missing require params')
    }

    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary
    })

    this.setState({
      title: '',
      salary: ''
    })
  }

  render() {
    
    return (
      <>
        <div>
        <label>Job title </label>
        <input 
        type = "text" 
        value = { this.state.title } 
        onChange = { (event) => this.handleOnChangeTitle(event) }
        /> <br /> <br />
        <label>Salary </label>
        
        <input type = "text"
        value = { this.state.salary}
        onChange = { (event) => this.handleOnChangeSalary(event)}
        />
        </div><br />
      <button onClick = { () => this.handleSubmit() }>Add new</button> {/* //() call button */}<br />
      </>
      )
    }
  }
  
  export default AddComponent;