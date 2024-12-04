import './index.css'

const Workcontainer=()=>{
   return(

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
      
   )
}

export default Workcontainer