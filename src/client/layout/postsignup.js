import React,{Component} from 'react';
import './layout.css'
import Post_Signupform from "../components/postsignup/Post_Signupform";
import Postsignupbutton from "../components/postsignup/Submitbutton";
import Navbanner from "../components/navbar/navBanner";
class Postsignup extends Component{
    render(){

        return(<div>

            <div>
                <header>
                    <Navbanner/>
                </header>
              <main>
                  <Post_Signupform/>
                  <Postsignupbutton />
              </main>




            </div>


        </div>);




    }


}
export default Postsignup;