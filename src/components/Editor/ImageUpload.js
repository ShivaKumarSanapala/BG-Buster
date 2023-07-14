import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const accessToken = searchParams.get('token');

  const handleImageUpload = async () => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('image', selectedImage);

      const response = await axios.post('http://127.0.0.1:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { filename, error } = response.data;

      if (error) {
        console.error('Error uploading image:', error);
        return;
      }

      // Handle the success case
      const imageUrl = `http://127.0.0.1:5000/api/processed-images/${filename}`;
      setProcessedImage(imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <h2>Upload an image to remove the background</h2>
      <input type="file" accept="image/jpeg, image/png" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload</button>

      {loading && <div>Loading...</div>}

      {processedImage && (
        <div>
          <h3>Processed Image</h3>
          <img src={processedImage} alt="Processed Image" />
          <div>
            <a href={`${processedImage}/preview`} download>
              Download Preview Image
            </a>
            <a href={`${processedImage}/hd`} download>
              Download HD Image
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
