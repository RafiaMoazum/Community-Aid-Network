import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CauseDetailsPage = () => {
  const [causeDetails, setCauseDetails] = useState();
  const params = useParams();

  const fetchCauseDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/getSpecificCauseDetails/${params.id}`
      );
      setCauseDetails(res.data);
    } catch (error) {
      console.log("Error getting Cause Details", error);
    }
  };

  useEffect(() => {
    fetchCauseDetails();
  },[params.id]);

  console.log("Cause Details:", causeDetails);

  return (
    <>
      {causeDetails ? (
        <>
          <div>
            <h1>Cause Details Page</h1>
            <h1>{causeDetails.title}</h1>
            <p>Category: {causeDetails.category}</p>
            <p>Description:{causeDetails.details}</p>
            <p>Goal:{causeDetails.goal_amount}</p>
          </div>
          <button style={{ backgroundColor: "green", color: "white" }}>
            Donate Now
          </button>
        </>
      ) : (
        <>
          <h1>Cause Details</h1>
          <p>No Details Found</p>
        </>
      )}
    </>
  );
};

export default CauseDetailsPage;
