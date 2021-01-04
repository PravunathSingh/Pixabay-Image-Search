import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageResults extends Component {
    render() {
        let imageListContent;
        const {images} = this.props;
        
        if(images) {
            imageListContent = (
                images.map(image => (
                    <div className="col-md-4 mb-4">
                        <img src={image.largeImageURL} className="img-fluid"alt=""/>
                    </div>
                ))
            )
        } else {
            imageListContent = null;
        }

        return (
            <div className="row">
                {imageListContent}
            </div>
        )
    }
}

ImageResults.propTypes = {
    image: PropTypes.array.isRequired
}

export default ImageResults;

