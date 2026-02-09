import { useState } from "react";
import { useParams } from "react-router-dom"


const Generate = () => {

  const {id}=useParams();
  const [title,setTitle]=useState('');
  const [additionalDetails,setAdditionalDetails]=useState('');
  // const [thumbnail,setThumbnail]=useState<IThumbnail>(null);
  return (
    <div>

      
    </div>
  )
}

export default Generate
