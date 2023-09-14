import axios from "axios";
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Firstpage from "../FirstPage/FirstPage";
import SecondPage from "../SecondPage/SecondPage";

const MainPage = () : JSX.Element => {
  const [nbaPlayers, setNbaPlayers] = useState<NBAPlayerModel[]>([]);
  const [receivedData, SetReceivedData] = useState(false);
  const [status, setStatus] = useState(true);

  const HandleHover = () => {
    const fetchURL = "https://www.balldontlie.io/api/v1/players?search=nikola";

    if (status) {
      axios.get(fetchURL)
        .then((repos) => {
          setNbaPlayers(repos.data.data);
          SetReceivedData(true);
      }, (error) => {
          console.log(error);
      });
    }
  };

  useEffect(() => {
    function changeStatus() {
      setStatus(navigator.onLine);
      if(navigator.onLine) {
        HandleHover();
      }
    }
    window.addEventListener("online", changeStatus);
    window.addEventListener("offline", changeStatus);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path = "/"
            element = {
              <Firstpage onMouseEnter={HandleHover} receivedData={receivedData}  />  
            }
          />
          <Route 
            path = "/second-page"
            element = {
              <SecondPage nbaPlayers={nbaPlayers} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default MainPage;