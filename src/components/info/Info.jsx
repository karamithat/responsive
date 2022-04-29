import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import { info } from "./data.js";
import { mobile } from "../../responsive";
import { tablet } from "../../responsive";
import { laptop } from "../../responsive";
import { large } from "../../responsive";


const Container = styled.div`
  height: 60rem;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    #091d3e 0%,
    #091d3e 40%,
    #fff 40%,
    #fff 100%
  );

  ${mobile({
    height: "150rem",
  })}
  ${tablet({
    height: "195rem",
  })}

${laptop({
    height: "110rem",
    marginTop: "5rem",
  })}
    ${large({
    height: "auto",
  })}
`;



const Top = styled.div`
  margin: 4rem 6rem 0 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    margin: "0 2rem",
  })}

  ${tablet({
    margin: "0 2rem",
  })}

${laptop({
    margin: "2rem 2rem",
  })}
`;
const Icon = styled.span`
  font-size: 4rem;
  cursor: pointer;
  ${mobile({
    fontSize: "2rem",
    display: "flex",
  })}
  ${tablet({
    fontSize: "3rem",
    display: "flex",
  })}
  ${laptop({
    fontSize: "3.5rem",
    display: "flex",
  })}
`;

const TitleInfo = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  font-weight: 500;
  ${mobile({
    fontSize: "2rem",
  })}
  ${tablet({
    margin: "1rem 2rem",
    fontSize: "2rem",
  })}
`;

const DescInfo = styled.p`
  margin: 0 6rem;
  font-size: 1rem;
  color: #fff;
  line-height: 2rem;
  ${mobile({
    fontSize: "1rem",
    margin: "1rem 1rem ",
    lineHeight: "1.5rem",
  })}

  ${tablet({
    fontSize: "1.2rem",
    margin: "1rem 1rem ",
    lineHeight: "1.6rem",
  })}
   ${laptop({
    margin: "1rem 2rem",
    fontSize: "1rem",
    width: "80%",
  })}
`;

const Center = styled.div``;

// CARD CONTENT

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  width: 90%;
  margin-left: 5rem;
  margin-top: 2rem;
  background-color: #fff;
 


  ${mobile({
    margin: "0 1rem ",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  })}
  ${tablet({
    margin: "0 1rem ",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  })}
     ${laptop({
    margin: "1rem 1rem",
    width: "100%",
  })}
   ${large({
    justifyContent: "flex-start",
    width: "90%",
    gap: "1rem",
    
  })}
`;

const Card = styled.div`
  margin: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 20%;
  cursor: pointer;

  ${mobile({
    width: "80%",
  })}
  ${tablet({
    width: "80%",
  })}
     ${laptop({
    width: "35%",
  })}
    ${large({
    width: "25%",
  })}

`;
const CardHeader = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 17rem;
  object-fit: cover;
`;
const CardBody = styled.div`
  border: 1px solid #fff;
  position: relative;

  background-color: #fff;
`;

const Title = styled.p`
  text-indent: 1rem;
  line-height: 3rem;
  margin-left: 1rem;

  height: 3rem;

  bottom: 2rem;
  position: absolute;
  background-color: #fff;
  border-radius: 0.8rem;
  width: 90%;
  font-size: 0.7rem;
  font-weight: bold;
`;

const Hr = styled.hr`
  border: none;
  border-left: 4px solid #b00c1f;
  position: absolute;
  bottom: 0.4rem;
  height: 2.1rem;
  padding: 0 0.5rem;
  margin-left: 0;
  margin-top: 0.5rem;
`;

const Info = () => {
  return (
    <Container>
      <Top>
        <TitleInfo>Hastalar İçin Bilgiler</TitleInfo>
        <Icon>
          <BsArrowLeftCircle
            style={{ color: "#707070", marginRight: "1rem" }}
          />

          <BsArrowRightCircle style={{ color: "#B00C1F" }} />
        </Icon>
      </Top>

      <Center>
        <DescInfo>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore <br /> et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum.
          <br /> Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </DescInfo>
      </Center>
      <Bottom>
        {info.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <Image src={item.img} alt={item.title} />
            </CardHeader>
            <CardBody>
              <Title>
                {item.title}
                <Hr />
              </Title>
            </CardBody>
          </Card>
        ))}
      </Bottom>
    </Container>
  );
};

export default Info;
