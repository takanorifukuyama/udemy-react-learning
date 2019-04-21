import React from "react"

class SearchForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            place: "Tokyo Tower"
        }
    }
    handlePlaceChange = place => {
        this.setState({ place })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.place)
    }
    render(){
        return(
            <form onSubmit={e => this.handleSubmit(e)}>
                <input
                    type="text"
                    value={this.state.place}
                    onChange={e=>this.handlePlaceChange(e.target.value)}
                />
                <input
                    type="submit"
                    value="Search"
                />
            </form>
        )
    }
}



export default SearchForm;