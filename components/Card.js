

export default function Card() {
    return (
      <div className="card">
        <h1 className="message">Hey baby!<br />Happy Valentine’s Day<br />To us, bene ba Love :)</h1>
        <div className="heart"></div>
        <div className="signature">
          <audio controls autoPlay>
            <source src="/data/nikukonde.mp3" type="audio/mpeg" />
            <source src="./data/nikukonde.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    );
  }