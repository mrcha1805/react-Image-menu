import './ImageItem.css';
function ImageItem(props) {
  const { imageObj, onImageClick } = props;
  return (
    <div className='image-item'>
      <img src={imageObj.thumbnailUrl} onClick={() => { onImageClick(imageObj) }}>
      </img>
      <h4>{imageObj.title}</h4>
    </div>
  );
}

export default ImageItem;
