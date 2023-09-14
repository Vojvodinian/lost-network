type SecondPageProps = {
	nbaPlayers?: NBAPlayerModel[];
};

const SecondPage = ({nbaPlayers}: SecondPageProps): JSX.Element => {
  console.log(nbaPlayers);
  return (
    <>
      <h1>Names:</h1>
      
      <ul>
        {
          nbaPlayers && nbaPlayers.map((player, index) => {
            return (
              <li key={index}>
                {`${player.first_name} ${player.last_name}`}
              </li>
            )
          })
        }
      </ul>   
    </>
  );
  
};

export default SecondPage;