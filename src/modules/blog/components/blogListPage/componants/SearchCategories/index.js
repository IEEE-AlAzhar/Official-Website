import React, { Component } from "react"

export default class FilterSearch extends Component {
    state = {
        filterString: ''
    };
    onTextChange = Value => {
        this.setState({ filterString: Value })
    }
    render() {
        return (
            <div className="col-6 ">
                <form className="form-group active-cyan-4">
                    <span className="fa fa-search form-control-feedback">
                        <input type="text" onChange={event =>
                            this.state.onTextChange(event.target.value)}
                            className="form-control" placeholder="Search for new blogs "
                            aria-label="Search" />
                    </span>
                </form>
            </div>
        );
    }
}