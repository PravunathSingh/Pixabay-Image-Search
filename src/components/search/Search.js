import React, { Component } from 'react';
import axios from 'axios';
import ImageResults from '../image-result/ImageResults'

class Search extends Component {
    state = {
        searchText: '',
        amount: 12,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '19760322-1a9252dcfe1080ead205065cf',
        images: []
    };

    onTextChange = (e) => {
        const val = e.target.value;
        this.setState({[e.target.name]: val}, () => {
            if(val === '') {
                this.setState({images: []});
            } else {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                    .then(res => this.setState({images: res.data.hits}))
                    .catch(err => console.log(err));
            }
        });
    };

    onAmountChange = (e, index, value) => {
        this.setState({amount: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then(res => this.setState({images: res.data.hits}))
            .catch(err => console.log(err));
        
        this.setState({searchText: ''});
    }

    render() {
        return (
            <React.Fragment>
                <div className="card p-4 shadow-sm mb-4">
                    <h5 className="mb-3">Explore Images</h5>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control form-control-lg"
                                name="searchText"
                                placeholder="Search for images..."
                                value={this.state.searchText}
                                onChange={this.onTextChange}
                            />
                        </div>
                        <button className="btn btn-primary btn-block mb-4" onSubmit={this.onSubmit}><i className="fa fa-search"></i> Search</button>

                        <p className="mb-2 text-secondary">Set The Amount Of Images</p>
                        <select className="form-select" aria-label="Set the amount" name="amount" value={this.state.amount} onChange={this.onAmountChange}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={50}>50</option>
                        </select>
                    </form>
                </div>
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
            </React.Fragment>
        )
    }
}

export default Search;
