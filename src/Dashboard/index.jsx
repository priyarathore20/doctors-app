import React, { useEffect, useState } from "react";
import { BiArrowBack, BiBody, BiInjection, BiSolidPhone } from "react-icons/bi";
import { AiFillFilePdf, AiOutlineMail } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import {
  BackIcon,
  Card,
  CardContent,
  DashboardWrapper,
  Disease,
  Download,
  GraphBar,
  Heading,
  MedHistory,
  OtherDetails,
  OtherKeys,
  OtherValues,
  Patient,
  PatientCard,
  PatientDetails,
  PatientId,
  PatientImg,
  PatientName,
  Percentage,
  ProgressMeter,
} from "./styles";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";

const Dashboard = () => {
  const db = getFirestore(app);
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const handleGetInfo = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Patients"));
        const patientData = [];
        querySnapshot.forEach((doc) => {
          const patient = doc.data();
          patientData.push(patient);
        });
        setData(patientData[patientData.length - 1]);
      } catch (error) {
        console.error(error);
      }
    };

    handleGetInfo();
  }, []);

  return (
    <DashboardWrapper>
      <nav>
        <BackIcon>
          <BiArrowBack />
        </BackIcon>
        <span> View patient</span>
      </nav>
      {data ? (
        <>
          <PatientDetails>
            <Patient>
              <PatientName>
                {data.name}, {data.gender}/{data.age}
              </PatientName>
              <PatientId>Patient id : 12345678</PatientId>
            </Patient>
            <PatientImg>
              <img
                src="https://www.svgrepo.com/show/213315/avatar-profile.svg"
                alt=""
              />
            </PatientImg>
          </PatientDetails>
          <Card>
            <PatientCard>
              <Heading>Goal reached</Heading>
              <CardContent>
                <SemiCircleProgressBar
                  percentage={60}
                  stroke={"#fcb000"}
                  diameter={150}
                  strokeWidth={10}
                  background={"white"}
                  showPercentValue={true}
                />
                <GraphBar>
                  <img
                    src="https://img.freepik.com/free-vector/percentage-bar-chart-with-five-elements_1262-7052.jpg?w=1380&t=st=1699421908~exp=1699422508~hmac=646c94c1db62a0999edb04b259e1631e3424dee4505256ae9fd15ba5e06be5c9"
                    alt=""
                  />
                  <img
                    src="https://img.freepik.com/free-vector/bar-graph_52683-9732.jpg?w=740&t=st=1699421952~exp=1699422552~hmac=9e00320bf7d607e3dcf36ca6811af418cd6e6ebde0ff28de054425fd533ab479"
                    alt=""
                  />
                </GraphBar>
              </CardContent>
            </PatientCard>
          </Card>
          <OtherDetails>
            <OtherKeys>
              <div>Phone Number</div>
              <div>Mail ID</div>
              <div>Affected side</div>
              <div>Condition</div>
              <div>Speciality</div>
            </OtherKeys>
            <OtherValues>
              <div>
                <BiSolidPhone />
                {data.number}
              </div>
              <div>
                <AiOutlineMail />
                {data.email}
              </div>
              <div>
                <BiBody />
                {data.affectedSide}
              </div>
              <div>
                <BiInjection />
                {data.condition}
              </div>
              <div>
                <FaUserDoctor />
                {data.speciality}
              </div>
            </OtherValues>
          </OtherDetails>
          <MedHistory>
            <Download>
              <AiFillFilePdf /> Medical History
            </Download>
            <Disease>{data.condition}</Disease>
          </MedHistory>
        </>
      ) : (
        <CircularProgress color="inherit" style={{ marginLeft: "300px" }} />
      )}
    </DashboardWrapper>
  );
};

export default Dashboard;
