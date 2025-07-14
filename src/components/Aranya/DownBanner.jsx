import './DownBanner.css';
import wallpaper from '../../assets/wallpaper1.jpg';

const DownBanner = () => {
  const items = [
    'Indoor Plants', 'Outdoor Plants', 'Gifted Plants',
    'Flower Plants', 'Decoration Plants', 'PlantCare',
  ];

  const renderItems = () =>
    items.map((item, idx) => <span key={idx}>| <span></span> {item} </span>);

  return (
    <div className="down-banner" style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="marquee-track">
        <div className="marquee-content">{renderItems()}</div>
        <div className="marquee-content">{renderItems()}</div>
        <div className="marquee-content">{renderItems()}</div>
      </div>
    </div>
  );
};

export default DownBanner;
