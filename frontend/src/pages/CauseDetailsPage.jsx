import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/CauseDetails.css";
import PayPalButton from "../components/paypal/PayPalButton";

const BackendUrl = "http://localhost:3000";

const CauseDetailsPage = () => {
  const [causeDetails, setCauseDetails] = useState();
  const params = useParams();
  
  const navigate = useNavigate();
  const handleClick = (causeId, goalAmount, currentAmount, causeTitle) => {
    if (causeDetails) {
      navigate('/checkout', { state: { causeId, goalAmount, currentAmount, causeTitle } });
    } else {
      console.error("Cause details are not available.");
    }
  };

  const fetchCauseDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/getSpecificCauseDetails/${params.id}`
      );
      setCauseDetails(res.data);
      console.log(causeDetails)
    } catch (error) {
      console.log("Error getting Cause Details", error);
    }
  };

  useEffect(() => {
    fetchCauseDetails();
  }, [params.id]);

  console.log("Cause Details:", causeDetails);

  return (
    <>
      {causeDetails ? (
        <>
          <div className="outer" >
            <div className="cdmainDiv1">
              <img
                className="picture cdDiv1"
                src={`${BackendUrl}/${causeDetails.image}`}
                alt="image"
              />
              <div className="cdDiv2">
                <h1>{causeDetails.title}</h1>
                <p>Category: {causeDetails.category}</p>
                <p>Description:{causeDetails.details}</p>
                <p>Goal:{causeDetails.goal_amount}</p>
                <p>Raised Amount:{causeDetails.raised_amount}</p>

              </div>
            </div>
            <div>
            <button onClick={() => handleClick(causeDetails.id, causeDetails.goal_amount, causeDetails.raised_amount, causeDetails.title )} style={{ backgroundColor: "green", color: "white" , width:"200px" }}>
              Donate Now
            </button>
            </div>
          </div>
        </>
      ) : (
        <>
          
        </>
      )}
    </>
  );
};

export default CauseDetailsPage;
