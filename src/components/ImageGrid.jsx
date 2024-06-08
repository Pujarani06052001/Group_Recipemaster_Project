// src/components/ImageGrid.js
// import React from 'react';
import {useEffect,useState} from "react"
import './ImageGrid.css';


const ImageGrid = ({search,setSearch,call,setCall}) => {

  const [data, setData] = useState([])

  const getData = (search = "banana") => {
    fetch(`https://forkify-api.herokuapp.com/api/search?q=${search}`, { method: 'GET' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data)
        console.log("Api data",data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
useEffect(() => {
  getData(search)

  
}, [])


useEffect(() => {
  getData(search)
}, [call])

  return (
    <>
    
    {/* <h1>{JSON.stringify(data.recipes[0])}</h1> */}
    {data?.recipes?.map((e) => (
  <>
    <img src={e.image_url} alt="Image 1" />

    {/* <h1>{JSON.stringify(e)}</h1> */}
  </>
))}

    <div className="image-grid">
      {/* <img src="/images/img1.png" alt="Image 1" />
      <img src="/images/img17.jpg" alt="Image 2" />
      <img src="/images/img11.jpeg" alt="Image 2" />
      <img src="/images/img10.webp" alt="Image 2" />
      <img src="/images/img9.webp" alt="Image 2" />
      <img src="/images/img16.jpg" alt="Image 2" />
      <img src="/images/img3.jpg" alt="Image 2" />
      <img src="/images/img15.webp" alt="Image 2" />
      <img src="/images/img4.jpg" alt="Image 2" />
   
      <img src="/images/img12.jpg" alt="Image 2" />
      <img src="/images/img14.jpg" alt="Image 2" />
      <img src="/images/img13.jpg" alt="Image 1" /> */}
    </div>
    </>
  );
};

export default ImageGrid;
