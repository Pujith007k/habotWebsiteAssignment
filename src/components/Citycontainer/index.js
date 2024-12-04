import { FaArrowRightLong } from "react-icons/fa6";
import './index.css'

const Citycontainer=()=>{
    return(
         <div className="habotWebsiteDescription">
        <div className="habotsideHeading">
          <h2 className="habotSideHeadingTitle">Ready to dive into HABOT?</h2>
          <p className="habotsideHeadingParagraph">Signing up with HABOT opens the door to a world of <br className="breakSearch"/>new opportunities and potential for business growth.<br className="breakSearch"/> Gain access to a vibrant community of like-minded <br className="breakSearch"/> individuals, unlock valuable resources, and take the <br className="breakSearch"/> first step towards realizing your entrepreneurial dreams.</p>
          <button className="habotsideHeadingButton">Sign Up Today! <FaArrowRightLong className="sideheadingarrowIcon"/></button>
        </div>
        <div className="habotCites">
          <div className="cityName">
            <p>Abu dhabi</p>
          </div>
          <div className="cityName">
            <p>Dubai</p>
          </div>
          <div className="cityName">
            <p>Sharjah & Ajman</p>
          </div>
          <div className="cityName">
            <p>Fujairah</p>
          </div>
          <div className="cityName">
            <p>Ras Ai Khaimah</p>
          </div>
          <div className="cityName">
            <p>Umm AL Quwain</p>
          </div>

        </div>

       </div>
    )
}

export default Citycontainer