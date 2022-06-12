import React from "react";
import Project from "../../Objects/project";

class NewProject extends React.Component {
    constructor(props) {
        super();
        this.state = {
            title: "",
            // description: "",
            // tasks: [],
            // completed: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmit() {
        let title = this.state.title;
        const project_object = new Project(title);
        this.props.addProject(project_object);
    }

    render() {

        return (
            <div>
                <form onChange={this.handleChange}>
                    <label> Project Name: <input type="text" name="title" /> </label>

                    {/* <label> Project Description: <textarea /> </label> */}

                    <input type="button" onClick={this.onSubmit} value="Create Project"></input>
                </form>
            </div>
        )
    }
    
}

export default NewProject;