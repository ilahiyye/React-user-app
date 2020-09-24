import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    static defaultProps = {
        name:    "Melumat yoxdur",
        company: "Melumat yoxdur",
        salary:  "Melumat yoxdur",
        
    }
    render() {
        const {name, salary, company} = this.props
        return (
            <div className = "col-md-8 mb-4">
                <div className = "card">
                    <div className = "card-header d-flex justify-content-between">
                         <h4 className = "d-inline">{name}</h4>
                         <i className="fas fa-trash-alt" style={{cursor: "pointer"}}></i>

                    </div>
                    <div className="card-bady">
                        <p className="card-text">Ish yeri: {company}</p>
                        <p className="card-text">Maash: {salary}</p>
                    </div>
                </div>
            
            </div>
        )
    }
}


User.propTypes = {
    name:   PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired, 
}


export default User