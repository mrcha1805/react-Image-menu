
import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import ImageItem from './components/ImageItem';
import ImagePost from './components/ImagePost';
import imageList from './data/images';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchText, setSearchText] = useState('');
  function onImageOpenClick(btnIndex) {
    setSelectedImage(btnIndex);
  }

  function onImageCloseClick() {
    setSelectedImage(null);
  }
  const filteredImages = imageList.filter((img) => {
    return img.title.includes(searchText);
  })
  const imageElements = filteredImages.map((image, index) => {
    return <ImageItem key={index} imageObj={image} onImageClick={onImageOpenClick} />
  });
  let imagePost = null;
  if (selectedImage) {
    imagePost = <ImagePost imageItem={selectedImage} onBgClick={onImageCloseClick} />
  }
  return (
    <div className='app'>
      <AppHeader />
      <section className='app-section'>
        <div className='app-container'>
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className='app-grid'>
            {imageElements}
          </div>
        </div>
      </section>
      {imagePost}
    </div >
  );
}

export default App;
