import React, { useState } from "react";
import { FormWrapper } from "./styles";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";

const PatientForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [affectedSide, setAffectedSide] = useState("");
  const [condition, setCondition] = useState("");
  const [speciality, setSpeciality] = useState("");
  const db = getFirestore(app);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Patients"), {
        name: name,
        gender: gender,
        age: age,
        number: number,
        email: email,
        affectedSide: affectedSide,
        condition: condition,
        speciality: speciality,
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h4>Enter Patient details </h4>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Gender (M/F)"
        onChange={(e) => setGender(e.target.value)}
        value={gender}
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />
      <input
        type="number"
        placeholder="Number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="text"
        placeholder="Affected side"
        onChange={(e) => setAffectedSide(e.target.value)}
        value={affectedSide}
      />
      <input
        type="text"
        placeholder="Condition"
        onChange={(e) => setCondition(e.target.value)}
        value={condition}
      />
      <input
        type="text"
        placeholder="Speciality"
        onChange={(e) => setSpeciality(e.target.value)}
        value={speciality}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </FormWrapper>
  );
};

export default PatientForm;
