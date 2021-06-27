import React from 'react';


class Main extends React.Component{
constructor(props){
    super(props);
    this.state = {
        number :0,

     }
}

increasing = () =>{
this.setState({
    number:this.state.number+1
});

} 

    render (){
       return( 
           <>
          
            <p>{this.state.number}</p>
            <img  onClick = {this.increasing} src = {this.props.image} alt = 'saja' />
            <button onClick = {this.props.hi}>click me </button>
            <p>{this.props.catName}</p>
          
    </>
       )}
}
export default Main;