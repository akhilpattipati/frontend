import React, {Component} from 'react';
import {Link} from 'react-dom';

class Signupform extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        this.props.history.push('/');
    }


    render() {

        return (
            <div>
                <form className="bg-light signupform">
                    <fieldset>
                        <legend>Sign Up</legend>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Email address"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input type="date" placeholder="Date Of Birth" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <select type="gender" placeholder="Gender" className="form-control">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <input type="submit" className="btn btn-primary" value="Sign Up" onClick={this.handleClick}/>

                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Signupform;