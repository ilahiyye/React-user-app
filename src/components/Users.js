import React, { Component } from 'react';
import User from "./User";

export default class Users extends Component {
    render() {
        const {users} = this.props; 
       

        return (
            <div>
                {users.map(user => {
                return(
                    <div>
                         <User
                           name = {user.name}
                           company = {user.company} 
                           salary = {user.salary}
                         />
                    </div>
                )


                })
                }
               
            </div>
        )
    }
}
