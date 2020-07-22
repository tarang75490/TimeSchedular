import React ,{Component}from 'react'
// import classes from '../../appointmentManagement.module.css'
import Data from '../Data/schedule'
import VisualListDisplay from './VisualListDisplay/VisualListDisplay'
import ListCard from '../../Component/ListCard/listcard';

class TimeSchedular extends Component{

    render(){
        return(
            <div  >
               
                <VisualListDisplay schedule={Data}/>
             
            </div> 
        );
    }
}



export default TimeSchedular;      