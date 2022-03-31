import React,{useState,useEffect} from "react";
import { fetchImageUrls } from "../api/index";

const ImageCarousel = (props) => {
    const [images,setImages]=useState([])
    const [counter,setCounter]=useState(0)
    

    
    useEffect(()=>{
        fetchImageUrls()
        .then((data)=>{
            setImages(data)
        })
        .catch((err)=>{
            console.log("error in useEffect is: ",err)
        })
    },[])

    const handleClick=(str)=>{
        if(str=="next")
        {
            if(counter==images.length-1)
            {
                setCounter(0)
            }
            else{
                setCounter(counter+1)
            }
        }
        else{
            if(counter==0)
            {
                setCounter(images.length-1)
            }
            else{
                setCounter(counter-1)
            }
        }
    }

    return(
       <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <button onClick={()=>{handleClick("prev")}}>previous</button>
           <img style={{width:"50%",height:"50%"}} src={images[counter]} alt="image in carousel" />
           <button onClick={()=>{handleClick("next")}} >next</button>
       </div> 
    );
};
export default ImageCarousel;
