import React,{Component} from 'react';
import './layout.css'
import Signupform from "../components/signup/signupform";
import Header from "../components/header/header";
import Main from "../components/main/main";
class Landinpage extends Component{

    render(){

        return(

            <div>

               <Header/>

                               <div className="container ">
                    <div className="row">

                        <div className="col-md-6">
                            main
                        </div>
                        <div className="col-md-6 col-md-offset-1">


                           <Signupform/>
                        </div>

                    </div>
                </div>
            </div>







        );






    }



}


export default Landinpage;