import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Image = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);
    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/image", { responseType: "blob" })
      .then((response) => {
        const imageUrl = URL.createObjectURL(response.data);
        setImageUrl(imageUrl);
      })
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    if (imageUrl) {
      return () => {
        URL.revokeObjectURL(imageUrl);
      };
    }
  }, [imageUrl]);

  if (error) {
    return <p>Error loading image</p>;
  }

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button className="bg-black" onClick={handleUpload}>
        Upload
      </button>

      <div className="h-80 w-60">
        {imageUrl ? (
          <img className="h0 w-60" src={imageUrl} alt="Uploaded" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Image;
