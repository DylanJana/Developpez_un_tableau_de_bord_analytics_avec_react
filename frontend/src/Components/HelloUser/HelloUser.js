// Import specific css
import './HelloUser.css';

export default function HelloUser({name, score}) {
  //score props superior or equal to 0.3, scoreIsGood is true
  let scoreIsGood = score >= 0.3
  return (
    <>
      <h1 className="title--xl">Bonjour <span className="text--secondary">{name}</span></h1>
      {/** If scoreIsGood is true, show first sentence */}
      {scoreIsGood ? 
      <p className="result-sentence">Félicitation ! Vous avez explosé vos objectifs hier 👏</p> : 
      <p className="result-sentence">Dommage ! Vous n'avez pas atteint vos objectifs ! Relevez le défi 💪</p>}
    </>
  )
}
