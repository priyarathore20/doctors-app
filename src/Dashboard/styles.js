import styled from "styled-components";

export const DashboardWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 586px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  nav {
    border-top: 30px solid #002647;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #012e57;
    padding: 10px 5px;
    border-bottom: 2px solid #d9d9d9;
    border-width: 80%;
  }

  span {
    font-size: 20px;
    font-weight: 700;
  }

  button{
    padding: 5px 10px;
    width: 80px;
    margin: 15px 40px;
    outline: none;
    border: #002647 3px solid;
    border-radius: 5px;
    font-size: 16px;
    color: #012e57;
    background-color: transparent;
    cursor: pointer;
}
`;
export const BackIcon = styled.div`
  height: 30px;
  width: 45px;
  cursor: pointer;

  & :first-child {
    height: 100%;
    width: 100%;
  }
`;
export const PatientDetails = styled.div`
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Patient = styled.div``;
export const PatientName = styled.div`
  color: #012e57;
  font-weight: 800;
  font-size: 18px;
`;
export const PatientId = styled.div`
  color: #012e57;
`;
export const PatientImg = styled.div`
  img {
    background-color: transparent;
    height: 60px;
    width: 60px;
  }
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PatientCard = styled.div`
  background-color: #012e57;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 150px;
  border-radius: 10px;
`;
export const Heading = styled.div`
  font-size: 20px;
  color: #fff;
  padding: 10px;
`;
export const CardContent = styled.div`
  display: flex;
  /* justify-content: center; */
  gap: 30px;
`;
export const GraphBar = styled.div`
  height: 40px;
  width: 80px;

  img {
    margin-top: 5px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const OtherDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 40px;
  border-bottom: 2px solid #d9d9d9;
`;
export const OtherKeys = styled.div`
  color: #7d7d7d;
  font-size: 15px;
  line-height: 20px;

  div{
    margin-bottom: 2px;
  }
`;
export const OtherValues = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: #012e57;

  svg {
    color: #012e57;
    height: 15px;
    width: 15px;
  }
  div{
    margin-bottom: 2px;
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
export const MedHistory = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 25px 40px;
border-bottom: 2px solid #d9d9d9;
`;
export const Download = styled.div`
color: #012e57;
font-weight: 700;
font-size: 15px;
line-height: 20px;
`;
export const Disease = styled.div`
color: #012e57;
font-weight: 500;
font-size: 15px;
line-height: 20px;
`;
