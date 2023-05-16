import React, { useRef } from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const Section = styled.div`
  margin: 50px 0;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  @media (max-width: 960px) {
    display: grid;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 26px;
`;

const Card = styled.div`
  width: 350px;
  border: 1px solid #5f5f5f;
  border-radius: 12px;
  height: 400px;
  position: relative; /* Set parent position to relative */
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
`;

const CardTitle = styled.h3``;

const A = styled.a`
  color: #8ef511;
  font-size: 18px;
  text-decoration: none;
  margin-top: 15px;
`;
const A2 = styled.a`
  color: #898989;
  font-size: 18px;
  text-decoration: none;
  margin-top: 15px;
`;

const Git = styled.a`
  color: #ffff;
  font-size: 30px;
  margin-left: 300%;
`;
const Flex = styled.div`
  display: flex;
  margin: 0 15px;
`;
const FlexBot = styled.div`
  margin: 0 15px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`;
const Tech = styled.p`
  color: #8ef511;
  margin-right: 10px;
  font-size: 12px;
  height: 30px;
`;
const Stack = styled.p`
  color: #f99d47;
  font-size: 12px;
`;

const P = styled.p`
  text-align: justify;
  font-size: 12px;
  margin: 0 15px;
`;

const Video = styled.video`
  width: 100%;
  height: 390px;
  margin: 0 10px;
`;
const Source = styled.source``;

const VideoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #5f5f5f;
  border-radius: 12px;
  margin: 10px 0;
  @media (max-width: 960px) {
    display: grid;
    justify-content: center;
  }
`;

const FullscreenImage = styled.img`
  margin: 8px;
  width: 100%;
  height: 170px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 960px) {
    width: 50%;
  }
`;

function Projects() {
  const imageRef = useRef(null);

  const toggleFullscreen = () => {
    const element = imageRef.current;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen();
    }
  };
  return (
    <Section>
      <Title>Projects</Title>
      <VideoDiv>
        <div className="div">
          <CardTitle>Track Financial</CardTitle>
          <P>
            This project is created for exercise to practice Spring Boot 3 and
            working with databases. The web app is designed for tracking your
            money flow, where each user has their own account. If a user doesn't
            have an account, they can create one and add their incomes,
            expenses. User can also see list of all incomes & expenses and
            delete them in table
          </P>
          <FullscreenImage
            src="./img/swagger.png"
            alt="swagger"
            ref={imageRef}
            onClick={toggleFullscreen}
          />
        </div>
        <Video controls autoplay muted>
          <Source src="./img/moneytrack.mov" type="video/mp4" />
        </Video>
      </VideoDiv>
      <Container>
        <Card>
          <CardTitle>PokemonDex</CardTitle>
          <Img src="./img/bulb.png" alt="pokemon"></Img>
          <Flex>
            <Tech>Tech stack: </Tech>
            <Stack> Vite + React + TypeScript</Stack>
          </Flex>
          <P>
            This project is created for exercice, to practise React.js & working
            with API's. It's created with Vite, TypeScript and Yarn packet
            manager
          </P>
          <FlexBot>
            <A
              href="https://pokemon-4e5zz97fj-flatronw2.vercel.app/"
              target="_blank"
            >
              Live
            </A>

            <Git
              href="https://github.com/aleksa0001/pokemon-dex"
              target="_blank"
            >
              <AiFillGithub />
            </Git>
          </FlexBot>
        </Card>
        <Card>
          <CardTitle>Portfolio</CardTitle>
          <Img src="./img/port.png" alt="pokemon"></Img>
          <Flex>
            <Tech>Tech stack: </Tech>
            <Stack> Vite + React, Three.js</Stack>
          </Flex>
          <P>
            Portfolio is created for exercice purpose
          </P>
          <FlexBot>
            <A href="https://aca-hadzic.vercel.app/" target="_blank">
              Live
            </A>

            <Git href="https://github.com/aleksa0001/Portfolio" target="_blank">
              <AiFillGithub />
            </Git>
          </FlexBot>
        </Card>
        <Card>
          <CardTitle>Library</CardTitle>
          <Img src="./img/books.jpeg" alt="books"></Img>
          <Flex>
            <Tech>Tech stack: </Tech>
            <Stack> React, Spring boot 3, PostgreSQL</Stack>
          </Flex>
          <P>
            Library app has authentication & authorization with JWT token,
            backend is build with java 17 & Gradle while frontend is build with
            React.js and yarn packet manager
          </P>
          <FlexBot>
            <A2 href="">Live</A2>
            <Git href="https://github.com/aleksa0001/library" target="_blank">
              <AiFillGithub />
            </Git>
          </FlexBot>
        </Card>
      </Container>
    </Section>
  );
}

export default Projects;
