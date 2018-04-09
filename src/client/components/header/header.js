import React,{Component} from 'react';

import '../../layout/layout.css'

class Header extends Component{

    render(){

        return(

                <div>
            <div className="container-fluid">
                    <nav class="navbar navbar-expand-lg bg-dark ">

                        <nav class="navbar navbar-light">
                            <a class="navbar-brand">
                                <img src="http://webpage.pace.edu/as03681n/logo.png" width="37" height="37"
                                     class="d-inline-block align-top mr-sm-3"></img>
                                <t> TravelStories</t>
                            </a>
                            <form class="form-check-inline">
                                <button class="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div className="name">
                                    <input type="text" class="form-control" placeholder="Username or Email"
                                           aria-label="Username" aria-describedby="basic-addon1"></input>
                                </div>
                                <div className="pass">
                                    <input class="form-control" type="password" placeholder="Password"></input>
                                </div>
                                <input class="btn btn-primary btn-danger" type="submit" value="Login"></input>

                                <div class="col-auto">
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" id="autoSizingCheck"></input>
                                        <label class="form-check-label1" for="autoSizingCheck">
                                            Remember me
                                        </label>
                                    </div>
                                </div>


                                <button type="button" class="btn btn-primary" onClick={this.facebookLogin}>Facebook</button>


                                <div >
                                    <button type="button" id="googleButton" class="btn btn-danger" onClick={this.googleLogin} >Google</button>
                                </div>

                            </form>
                        </nav>


                    </nav>





                </div>



</div>




        );








    }






}

export default Header;