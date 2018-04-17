import React, {Component} from 'react';
import './Post_Signup.css'

class Post_Signupform extends Component {
    render() {
        return (

            <div className="PostSignup">
                <div class="Form">
                    <form class="needs-validation" novalidate>

                        <div class="form-group row">

                            <label for="validationTooltip03" class="col-sm-2 col-form-label">First Name</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" id="validationTooltip03"
                                       placeholder="First Name (Required)"
                                       required></input>
                                <div class="invalid-tooltip">
                                    Please provide a valid First-Name.
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="validationTooltip03" class="col-sm-2 custom-control-label col-form-label">Middle
                                Name</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" id="validationTooltip03"
                                       placeholder="Middle Name"
                                       required></input>
                                <div class="invalid-tooltip">
                                    Please provide a valid Middle-Name.
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="validationTooltip03" class="col-sm-2 col-form-label">Last Name</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" id="validationTooltip03"
                                       placeholder="Last Name (Required)"
                                       required></input>
                                <div class="invalid-tooltip">
                                    Please provide a valid Last-Name.
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="validationTooltip03"
                                   class="col-sm-2 custom-control-label col-form-label">City</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" id="validationTooltip03" placeholder="City"
                                       required></input>
                                <div class="invalid-tooltip">
                                    Please provide a valid city.
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="validationTooltip04"
                                   class="col-sm-2 custom-control-label col-form-label">State</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" id="validationTooltip04" placeholder="State"
                                       required></input>
                                <div class="invalid-tooltip">
                                    Please provide a valid state.
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="validationTooltip05"
                                   class="col-sm-2 custom-control-label col-form-label">Zip</label>
                            <div class="col-sm-7">
                                <input type="number" class="form-control" id="validationTooltip05" placeholder="Zip"
                                       required></input>
                                <div class="invalid-tooltip">
                                    Please provide a valid zip.
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="validationTooltip05" class="col-sm-2 custom-control-label col-form-label">Mobile
                                Number</label>
                            <div class="col-sm-7">
                                <input type="number" class="form-control" id="validationTooltip05"
                                       placeholder="Mobile Number"
                                       required></input>
                                <div class="invalid-tooltip">
                                    Please provide a valid zip.
                                </div>
                            </div>
                        </div>
                    </form>

                    <form>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-7">
                                <input type="email" class="form-control" id="inputEmail3" placeholder="Email"></input>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-7">
                                <input type="password" class="form-control" id="inputPassword3"
                                       placeholder="Password"></input>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="exampleFormControlTextarea1"
                                   class="col-sm-2 custom-control-label col-form-label">About Me</label>
                            <div class="col-sm-7">
                        <textarea class="form-control" class="form-control" id="validationTooltip06"
                                  placeholder="Description (Recommended)"
                                  requiredid="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>

                    </form>

                </div>
            </div>

        );

    }
}

export default Post_Signupform;