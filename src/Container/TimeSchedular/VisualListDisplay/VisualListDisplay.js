import * as React from 'react';
import TimeLine from '../../../Component/TimeLine/TimeLine'
import './VisualListDisplay.css'
import PopUpModel from './PopUpModel'
import { Spinner } from 'react-bootstrap';

class VisualListDisplay extends React.Component{
    state={
        activities:{},
        rows:null,
        colors:[ "rgb(2,63,165)","rgb(125,135,185)","rgb(190,193,212)","rgb(214,188,192)","rgb(187,119,132)","rgb(142,6,59)","rgb(74,111,227)","rgb(133,149,225)","rgb(181,187,227)","rgb(230,175,185)","rgb(224,123,145)","rgb(211,63,106)","rgb(17,198,56)","rgb(141,213,147)","rgb(198,222,199)","rgb(234,211,198)","rgb(240,185,141)","rgb(239,151,8)","rgb(15,207,192)","rgb(156,222,214)","rgb(213,234,231)","rgb(243,225,235)","rgb(246,196,225)","rgb(247,156,212)"],        appointments:{}
      }
      assignColor = (newActivity,color) =>{
        const activities = this.state.activities
        const activity = Object.keys(activities).find((appointmentId)=> appointmentId===newActivity)
        if (!activity){
          // Assigning Particular color to particular type of activity
          activities[newActivity]={
            color:color || this.state.colors[Object.keys(activities).length],
          }
        }
          this.setState({
            activities:activities
          })
        }


        
    buildschedular=()=>{
        const week = this.props.schedule.weekdays
        let rows = []
        let rows2 = []
        week.forEach((day,index)=>{
        let row =[<td key="start" className="rowstart">{day.dayName}</td>]
        let row2 =[<td key="start1" className="rowstart"></td>]
        let i = 0
        // Schedules of particular day
        let scheduleList = day.schedules
        if (scheduleList.length > 0){
            let startTime = scheduleList[0].timeSpan.startSpan.total
            let duration = startTime-1
            let endTime = scheduleList[0].timeSpan.endSpan.total
      
        row.push(<td  key={index} colSpan={duration} ><div></div></td> )
        row2.push(<td   colSpan={duration} class="row"  ><div></div></td>)
            for(i=0;i<scheduleList.length;i++){
                    // Assigning Color To Particular Activity
                      this.assignColor(scheduleList[i].activityId,scheduleList[i].color)

                      //Start and End Time 
                      startTime = scheduleList[i].timeSpan.startSpan.total
                      endTime = scheduleList[i].timeSpan.endSpan.total
                      duration = endTime-startTime

                      // Fetching color and class for particular activity
                      const actId = scheduleList[i].activityId
                      const color = this.state.activities[actId].color
                      const classN = this.state.activities[actId].class

                      let classss = "appointment "
                      if (classN !== undefined){                        
                       classss += classN
                      }
                      console.log(classss)

                      row.push(
                        <td  colSpan={duration} key={index+"A"+rows.length} >
                            <PopUpModel
                                appointcolor={color} 
                                appointinfo={scheduleList[i]} 
                                appointId={actId} 
                                mouseover={()=>this.onMousehoverhandler(actId)} 
                                mouseout={()=>this.onMouseOuthandler(actId)} 
                                appointclass={classss}/>
                                </td>)
                      row2.push(<td colSpan={1}>
                        <div class="marker">
                          <span class="item">	&#9650;</span>
                          <span class="item2">{(scheduleList[i].timeSpan.startSpan.hour)%12}:{scheduleList[i].timeSpan.startSpan.minutes}{"  "}{(scheduleList[i].timeSpan.startSpan.hour)>=12 ? "PM":"AM"} </span>
                          </div>
                          </td>)
                      row2.push(<td   colSpan={duration-2} class="row" style={{borderTop:"3px solid "+color}} ></td>)
                      row2.push(<td colSpan={1}>
                        <div class="marker">
                          <span class="item">	&#9650;</span>
                          <span class="item2">{(scheduleList[i].timeSpan.endSpan.hour)%12}:{scheduleList[i].timeSpan.endSpan.minutes}{"  "}{(scheduleList[i].timeSpan.endSpan.hour)>=12 ? "PM":"AM"} </span>
                          </div>
                          </td>)
                      console.log(startTime,endTime,duration)
                      // &#8657;
                    // if its a last activity 
                    if (i+1 === scheduleList.length){ startTime = 1440 }
                    //else if not a last activity
                    else{  startTime = scheduleList[i+1].timeSpan.startSpan.total }

                    duration = startTime -endTime
                    
                    if(duration!==0){
                      console.log(startTime,endTime,duration)
                      row.push(<td key={"F"+index+rows}  colSpan={duration-2}  ><div></div></td> )
                      row2.push(<td   colSpan={duration-2} className="row"  ><div></div></td>)

                    }
                  }}
                else{
                    row.push(<td key="Not Available" colSpan={380} > <center>No Activities</center></td>)
                    row.push(<td key="Not Available1" colSpan={380} > <center>No Activities</center></td>)
                    row.push(<td key="Not Available2" colSpan={380} > <center>No Activities</center></td>)
                    row.push(<td key="Not Available3" colSpan={380} > <center>No Activities</center></td>)
                    row2.push(<td   colSpan={1440} class="row"  ><div></div></td>)
                }
               
                  rows.push(row)
                  rows.push(row2)
                
              
    })
      this.setState({
        rows:rows
      })
}    
// shouldComponentUpdate=(nextProps,nextState)=>{
//   if (this.state.rows!==  nextState.rows ){
//     return true
//   }
//   return false
// }
    componentDidUpdate(prevProps, prevState, snapshot){
      if ((this.state.activities !==  prevState.activities ) ){
        this.buildschedular()
      }
    }
  
    componentDidMount(){
        console.log(this.props)
        this.buildschedular()
    }
    onMousehoverhandler=(newActivity)=>{
      const activities = {...this.state.activities}

      // Provide Hover Class to all particular type of activity
          activities[newActivity]={
            ...activities[newActivity],
            class:"hoverclass"
          }
          console.log(activities)
          this.setState({
            activities :activities
          })

    }
    onMouseOuthandler=(newActivity)=>{
      const activities = {...this.state.activities}
      
          activities[newActivity]={
            ...activities[newActivity],
            class:""
          }
          console.log(activities)
          this.setState({
            activities :activities
          })

    }




    render() {
      let show = null;
  
      if (this.state.rows ){
        show =  <div className="visual">
        <table className="table">
        <thead>
        <tr><TimeLine/></tr>
          </thead>
          <tbody>
            {
              this.state.rows.map((staff,index)=>(<tr className="row"  key={index+"R"}>{staff}</tr>))
            }
          </tbody>
        </table>
        </div>
      }

      return (
          <React.Fragment>
              {show}    
          </React.Fragment>
      )
     
    }
}


export default VisualListDisplay;