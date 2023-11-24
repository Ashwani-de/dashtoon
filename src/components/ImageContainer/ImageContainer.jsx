import React, { useEffect } from 'react';
import '../ImageContainer/ImageContainer.css'
const ImageContainer = ({ responses, closeContainer }) => {

    return (
        <>
            <div className="popup_background">
                <div className="popup_container">
                    // closeButton div
                    <div className="closeButton">
                        <button onClick={() => closeContainer(false)}>X</button>
                    </div>
                    <div className="title">
                        <h2>Here Is You're Comic Panel</h2>
                    </div>
                    {/* Image list div containing all the generated images */}
                    <div className="Image_List">
                        {responses.map((response, index) => (
                            // creating a url for every image to assign it to the src attribute.
                            <img key={index} src={URL.createObjectURL(response)} alt={`Generated Image ${index + 1}`} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageContainer;
