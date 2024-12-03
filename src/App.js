import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdHomeRepairService } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoTwitter } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import './App.css';

const App=()=>{
  const [barDetails,setBarDetails]=useState(false)

  const onShowBar = () => {
    setBarDetails((prevState) => !prevState);
  }
  return(
    <div className="mainContainer">
       <nav className="navBar">
        <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1732970972/image_1_puauuu.png" alt="habot" className="navImage" />
        <div className="navBaroptions">
          <p className="navParagraph">Find Suppliers</p>
          <div className="serviceTagContainer">
            <div className="serviceOptionBar">
                <p className="navParagraph">Find Service Tags </p>
                <RiArrowDropDownLine className="serviceTagIcon"/>
            </div>
            <div className="typeOfServiceContainer"> 
              <span className="serviceSpanElement">Type Of Service1</span>
              <span>Type Of Service2</span>
              <span>Type Of Service3</span>
              <span>Type Of Service4</span>
              <span>Type Of Service5</span>
            </div>
          </div>
          <button className="navButton">Login / Sign Up</button>
        </div>
       </nav>
       <nav className="navBarMobileContainer">
          <div className="navBarMobile">
            <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1732970972/image_1_puauuu.png" alt="habot" className="navImage" />
            {barDetails?<RxCross1  className="barOption" onClick={onShowBar}/>:<FaBars className="barOption" onClick={onShowBar}/>}
          </div>
        <div className={barDetails?"navBaroptionsMobile":"navBaroptions"}>
          <p className="navParagraph">Find Suppliers</p>
          <div className="serviceTagContainer">
            <div className="serviceOptionBar">
                <p className="navParagraph">Find Service Tags </p>
                <RiArrowDropDownLine className="serviceTagIcon"/>
            </div>
            <div className="typeOfServiceContainer"> 
              <span className="serviceSpanElement">Type Of Service1</span>
              <span>Type Of Service2</span>
              <span>Type Of Service3</span>
              <span>Type Of Service4</span>
              <span>Type Of Service5</span>
            </div>
          </div>
          <button className="navButton">Login / Sign Up</button>
        </div>
       </nav>
      <div className="searchContainer">
        <h1 className="searchDescription">Are You a Supplier?</h1>
        <h1 className="searchSecondHeading">Explore Matching Opportunities.</h1>
        <div className="searchBar">
            <div className="serviceContainer">
             <MdHomeRepairService className="serviceIcon" />
             <input type="text" placeholder="Search your required service here" className="input"/>
            </div>
            <div className="serviceContainer">
              <FaLocationDot className="serviceIcon"/>
              <input type="text" placeholder="Search your desired location here" className="input" />
            </div>
            <div className="searchButton">
                <p>Search</p>
            </div>
        </div>
        <p className="searchParagraph">Are you a buyer? <br className="breakSearch"/><span className="searchSpan">Click here if you are looking to post a requirements</span></p>
      </div>
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
       <div className="getVerifiedContainer">
        <h1 className="getVerifiedHeading">Let Suppliers <span className="getVerifiedSpan">Find You</span></h1>
        <button className="getverifiedButton">Get Verified</button>
       </div>
       <div className="WorksContainer">
        <h1 className="worksHeading">How it Works?</h1>
        <p className="worksParagraph">Buyers post their needs and review top suppliers, while <br className="breakSearch"/> suppliers complete profiles, connect with potential buyers, <br className="breakSearch"/> and build successful business relationships, sharing <br className="breakSearch"/> valuable feedback.</p>
        <div className="worksListContainer">
          <div className="addPersonContainer">
            <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733031864/Group_33_vfzxkv.png" alt="AddPerson" className="addPersonImage"/>
            <h5 className="workListHeading">Select Your Role and Sign Up</h5>
          </div>
           <div className="BuyerPostContainer">
            <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733034135/Group_b91jyt.png" alt="BuyerPost" className="addPersonImage"/>
            <h5 className="workListHeading">Buyers Post Your Requirements</h5>
          </div>
           <div className="addPersonContainer">
            <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733034401/Layer_x0020_1_jrbsi7.png" alt="AddPerson" className="addPersonImage"/>
            <h5 className="workListHeading">Review, Select, and Contact the Best Suppliers</h5>
          </div>
           <div className="BuyerPostContainer">
            <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733034524/g2261_tsgpn8.png" alt="AddPerson" className="addPersonImage"/>
            <h5 className="workListHeading">Suppliers Complete You Profile and get notified for opportunities. </h5>
          </div>
           <div className="addPersonContainer">
            <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733034646/quote-request_1_avakzg.png" alt="AddPerson" className="addPersonImage"/>
            <h5 className="workListHeading">Contact to Buyers and Share your Quote for the service.</h5>
          </div>
           <div className="BuyerPostContainer">
            <img src="https://res.cloudinary.com/dbvonytlq/image/upload/v1733034781/Group_1_co9cxq.png" alt="AddPerson" className="addPersonImage"/>
            <h5 className="workListHeading">Both the Parties can Connect and Make Business Leave a Feedback</h5>
          </div>

        </div>
      
       </div>

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

    </div>
  )
}

export default App;
