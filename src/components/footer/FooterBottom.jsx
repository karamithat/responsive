import styled from "styled-components";
import egegen from "../../assets/img/egegen.png";
import { mobile } from "../../responsive";
import { tablet } from "../../responsive";

const Container = styled.div`
  height: 9rem;
  width: 100%;
  overflow: hidden;
  margin-top: 1rem;
  ${mobile({
    height: "auto",
  })}
  ${tablet({
    height: "auto",
  })}
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${mobile({
    display: "flex",
    flexDirection: "column",
  })}
  ${tablet({
    display: "flex",
    flexDirection: "column",
  })}
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 15px;
  cursor: pointer;
  ${mobile({
    margin: "0.2rem",
  })}
  ${tablet({
    margin: "0.2rem",
  })}
`;
const Copyright = styled.div`
  text-align: center;
  ${mobile({
    margin: "1rem",
  })}
`;
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Egegen = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FooterBottom = () => {
  return (
    <Container>
      <List>
        <ListItem>Anasayfa</ListItem>
        <ListItem>|</ListItem>
        <ListItem>Hakkında</ListItem>
        <ListItem>|</ListItem>
        <ListItem>Uzmanlık Alanları</ListItem>
        <ListItem>|</ListItem>
        <ListItem>Hastalar için Bilgiler</ListItem>
        <ListItem>|</ListItem>
        <ListItem>İletişim </ListItem>
      </List>
      <Copyright>
        © Doç. Dr. Zehra İlke Akyıldız 2022 | Tüm hakları saklıdır
      </Copyright>
      <Logo>
        <Egegen src={egegen}></Egegen>
      </Logo>
    </Container>
  );
};

export default FooterBottom;
