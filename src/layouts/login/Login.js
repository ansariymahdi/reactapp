import React from 'react'
import User from './../../assets/img/user.png'
import Background from './../../assets/img/bg-01.jpg'
class Login extends React.Component {
    constructor() {
        super()
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
      
    }
    handleChange(event) {
        
        this.setState({ value: event.target.value });
        console.log(this.state.value)
    }
    render() {
        return (
      
                <div class="container">
                 

                    <div class="container-login100" >
                        <div class="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
                            <form class="login100-form validate-form">
                                <span class="login100-form-title p-b-37">
                                    Sign In
				</span>

                                <div class="wrap-input100 validate-input m-b-20" data-validate="Enter username or email">
                                <input class="input100" type="text" name="username" placeholder="username or email" value={this.state.value} onChange={this.handleChange} />
                                        <span class="focus-input100"></span>
				</div>

                                    <div class="wrap-input100 validate-input m-b-25" data-validate="Enter password">
                                        <input class="input100" type="password" name="pass" placeholder="password"/>
                                            <span class="focus-input100"></span>
				</div>

                                        <div class="container-login100-form-btn">
                                            <button class="login100-form-btn">
                                                Sign In
					</button>
                                        </div>


                                   

                                          
			</form>


                                    </div>
                                </div>

                
              </div>
         
        )
    }
}

export default Login
