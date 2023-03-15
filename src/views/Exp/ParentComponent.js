import React from 'react';

import AddComponent from './AddComponent';

import ChildComponent from './ChildComponent'

class ParentComponent extends React.Component {
  
  state = {
    firstName: '',
    lastName: '',
    jobArr: [
      { id: 1, title: 'Dev', salary: '500'},
      { id: 2, title: 'PM', salary: '400'},
      { id: 3, title: 'QA', salary: '1500'}
    ]
  }

 addNewJob = (job) => {
  this.setState({
    jobArr: [...this.state.jobArr, job ]
  })
  // console.log('check prop f add component', job)
 } 
 
 
/**
 * 
 * @returns setState update state and rerender content
 */
  render() {
    
    return (
      <>
        <AddComponent 
          addNewJob = { this.addNewJob }
        />
        <ChildComponent 
          firstName = { this.state.firstName } 
          lastName = { this.state.lastName }
          jobArr = { this.state.jobArr }
        /> {/* //define props (variable) */}
      
      

      </>
      )
    }
  }
  
  export default ParentComponent;