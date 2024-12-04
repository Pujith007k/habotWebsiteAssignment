import { MdHomeRepairService } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import './index.css'

const Searchcontainer=()=>{
    return(
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
    )

}

export default Searchcontainer