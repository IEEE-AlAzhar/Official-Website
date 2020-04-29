import React, { Component } from "react";
import { getCategoryName } from '../../../../services/blog.service'

export default class FilterCategory extends Component {
    state = {
        CategoryName: [],
        Category: ""
    };

    componentDidMount() {
        getCategoryName().then((response) => {
            this.setState({ CategoryName: response.data });
            console.log(response)
        });
    }
    handleChangeCategory = event => {
        this.props.filterByCategory(event.target.value);
        this.setState({
            CategoryName: [],
        });
    };

    render() {
        const { CategoryName } = this.state;

        return (
            <div className="col-6 ">
                <form>
                    <select className="form-control"
                        onChange={this.handleChangeCategory}
                    >
                        <option value="" disabled>
                            Choose a  Category blogs
                        </option>
                        {CategoryName.map((Category, index) => (
                            <option key={index} value={Category.CategoryName}>
                                {Category.categoryName.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </form>
            </div>
        );
    }
}

