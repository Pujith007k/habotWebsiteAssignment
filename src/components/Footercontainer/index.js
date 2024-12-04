import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoTwitter } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import './index.css'

const Footercontainer=()=>{
    return(
        <div className="footerContainer">
          <div className="footerInsideContainer">
            <div className="habotLogoContainer">
              <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733036868/Group_4_idsuqk.png" alt="Habot" className="footerHabotImage"/>
              <p>© Pujith</p>
            </div>
            <div className="footerDescriptionItems">
            <div className="companyContainer">
              <h3>Company</h3>
              <p className="companyListItem">About</p>
              <p className="companyListItem">FAQ</p>
            </div>
            <div className="companyContainer">
              <h3>Terms</h3>
              <p className="companyListItem">Data Privacy</p>
              <p className="companyListItem">Terms</p>
              <p className="companyListItem">Accessibility</p>
            </div>
            <div className="companyContainer">
              <h3>Related</h3>
              <p className="companyListItem">Find Buyer</p>
              <p className="companyListItem">FeedBack</p>
            </div>
            </div>
            <div className='iconContainer'>
              <div className="socialMediaIconContainer">
              <TiSocialLinkedin  className="socialMediaIcon"/>
              </div>
              <div className="socialMediaIconContainer">
              <BiLogoTwitter className="socialMediaIcon" />
              </div>
              <div className="socialMediaIconContainer">
              <TiSocialFacebook className="socialMediaIcon" />
              </div>
              <div className="socialMediaIconContainer">
              < IoLogoInstagram className="socialMediaIcon" />
              </div>
            </div>


          </div>
        

       </div>
    )
}

export default Footercontainer