import React,{Component} from 'react';
import Searchform from "./searchform";


class Navbanner extends Component{

    render(){return(
        <div>

            <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-dark ">
                <a className="navbar-brand text-white" href="#">
                    <img src="http://webpage.pace.edu/as03681n/logo.png" width={30} height={30}
                         className="d-inline-block align-top" alt/>
                    &nbsp;&nbsp;TravelStories
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
              <ul>





              </ul>

            </nav>


        </div>

    );}

}
export default Navbanner;
