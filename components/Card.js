import Song from 'components/Song'

export default function Card() {
    return (
      <div className="card">
        <h1 className="message">Hey baby!<br />Happy Valentine’s Day<br />To us, bene ba Love :)</h1>
        <div className="heart"></div>
        <Song />
      </div>
    );
  }