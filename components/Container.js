import Card from '@components/Card'
import Lid from '@components/Lid'
import Footer from '@components/Footer'

export default function Container() {
    return (
      <div className="container">
        <div className="envelope"></div>
        <Card />
        <div className="cover"></div>
        <Lid />
        <div className="shadow">
          <div className="signature">
            <Footer />
          </div>
        </div>
      </div>
    );
  }