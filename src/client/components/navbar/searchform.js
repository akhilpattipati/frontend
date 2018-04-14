import React,{Component} from 'react';

class Searchform extends Component{
    render(){

        return(
            <div>


                <form className="navbar-form navbar-left" role="search">
                    <div className="form-group form-inline my-2 my-lg-0 float-right">
                        <input type="text" className="form-control"  placeholder="Search"/>
                    </div>

                </form>



            </div>

        );



    }

}
export default Searchform;