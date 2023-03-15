/* eslint-disable array-callback-return */
import React from 'react';

class ChildComponent extends React.Component {
  
  state = {
    isShow: false
  };
  
  handleOnChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    })
  }
  
  handleOnChangeLastName = (event) => {
    this.setState({
      lastName : event.target.value
    })
  }
  
  handleShowHide = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  /**
  * 
  * @returns setState update state and rerender content
  */
  render() {
    let { jobArr } = this.props; //destructuring assignment
    let { isShow } = this.state;

    let checkShow = isShow === true ? 'isShow = true' : 'isShow = false';
    console.log(checkShow);
    return (
      <> 
        { isShow === false ? 
          <div>
            <button onClick={ () => this.handleShowHide() }>Show</button>
          </div>
          :
            <>
            <div className='list-job'>
              { jobArr.map((item, index) => {
                if(item.salary >=500) {
                  return (
                    <div key={item.id}>
                    { item.title } --- { item.salary }
                    </div>
                    )
                  }
                })
              }
              <div><button onClick={ () => this.handleShowHide() }>hide</button></div>
            </div>
            </>
        }
      </>
      // <> 
      //   { isShow === false && 
      //     <div>
      //       <button onClick={ () => this.handleShowHide() }>Show</button>
      //     </div> }
      //   { isShow === true &&
      //     <>
      //     <div className='list-job'>
      //       { jobArr.map((item, index) => {
      //         if(item.salary >=500) {
      //           return (
      //             <div key={item.id}>
      //             { item.title } - { item.department } - { item.salary }
      //             </div>
      //             )
      //           }
      //         })
      //       }
      //       <div><button onClick={ () => this.handleShowHide() }>hide</button></div>
      //     </div>
      //     </>
      //   }
      // </>
      )
    }
  }
  
  export default ChildComponent;