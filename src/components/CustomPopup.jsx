import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './../styles/customPopup.css'

const CustomPopup = ({item, popupContent}) => {

  return (
    <Popup trigger={item} modal>
      {close => (
        <div className="popup-container">
          <button onClick={close} type="button" className="btn-close" aria-label="Close"></button>
          <div onClick={e => e.stopPropagation()}>
            {popupContent}
          </div>
        </div>
      )}
    </Popup>
  );
}
 
export default CustomPopup;