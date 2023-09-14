import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

type FirstPageProps = {
	onMouseEnter: () => void;
  receivedData: boolean;
};

const FirstPage = ({onMouseEnter, receivedData}: FirstPageProps) : JSX.Element => {
  const navigate = useNavigate();
  const internetConnection = navigator.onLine ? "online" :  "offline";
  
  useEffect(() => {
    if (receivedData) {
      navigate('/second-page');
    }
  }, [receivedData]);

  return (
    <>
      {
        (internetConnection === "offline") && 
        (
          <p>No internet connection, please wait!</p>
        )
      }
      <button 
        onMouseEnter={() => onMouseEnter()}
      >
        Get nba player name
      </button>
    </>
  );
};

export default FirstPage;