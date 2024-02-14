import Card from '@components/Card'
import Lid from '@components/Lid'


export default function Container() {
    return (
      <div className="container">
        <div className="envelope"></div>
        <Card />
        <div className="cover"></div>
        <Lid />
        <div className="shadow">
          <div className="signature"></div>
        </div>
      </div>
    );
  }