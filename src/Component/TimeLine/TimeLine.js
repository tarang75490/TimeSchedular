import * as React from 'react';
// import classes from '../table.module.css'
import  './timeline.css'

class TimeLine extends React.Component{




    render() {
        let columnheader = [<th key= {"th"} className="heading">Time</th>,]
        
        let i = 0
        let j = 0
        for ( i = 0 ;i< 24;i++ ){
            columnheader.push(<th key= {"TH"+i} >{i}:00 &#9660;</th> )
           
            for (j = 1 ;j<60; j ++){
                columnheader.push(<th key={"thb"+j+"TH"+i} ></th>)
      
            }
        }
      return (
        <React.Fragment>

          {columnheader}
       
        </React.Fragment>
      )
    }
}
export default TimeLine