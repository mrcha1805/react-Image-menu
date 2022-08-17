import './ImagePost.css';

function ImagePost(props) {
  const { imageItem, onBgClick } = props;
  return (
    <div className="image-post">
      <div className="image-post-bg" onClick={onBgClick} />
      <div className="image-post-content">
        <img src={imageItem.thumbnailUrl} >
        </img>
        <h4>{imageItem.title}</h4>
      </div>
    </div>
  );
}

export default ImagePost;
