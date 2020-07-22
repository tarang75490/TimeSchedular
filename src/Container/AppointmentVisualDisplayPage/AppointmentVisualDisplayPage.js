import React ,{Component}from 'react'
// import classes from '../../appointmentManagement.module.css'
import Data from '../Data/schedule'
import VisualListDisplay from './VisualListDisplay/VisualListDisplay'
import ListCard from '../../Component/ListCard/listcard';

class AppointmentVisualDisplayPage extends Component{

    render(){
        return(
            <div  >
                <ListCard>
                <VisualListDisplay schedule={Data}/>
                </ListCard>
            </div> 
        );
    }
}



export default AppointmentVisualDisplayPage;      