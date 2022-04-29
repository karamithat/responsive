import styled from "styled-components";
import image from "../../assets/img/contact.svg";
import { mobile } from "../../responsive";
import { tablet } from "../../responsive";
import { laptop } from "../../responsive";

const Container = styled.div`
  height: 18rem;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #b00c1f;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mobile({
    height: "25rem",
  })}
  ${tablet({
    marginTop: "2rem",
    height: "25rem",
  })}
`;

const ContactText = styled.div`
  color: white;
  font-size: 1rem;
  text-align: center;
`;

const ContactTitle = styled.h1`
  color: white;
  margin-top: 1.5rem;
  font-size: 2.5rem;
  text-align: center;
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  ${mobile({
    flexDirection: "column",
  })}
  ${tablet({
    flexDirection: "column",
  })}
`;

const InputArea = styled.input`
  margin-left: 1rem;
  width: 10%;
  height: 3rem;
  border-radius: 5px;
  border: none;
  text-indent: 1rem;
  :focus {
    outline: none;
  }
  ${mobile({
    width: "50%",
    margin: "1rem 0",
  })}
  ${tablet({
    width: "50%",
    margin: "1rem 0",
  })}

${laptop({
    width: "20%",
    margin: "1rem 1rem",
  })}
`;

const ContactButton = styled.button`
  background-color: #b00c1f;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  padding: 10px 40px;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  margin-left: 1rem;
  height: 3rem;
`;

const Contact = () => {
  return (
    <Container>
      <ContactText>Bilgi veya randevu için numaranızı bırakın.</ContactText>
      <ContactTitle>SİZİ ARAYALIM!</ContactTitle>
      <ContactForm>
        <InputArea placeholder="Ad Soyad"></InputArea>
        <InputArea placeholder="Telefon"></InputArea>
        <ContactButton>Gönder</ContactButton>
      </ContactForm>
    </Container>
  );
};

export default Contact;
