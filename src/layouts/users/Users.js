import React from 'react'
import User from './../../assets/img/user.png'
class Users extends React.Component {
    // state={

    //     users:[]

    // }
    state = {
        users: []

    }
    constructor() {
        super()

        // this.
    }
    intilizeUser=()=>{
        this.setState({users:[
            {
                firstName: 'jhon',
                lastName: 'doe',
                userName: '@jhondoe',
                country: 'iran'
            }, {
                firstName: 'jhon',
                lastName: 'doe',
                userName: '@jhondoe',
                country: 'iran'
            }, {
                firstName: 'jhon',
                lastName: 'doe',
                userName: '@jhondoe',
                country: 'iran'
            }, {
                firstName: 'jhon',
                lastName: 'doe',
                userName: '@jhondoe',
                country: 'iran'
            }, {
                firstName: 'jhon',
                lastName: 'doe',
                userName: '@jhondoe',
                country: 'iran'
            },
        ]})
    }
    addUser=()=>{
        // const userArrays = this.state.users;

        // userArrays.push({
        //     firstName: 'jdfghnjmon',
        //     lastName: 'dcvbnoe',
        //     userName: '@jhsdfgondoe',
        //     country: 'irdcfvgbhnjkan'
        // });
        // this.setState(prevState => ({
        //     users: [...prevState.users, userArrays]
        // }))
        var joined = this.state.users.concat({
            firstName: 'jdfghnjmon',
            lastName: 'dcvbnoe',
            userName: '@jhsdfgondoe',
            country: 'irdcfvgbhnjkan'
        }
        );
        this.setState({ users: joined })
        // this.setState({
        //     users: [...this.state.users, {
        //         firstName: 'jdfghnjmon',
        //         lastName: 'dcvbnoe',
        //         userName: '@jhsdfgondoe',
        //         country: 'irdcfvgbhnjkan'
        //     }],
        // });
        // const userArrays = [...this.state.users];
        // userArrays.push({
        //     firstName: 'jhon',
        //     lastName: 'doe',
        //     userName: '@jhondoe',
        //     country: 'iran'
        // });
        // this.setState({ userArrays });
    }

    componentDidMount(){
        this.intilizeUser();
    }
    render() {
        return (
            <div className="container-fluid">

                <div className="card-layout mar-top-15 mar-bottom-15">
                    <div className="card-body text-center">
                        <h5 className="card-title m-b-0">Users</h5>
                    </div>
                </div>

                <div className="card-layout mar-top-15 mar-bottom-15 pad-15">
                    <form>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group">

                                    <label htmlFor="exampleInputEmail1">First Name</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Last Name</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                </div>
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">UserName</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Country</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                            </div>
                           
                        </div>
                        <button type="button"  className="btn btn-primary" onClick={()=>this.addUser()}>Submit</button>
                        
                                  
                        </form>
                    </div>
 
            <div className="card-layout">
             
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                               
                                <div className="table-responsive table-radius">
                                    <table className="table">
                                          <thead className="thead-light">
                                            <tr>
                                                <th>  <span className="">index</span> </th>
                                                    <th scope="col">First Name</th>
                                                    <th scope="col">Last Name</th>
                                                    <th scope="col">UserName</th>
                                                    <th scope="col">Country</th>
                                            </tr>
                                          </thead>
                                            <tbody className="customtable">
                                            {this.state.users.map((user, index) => (
                                                <tr key={index}>

                                                    <td>{index+1}</td>
                                                    <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                                    <td>{user.userName}</td>
                                                    <td>{user.country}</td>
                                                </tr>
                                            ))}
                                            
                                                 
                                           
                                                                
                                                         
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

            </div>
            </div>
        )
    }
}

export default Users
