import React, { Component } from "react";
import FilterCategory from "./FilterCategories"
import FilterSearch from "./FilterSearch"
import { getblogs } from '../../../services/blog.service'


export default class Filteriton extends Component {
    state = {
        CategoryBlogs: [],
        filterString: ''
    };

    componentDidMount() {
        getblogs().then((response) => {
            this.setState({ CategoryBlogs: response.data });
            console.log(response)
        });
    }
    filterByCategory = Blogs => {
        let filteredCategory = this.state.CategoryBlogs.filter(Blogs => {
            return Blogs.Categories === Blogs;
        });
        this.setState({
            filteredCategory
        });
    };
    onTextChange = Value => {
        this.setState({ filterString: Value })
    }
    render() {
        return (
            <div className="row  mt-7">

                <FilterSearch
                    onTextChange={this.onTextChange}
                />
                {this.state.CategoryBlogs.filter(Blog =>
                    Blog.title.toLowerCase().includes(
                        this.state.filterString.toLowerCase())
                ).map(BlogsList =>
                    <div  > {BlogsList}</div>
                )}

                <FilterCategory
                    filterByCategory={this.filterByCategory}
                />

            </div >
        )

    }
}
