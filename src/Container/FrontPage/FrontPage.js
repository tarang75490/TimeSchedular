import React from 'react';
import classes from './FrontPage.module.css';
import Github from  './github.png';
import {withRouter} from 'react-router-dom'

class FrontPage extends  React.Component {
    onClickHandler=()=>{
        this.props.history.push("/timeSchedular")
    }
    render(){
        return(<React.Fragment>
            <div className={classes.Toolbar}>
            Time Schedular
            </div>
            
            <div className={classes.content}>
            <div className={classes.item1}>
            Hey, I am Tarang 
            </div>
            <div className={classes.item3}>
            <ul>
            <li>
            I Have Built a Time Schedular <br/>which is pretty useful for Visualisation.<br/>
            </li>
            <li>
            It can be used to visualize Meetings, routines and Appointments.
            </li>
            <li>
            You can change Color of your choice by hardcoding Or it will randomly provide color from Color Snippet.
            </li>
            <li>
            On hovering it will Raise all of the similar activity in the Schedular
            </li>
            <li>
            Additional Information can Be Seen on clicking With the help of third pary popover "react-simple-popover"
            </li>
            </ul>
           
            </div>
            <div className={classes.item3}>
            <button onClick={this.onClickHandler}>See Schedular <span style={{fontSize:"1.5em"}}>&#8594;</span></button>
            </div>
            </div>
            <div className={classes.Footbar}>
            Made By Tarang <br/>
            Follow At :<br/>
            <a href={"https://github.com/tarang75490/TimeSchedular"}>
            <img src={Github} alt="Logo" />
            </a>
            </div>
            </React.Fragment>
        )
    }
}

export default withRouter(FrontPage);
