import React from "react";
import styled from "styled-components";
import logo from "../../assets/img/footer.png";
import { FiMapPin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { mobile } from "../../responsive";
import { tablet } from "../../responsive";
import { laptop } from "../../responsive";
import { large } from "../../responsive";


const Container = styled.div`
  height: 18rem;
  background-color: #091d3e;
  ${mobile({
    height: "auto",
  })}
  ${tablet({
    height: "auto",
  })}
    ${laptop({
    height: "auto",
    })}
`;
const Top = styled.div`
  margin: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    width: "80%",
  })}
  ${tablet({
    display: "flex",
    flexDirection: "column",
    width: "80%",
  })}
   ${laptop({
    display: "flex",
    flexDirection: "column",
    width: "80%",
  })}
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({
    width: "100%",
  })}
  ${tablet({
    width: "100%",
  })}

`;
const Logo = styled.img`
  margin-top: 1rem;
  ${mobile({
    width: "100%",
    margin: "0",
  })}
  ${tablet({
    width: "100%",
    margin: "0",
  })}

`;
const Right = styled.div`
  ${mobile({
    display: "flex",
    flexDirection: "column",
    margin: 0,
    width: "100%",
  })}
  ${tablet({
    display: "flex",
    flexDirection: "column",
    margin: 0,
    width: "100%",
  })}
  ${laptop({
    marginLeft: "12rem",
  })}
  


`;
const Hr = styled.hr`
  border: none;
  border-left: 1px solid hsla(200, 10%, 50%, 100);
  height: 3rem;
  width: 2px;
  padding: 0 0.5rem;
  margin-left: 2rem;
  ${mobile({
    display: "none",
  })}
  ${tablet({
    display: "none",
  })}
`;
const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #12346b;
  background-color: #12346b;
  padding: 0.8rem 5rem;
  margin-right: 5rem;
  ${large({
   padding: "0.7rem 1rem",
  })}
  

  ${mobile({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    fontSize: "0.7rem",
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
  })}

  ${tablet({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    fontSize: "1rem",
    width: "80%",
    marginLeft: "1rem",
    backgroundColor: "transparent",
    border: "none",
  })}
`;
const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  })}
  ${tablet({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
  })}
`;


const ContactTitle = styled.div`
  color: #fff;
  margin-left: 1rem;
  ${laptop({
   fontSize: "0.8rem",
  })}

  ${large({
   fontSize: "0.8rem",
  })}
`;
const Bottom = styled.div`
  margin: 1rem 5rem;
  color: #707070;
  font-weight: bold;
`;
const BottomTitle = styled.h1`
  font-size: 0.7rem;
`;
const BottomDesc = styled.p`
  font-size: 0.8rem;
  margin: 0;
  ${mobile({
    fontSize: "0.7rem",
  })}
  ${tablet({
    fontSize: "0.7rem",
  })}
`;

const FooterTop = () => {
  return (
    <Container>
      <Top>
        <Left>
          <Logo src={logo}></Logo>
        </Left>
        <Right>
          <Contact>
            <ContactItem>
              <FiMapPin style={{ fontSize: "3rem", padding: "5px" ,color:"#0092ff"}}
             
              />
              <ContactTitle>
                1420 Sok. No:82 Azim apt. Kat:4 <br /> Daire:7 Alsancak - İZMİR
              </ContactTitle>
              <Hr />
            </ContactItem>
            <ContactItem>
              <FiMail style={{ fontSize: "3rem", padding: "5px" ,color:"#0092ff"}} />
              <ContactTitle>
                Mail <br />
                ilke@akyildiz.net
              </ContactTitle>
              <Hr />
            </ContactItem>
            <ContactItem>
                
              <FiPhone style={{ fontSize: "3rem", padding: "5px" ,color:"#0092ff"}} />
              <ContactTitle>
                Randevu <br /> 0232 422 23 25 - 0533 422 09 80
              </ContactTitle>
            </ContactItem>
          </Contact>
        </Right>
      </Top>
      <Bottom>
        <BottomTitle>Sınırlı Sorumluluk Beyanı :</BottomTitle>
        <BottomDesc>
          Web sitemizin içeriği, ziyaretçiyi bilgilendirmeye yönelik
          hazırlanmıştır. Sitede yer alan bilgiler, hiçbir zaman bir hekim
          tedavisinin ya da konsültasyonunun yerini alamaz. Bu kaynaktan yola
          çıkarak, ilaç tedavisine başlanması ya da mevcut tedavinin
          değiştirilmesi kesinlikte tavsiye edilmez. Web sitemizin içeriği, asla
          kişisel teşhis ya da tedavi yönteminin seçimi için
          değerlendirilmemelidir. Bu sitedeki bilgilerin hekim kontrolü
          olmaksızın uygulanması durumunda oluşabilecek her tür şikayet ve
          durumdan, Doç. Dr. Zehra İlke AKYILDIZ sorumlu tutulamaz. Sitede kanun
          içeriğine aykırı ilan ve reklam yapma kastı bulunmamaktadır.
        </BottomDesc>
      </Bottom>
    </Container>
  );
};

export default FooterTop;
