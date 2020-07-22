import React,{Component} from 'react'
import classes from './listcard.module.css'
class ListCard extends Component{


    render(){
   
        return(
            <div className={classes.list}>
                {this.props.children}
            </div>
        );
}
}

export default  ListCard