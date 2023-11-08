import styled from "@emotion/styled";

export const FormWrapper = styled.form`
border-top: 30px solid #002647;
width: 100%;
max-width: 586px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 30px 40px;

input{
    margin-bottom: 20px;
    padding: 5px 10px;
    width: 300px;
    outline: none;
}

h4{
    padding-bottom: 3px;
    border-bottom: #002647 3px solid;
    color: #012e57;
}

button{
    padding: 5px 10px;
    margin-top: 5px;
    outline: none;
    border: #002647 3px solid;
    border-radius: 5px;
    font-size: 16px;
    color: #012e57;
    background-color: transparent;
}
`