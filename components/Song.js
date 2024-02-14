export default function Song() {
    return (
     <div className="signature" >
        <audio autoPlay controls audio-player >
          <source src="/nikukonde.mp3" type="audio/mpeg" />
        </audio>
      </div>
    );
  }