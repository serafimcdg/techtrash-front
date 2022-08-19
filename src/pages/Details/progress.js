import ProgressBar from "react-bootstrap/ProgressBar";
import "../Details/progress.css";

function ProgressDetails(nivel) {
  return <ProgressBar now={nivel.nivel} label={`${nivel.nivel}%`} />;
}

export default ProgressDetails;
