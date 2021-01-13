// create your App component here
import React, {useState, useEffect} from "react";

function App(){
    const [img, setImg] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resp => resp.json())
            .then(data => {
                setImg(data.message)
        });
    },
    []);

    if(!img){
        return <p>Loading...</p>;
    }else{
        return <img src={img} alt="A Random Dog"></img>;
    };
};

export default App;