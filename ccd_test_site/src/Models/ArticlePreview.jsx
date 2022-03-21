import React from 'react'

function ArticlePreview ({title,image,description}) {
    return(
        <div className="container-preview">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {title} </h1>
            <p> {description} </p>
        </div>
    );
}
 
export default ArticlePreview;