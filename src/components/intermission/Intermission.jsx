import "./intermission.scss"

const Intermission = ({type}) => {
  return (
    <div className="inter">
      <h1>{type==="about" ? "Who Are We?" : "What Are We Planning?"}</h1>
      <div className="image-container"></div>        
    </div>
  )
}

export default Intermission;
