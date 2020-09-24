import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    static defaultProps = {
        name:    "Melumat yoxdur",
        company: "Melumat yoxdur",
        salary:  "Melumat yoxdur",
        
    }
    state = {
        isVisible : false
    }
    constructor(props){
        super(props)
        this.OnClickEvent = this.OnClickEvent.bind(this) 
    }
    OnClickEvent(e){
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    
    render() {
        const {name, salary, company} = this.props;
        const {isVisible} = this.state;


        return (
            <div className = "col-md-8 mb-4">
                <div className = "card">
                    <div className = "card-header d-flex justify-content-between"  onClick = {this.OnClickEvent}>
                         <h4 className = "d-inline">{name}</h4>
                         <i className="fas fa-trash-alt" style={{cursor: "pointer"}}></i>
                    </div>
                    {
                        isVisible? 
                        <div className="card-bady">
                            <p className="card-text">Ish yeri: {company}</p>
                            <p className="card-text">Maash: {salary}</p>
                        </div> 
                        : null
                
                    }
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