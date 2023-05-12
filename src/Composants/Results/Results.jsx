import "./Results.css";

function Results(props) {
  return (
    <>
      <div className="resultsContainer">
        <a href={props.lien}>{props.lien}</a>
      </div>
    </>
  );
}
export default Results;
