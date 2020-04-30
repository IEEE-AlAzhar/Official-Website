import React, { Component } from "react";

export default class FilterSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterString: "",
        };
    }
    onTextChange = (Value) => {
        console.log(Value);
        this.setState({ filterString: Value });
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.filterString);
        this.props.searchCatogery(this.state.filterString);
    };
    render() {
        return (
            <div className="col-6 ">
                <form onSubmit={this.onFormSubmit} className="form-group active-cyan-4">
                    <span className="fa fa-search form-control-feedback">
                        <input
                            type="text"
                            onChange={(event) => this.onTextChange(event.target.value)}
                            className="form-control"
                            placeholder="Search for new blogs "
                            aria-label="Search"
                        />
                    </span>
                </form>
            </div>
        );
    }
}