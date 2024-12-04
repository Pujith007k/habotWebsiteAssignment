import { FaYoutube } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import './index.css'

const Youtubecontainer=()=>{
    return(
        <div className="youTubeContainer">
          <div className="youtubeAnimatedImage">
            < FaYoutube className="youTubeIcon"/>
          </div>
          <div className="youTubeVideoDesc">
            <div className="buyerAndsupplier">
              <div className="buyerContainer">
                <h1 className="buyer">Buyer</h1>
                
              </div>
              <div className="supplierContainer">
                <h1>Supplier</h1>
              </div>
            </div>
            <div className="buyerPointDetails">
              <FaCheckCircle className="checkMark"/>
              <p className="BuyerDescription">Post your requirements.</p>
            </div>
            <div className="buyerPointDetails">
              <FaCheckCircle className="checkMark" />
              <p className="BuyerDescription"> Sit back for multiple suppliers to contact you.</p>
            </div>
            <div className="buyerPointDetails" >
              <FaCheckCircle className="checkMark" />
              <p className="BuyerDescription">Choose among the suppliers based on the ratings and reviews.</p>
            </div>
          </div>
       

       </div>
    )
}

export default Youtubecontainer