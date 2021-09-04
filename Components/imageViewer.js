import componentStyle from '../styles/Component.module.css';
const ImageViewer = ({ image, onImageClick }) => {
    return (<>
        <img key={image.imageID} src={`/${image.url}`} className={componentStyle.imageViewer}
            width='75px' height='75px'
            onClick={() => onImageClick(image)} />
    </>);
}

export default ImageViewer;