import React,{useState} from "react";
import axios from "axios";
import "../App.css" 

function RecipientForm() {
    const [fName, setfName] = useState();
    const [lName, setlName] = useState();
    const [email, setEmail] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [PhoneNumber, setphoneNumber] = useState();
    const [memberId, setMemberId] = useState()
    const [newRecipient,setNewRecipient] = useState([])

        
  const addRecipient = ({fName, lName,email,city,state,country,PhoneNumber,memberId}) => {
  setNewRecipient( { fName, lName,email,city,state,country,PhoneNumber,memberId });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (fName !== "" && lName !== "" && email !== "" && city !== "" 
    && state !== ""&& country !== ""&& PhoneNumber !== ""&& memberId !== "") {
      addRecipient(fName, lName,email,city,state,country,PhoneNumber,memberId);
      await axios.post(
        "http://localhost:5000/api/recipients/addrecipient",
        RecipientForm
      );
      setNewRecipient({
        fname: "",
        lName: "",
        email: "",
        city: "",
        state: "",
        country: "",
        PhoneNumber: "",
        memberId: "",
      });
   
    } else {
      alert("Please enter all inputs");
    }
  };
    return (
 <form className="form">

  <input required placeholder='First Name' type="text" value={fName} onChange={(e) => setfName(e.target.value)}/>
  
 
  <input placeholder='Last Name' type="text" value={lName} onChange={(e) => setlName(e.target.value)}/>
  

  <input placeholder='Email'type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
  
  
  <input placeholder='City' type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
  

  <input placeholder='State' type="text" value={state} onChange={(e) => setState(e.target.value)}/>
  

  <input placeholder='Country' type="text" value={country} onChange={(e) => setCountry(e.target.value)}/>
  
 
  <input placeholder='Phone Number'type="number" value={PhoneNumber} onChange={(e) => setphoneNumber(e.target.value)}/>
  
  
  <input placeholder='Member Id'type="number" value={PhoneNumber} onChange={(e) => setMemberId(e.target.value)}/>
    
  <button type="submit" onClick={handleSubmit} className="button">Submit</button>
  </form>

    );
  }
  
  export default RecipientForm;