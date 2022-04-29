import styled from "styled-components";
import slider from "../../assets/img/slider.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import profile from "../../assets/img/profile.png";
import { HiArrowRight } from "react-icons/hi";
import { BsCheckCircleFill } from "react-icons/bs";
import { mobile } from "../../responsive";
import { tablet } from "../../responsive";
import { laptop } from "../../responsive";
import { large } from "../../responsive";

const Container = styled.div`
  height: 86rem;
  overflow: hidden;
  ${mobile({
    height: "80rem",
  })}

  ${tablet({
    height: "110rem",
  })}

  ${laptop({
    height: "120rem",
  })}

`;
const Image = styled.div`
  height: 36rem;
  background-image: url(${slider});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  ${mobile({
    display: "none",
  })}
  ${tablet({
    display: "none",
  })}
`;
const Arrow = styled.div`
  position: absolute;
  width: 4rem;
  height: 4rem;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "5rem"};
  right: ${(props) => props.direction === "right" && "8rem"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  width: 50%;
  position: absolute;
  top: 15rem;
  left: 20rem;

  padding: 10px;

  overflow-y: hidden;
  overflow-x: hidden;
  ${mobile({
    display: "none",
  })}
  ${tablet({
    display: "none",
  })}
    ${laptop({
    left: "10rem",
    padding: 0,
  })}
    ${large({
    left: "13rem",
    padding: 0,
  })}
`;

const SmallTitle = styled.small`
  font-size: 1rem;
  color: #091d3e;
  width: 100%;
  letter-spacing: 5px;
`;

const LargeTitle = styled.h1`
  font-size: 4rem;
  color: #091d3e;
  width: 100%;
  letter-spacing: 2px;
  margin-top: 2.4rem;
  ${laptop({
    fontSize: "3rem",
  })}
`;

const Desc = styled.p`
  font-size: 1rem;
  color: #091d3e;
  width: 100%;
  margin-top: 1.5rem;
  width: 80%;
`;

const Button = styled.button`
  background-color: #b00c1f;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  padding: 1rem 2rem;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  margin-top: 1.5rem;
`;

// ABOUT CONTENT

const AboutContainer = styled.div`
  position: relative;
  height: 50rem;
  display: flex;
  flex-direction: row;
  width: 75%;
  ${mobile({
    position: "static",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  })}

  ${tablet({
    position: "static",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  })}

${laptop({
    position: "relative",
    display: "flex",

    width: "90%",
  })}
`;

const ProfileContainer = styled.div`
  display: flex;
`;
const Profile = styled.img`
  position: absolute;

  top: -4rem;
  left: 5rem;
  z-index: 1;
  width: 50%;
  max-width: 40rem;
  ${mobile({
    position: "static",
    width: "100%",
  })}
  ${tablet({
    position: "static",
    width: "100%",
  })}
  ${laptop({
    width: "100%",
  })}
`;
const AboutContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 3;
  width: 75%;
  left: 47rem;
  top: 3rem;
  ${mobile({
    position: "static",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: "1rem",
    fontSize: "1rem",
  })}
  ${tablet({
    position: "static",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: "1rem",
  })}

${laptop({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    left: "5rem",
    top: "45rem",
    marginLeft: "1rem",
  })}
  ${large({
    left: "42rem",
    
  })}
`;
const AboutTitle = styled.h3`
  color: #ff8086;
  font-weight: lighter;
  letter-spacing: 1px;
`;

const AboutName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.h1`
  font-weight: 500;
  font-size: 2.4rem;
  color: #091d3e;
  ${mobile({
    fontSize: "1.5rem",
  })}
`;

const AboutButton = styled.button`
  display: flex;
  background-color: #fff;
  border: 2px solid #ff8086;
  font-weight: 400;
  border-radius: 5px;
  cursor: pointer;
  color: #ff8086;
  overflow: hidden;
  padding: 1rem 2rem;
  margin-right: 8rem;

  &:hover {
    background-color: #ff8086;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
  ${mobile({
    padding: "0.5rem ",
    margin: "0 3rem",
    fontSize: "0.5rem",
  })}
  ${tablet({
    padding: "0.3rem 0.7rem",
    margin: "0 4rem",
  })}
`;

const AboutDesc = styled.p`
  line-height: 1.6rem;
  color: #091d3e;
  margin-top: 2rem;
  width: 80%;
  ${mobile({
    fontSize: "0.7rem",
    lineHeight: "1.2rem",
  })}
`;

const Interest = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
`;
const InterestTitle = styled.div`
  display: flex;
  flex-direction: row;

  z-index: 1000;
  margin-top: 2rem;
`;
const InteresList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 4rem;
  position: absolute;
  ${mobile({
    gap: "1rem",
    width: "60%",
  })}
  
`;
const InteresItem = styled.li`
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #f8f8f8;
  background-color: #f8f8f8;
  padding: 20px 20px;
  text-indent: 5px;
  ${mobile({
    width: "100%",
    padding: "5px",
  })}
    ${large({
    padding: "10px",
    
  })}
  
`;
const BsCheckCircleFillIcon = styled(BsCheckCircleFill)`
  display: flex;
  flex-direction: row;
  color: #ff8096;
  font-size: 2rem;
`;

const About = () => {
  return (
    <Container>
      <Image>
        <Arrow direction="left">
          <AiOutlineLeft />
        </Arrow>
        <Arrow direction="right">
          <AiOutlineRight />
        </Arrow>
      </Image>

      <Wrapper>
        <SmallTitle>UZMANLIK ALANLARI</SmallTitle>
        <LargeTitle>Ritm Bozuklukları</LargeTitle>
        <Desc>
          Ritm bozukluğu aritmi, kalbin elektriksel uyarılarının normal
          düzeninde gelişen herhangi bir değişikliğe denir. Bu değişiklikler
          hızlı veya yavaş olarak hissedilebilir.
        </Desc>
        <Button>Detaylı Bilgi</Button>
      </Wrapper>

      <AboutContainer>
        <ProfileContainer>
          <Profile src={profile} />
        </ProfileContainer>
        <AboutContent>
          <AboutTitle>HAKKIMDA</AboutTitle>

          <AboutName>
            <Name>
              Doç. Dr. <br /> Zehra İlke Akyıldız
            </Name>
            <AboutButton>
              Hakkımda
              <HiArrowRight style={{ marginLeft: "50px" }} />
            </AboutButton>
          </AboutName>
          <AboutDesc>
            1993 yılında İzmir Fen Lisesi’nden mezun olduktan sonra, 2000
            yılında Hacettepe Üniversitesi İngilizce Tıp Fakültesi’ni bitirerek
            Tıp Doktoru unvanını aldı. 2002 - 2007 yılları arasında Dokuz Eylül
            Üniversitesi Tıp Fakültesi Kardiyoloji Anabilim Dalı’nda uzmanlık
            eğitimini sürdürdü. Tıpta uzmanlık eğitimi sırasında 2006 – 2009
            yıllarında “ ACTIVE-A”, “ ACTIVE-I” adlı uluslararası projelerde
            Türkiye’den araştırmacı olarak görev aldı. 2007 yılında “ Tip II
            diabetes mellitus hastalarında endotel disfonksiyonunun ve karotis
            intima media kalınlığının koroner arter hastalığı için öngördürücü
            yeri var mıdır? ” başlıklı tıpta uzmanlık bitirme teziyle ihtisasını
            tamamlayarak Kardiyoloji (Kalp ve Damar Hastalıkları) Uzmanı
            unvanını aldı.
          </AboutDesc>

          <Interest>
            <InterestTitle>Başlıca İlgi Alanları</InterestTitle>
            <InteresList>
              <InteresItem>
                <BsCheckCircleFillIcon></BsCheckCircleFillIcon>Kalp Hastaliklari
              </InteresItem>
              <InteresItem>
                <BsCheckCircleFillIcon></BsCheckCircleFillIcon>Kalp Hastaliklari
              </InteresItem>
              <InteresItem>
                <BsCheckCircleFillIcon></BsCheckCircleFillIcon>Kalp Hastaliklari
              </InteresItem>
              <InteresItem>
                <BsCheckCircleFillIcon></BsCheckCircleFillIcon>Kalp Hastaliklari
              </InteresItem>
              <InteresItem>
                <BsCheckCircleFillIcon></BsCheckCircleFillIcon>Kapak
                hastalıkları
              </InteresItem>
              <InteresItem>
                <BsCheckCircleFillIcon></BsCheckCircleFillIcon>Kapak
                hastalıkları
              </InteresItem>
            </InteresList>
          </Interest>
        </AboutContent>
      </AboutContainer>
    </Container>
  );
};

export default About;
