import Card from '@components/card'
import Lid from '@components/Lid'
import styles from './styles.css'

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