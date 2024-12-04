import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";


import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Searchcontainer from "./components/Searchcontainer"
import Citycontainer from "./components/Citycontainer"
import Youtubecontainer from "./components/Youtubecontainer"
import Workcontainer from "./components/Workcontainer"
import Footercontainer from "./components/Footercontainer"
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
      <Searchcontainer/>
      <Citycontainer/>
      < Youtubecontainer/>
       
       <div className="getVerifiedContainer">
        <h1 className="getVerifiedHeading">Let Suppliers <span className="getVerifiedSpan">Find You</span></h1>
        <button className="getverifiedButton">Get Verified</button>
       </div>
      <Workcontainer/> 
      <Footercontainer/>

    </div>
  )
}

export default App;
