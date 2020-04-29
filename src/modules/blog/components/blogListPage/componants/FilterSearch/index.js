import React, { Component } from "react"

export default class FilterSearch extends Component {
    render() {
        return (
            <div className="col-6 ">
                <form className="form-group active-cyan-4">
                    <span className="fa fa-search form-control-feedback">
                        <input type="text" onKeyUp={event =>
                            this.props.onTextChange(event.target.value)}
                            className="form-control" placeholder="Search for new blogs "
                            aria-label="Search" />
                    </span>
                </form>
            </div>
        );
    }
}