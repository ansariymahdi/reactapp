import React from 'react'
import User from './../../assets/img/user.png'
class Users extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div class="container-fluid">

                <div class="card-layout mar-top-15 mar-bottom-15">
                    <div class="card-body text-center">
                        <h5 class="card-title m-b-0">Users</h5>
                    </div>
                </div>

                <div class="card-layout mar-top-15 mar-bottom-15 pad-15">
                    <form>
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="form-group">

                                    <label for="exampleInputEmail1">First Name</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Last Name</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                </div>
                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">UserName</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Country</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                            </div>
                           
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        
                                  
                        </form>
                    </div>
 
            <div class="card-layout">
             
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                               
                                <div class="table-responsive table-radius">
                                    <table class="table">
                                          <thead class="thead-light">
                                            <tr>
                                                <th>  <span class="">index</span> </th>
                                                    <th scope="col">First Name</th>
                                                    <th scope="col">Last Name</th>
                                                    <th scope="col">UserName</th>
                                                    <th scope="col">Country</th>
                                            </tr>
                                          </thead>
                                            <tbody class="customtable">
                                                <tr>
                                                <td>1</td>
                                                        <td>India</td>
                                                        <td>Chrome OS</td>
                                                        <td>MAC OS</td>
                                                        <td>76</td>
                            </tr>
                                                    <tr>
                                                <td>1</td>
                                                            <td>USA</td>
                                                            <td>Internet Explorer</td>
                                                            <td>Win 2010</td>
                                                            <td>10</td>
                            </tr>
                                                        <tr>
                                                <td>1</td>
                                                                <td>UK</td>
                                                                <td>Safari</td>
                                                                <td>Mac OS</td>
                                                                <td>16</td>
                            </tr>
                                                                
                                                         
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
