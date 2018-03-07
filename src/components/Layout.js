import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component{
 // constructor(){
 //   super();
 //   this.state= {name: "Mo"}
 // }
  
  // render(){
  //   setTimeout(() =>{ 
  //     this.setState({name: "Jaz"});
  //   }, 1000)
  //   return (<div>{this.state.name}<Header /><Footer /></div>)
  // }
render (){
 const title= "Welcome Mo!";
  
  return (<div><Header name={"Some thing"} title={title} />
          <Header title={"Something Else"} />
          <Footer />
          </div>
          );
}


}

            


