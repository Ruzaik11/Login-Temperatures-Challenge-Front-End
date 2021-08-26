import  './Home.css';
import React, { useState ,useEffect} from 'react';
import Weather from '../Weather/Weather';

const Home = (props) => {

    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [loader, setLoader] = useState(false);
    const loggedUser = JSON.parse(localStorage.getItem('logged-user'));
 
    useEffect(() => {
        
    }, []);

    return (
        <div className="container-sm">
            
            <div className="row w-75 m-auto mb-5">
         
                <h1 className="mt-4 heading-color" >Login Temperatures</h1>
                <ColoredLine></ColoredLine>
                <Weather></Weather>

            </div>
        </div>   
    )
}

const ColoredLine = () => (
    <hr
        style={{
            marginTop:'5px',
            marginBottom:'30px',
            color: 'black',
            backgroundColor: 'black' ,
            height: 5
        }}
    />
);

export default Home;