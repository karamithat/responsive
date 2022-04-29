import React from "react";
import styled from "styled-components";
import { blog } from "./data";
import { FiMoreHorizontal } from "react-icons/fi";
import { mobile } from "../../responsive";
import { tablet } from "../../responsive";
import { laptop } from "../../responsive";

const Container = styled.div`
  height: 41rem;
  background: #f8f8f8;
  ${mobile({
    height: "auto",
  })}
  ${tablet({
    height: "auto",
    margin: "0",
  })}
   ${laptop({
    height: "auto",
    margin: "0",
  })}
`;
const Top = styled.div`
  margin: 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  ${mobile({
    margin: "0",
  })}
  ${tablet({
    margin: "0",
  })}
`;
const BlogTitle = styled.h1`
  margin-top: 1rem;

  display: flex;
  margin-left: 6rem;
  font-size: 2rem;
  font-weight: 400;
  ${mobile({
    margin: "1rem",
  })}
  ${tablet({
    margin: "1rem",
  })}
`;
const BlogButton = styled.button`
  margin-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b00c1f;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  padding: 1rem 4rem;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  margin-right: 4rem;
  ${mobile({
    margin: 0,
    padding: "1rem 2rem",
  })}
  ${tablet({
    margin: "2rem",
    padding: "1rem 2rem",
  })}
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  ${mobile({
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  })}
  ${tablet({
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  })}
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 2rem 5rem;
  ${mobile({
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  })}
  ${tablet({
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  })}
`;
const Card = styled.div`
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 20%;
  cursor: pointer;
  ${mobile({
    width: "90%",
  })}
  ${tablet({
    width: "90%",
  })}
   ${laptop({
    width: "40%",
  })}
`;
const CardHeader = styled.div``;
const Image = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  line-height: 1.5rem;
`;
const Day = styled.span`
  font-size: 1rem;
  margin: 0;
  color: #b00c1f;
  padding: 2px 2px;
`;
const Title = styled.h4``;
const Desc = styled.p`
  font-size: 1rem;
  font-weight: lighter;
  margin-bottom: 2rem;
`;

const Bottom = styled.div``;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  color: #b00c1f;
  font-size: 3rem;
  overflow: hidden;
`;

const Blog = () => {
  return (
    <Container>
      <Top>
        <BlogTitle>Blog</BlogTitle>
        <BlogButton>Tümü</BlogButton>
      </Top>
      <Center>
        <CardContainer>
          {blog.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <Image src={item.img} alt={item.title} />
              </CardHeader>
              <CardBody>
                <Day>{item.day}</Day>
                <Title>{item.title}</Title>
                <Desc>{item.content}</Desc>
              </CardBody>
            </Card>
          ))}
        </CardContainer>
      </Center>
      <Bottom>
        <Icon>
          <FiMoreHorizontal style={{ cursor: "pointer" }} />
        </Icon>
      </Bottom>
    </Container>
  );
};

export default Blog;
