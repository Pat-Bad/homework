const ImageComponent = function(props){
    return(
        <img
        src = {props.source}
        alt={props.altText}></img>
    )

}

export default ImageComponent