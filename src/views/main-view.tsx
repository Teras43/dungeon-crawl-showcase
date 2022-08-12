import { Navigation, Card } from "../components";
import styled from "styled-components";

const MainView = () => {
  const imgPaths = require.context(
    "../assets/images/cards/",
    false,
    /\.(png|jpe?g|svg)$/
  );

  const joinPaths = (paths: any) => {
    const imgs = {};
    paths
      .keys()
      // @ts-ignore
      .forEach((path: any) => (imgs[path.replace("./", "")] = paths(path)));
    return imgs;
  };
  const images = joinPaths(imgPaths);

  console.log("images: ", images);

  const cards = [
    {
      name: "Alessandra",
      // @ts-ignore
      cardImg: images["alessandra_v2.jpeg"],
    },
    {
      name: "Ambush",
      // @ts-ignore
      cardImg: images["ambush_promo.jpeg"],
    },
    {
      name: "Asylum Inmate",
      // @ts-ignore
      cardImg: images["asylum_inmate_v2.jpeg"],
    },
    {
      name: "Back-Alley Vampire",
      // @ts-ignore
      cardImg: images["back-alley_vampire_v2.jpeg"],
    },
    {
      name: "Bio-Hazard Crew",
      // @ts-ignore
      cardImg: images["bio-hazard_crew_v2.jpeg"],
    },
    {
      name: "Bounty Hunter",
      // @ts-ignore
      cardImg: images["bounty_hunter_v2.jpeg"],
    },
    {
      name: "Child Vampire",
      // @ts-ignore
      cardImg: images["child_vampire_v2.jpeg"],
    },
    {
      name: "Detective",
      // @ts-ignore
      cardImg: images["detective_v2.jpeg"],
    },
    {
      name: "Feral Dog",
      // @ts-ignore
      cardImg: images["feral_dog_promo.jpeg"],
    },
    {
      name: "Gorger",
      // @ts-ignore
      cardImg: images["gorger_promo.jpeg"],
    },
    {
      name: "Haunting Child",
      // @ts-ignore
      cardImg: images["haunting_child_v2.jpeg"],
    },
    {
      name: "Lauren Bates",
      // @ts-ignore
      cardImg: images["lauren_bates_v2.jpeg"],
    },
    {
      name: "Man In Black",
      // @ts-ignore
      cardImg: images["man_in_black_v2.jpeg"],
    },
    {
      name: "Monster Hunters",
      // @ts-ignore
      cardImg: images["monster_hunters_v2.jpeg"],
    },
    {
      name: "Occultist Priest",
      // @ts-ignore
      cardImg: images["occultist_priest_promo.jpeg"],
    },
    {
      name: "Police Officer",
      // @ts-ignore
      cardImg: images["police_officer_v2.jpeg"],
    },
    {
      name: "Serial Killer",
      // @ts-ignore
      cardImg: images["serial_killer_v2.jpeg"],
    },
    {
      name: "Succubus",
      // @ts-ignore
      cardImg: images["succubus_promo.jpeg"],
    },
    {
      name: "Task Force",
      // @ts-ignore
      cardImg: images["task_force_v2.jpeg"],
    },
    {
      name: "The Archbishop",
      // @ts-ignore
      cardImg: images["the_archbishop_v2.jpeg"],
    },
    {
      name: "The Peeker",
      // @ts-ignore
      cardImg: images["the_peeker_v2.jpeg"],
    },
    {
      name: "The Restless",
      // @ts-ignore
      cardImg: images["the_restless.jpeg"],
    },
    {
      name: "The Revenant",
      // @ts-ignore
      cardImg: images["the_revenant_v2.jpeg"],
    },
    {
      name: "Werewolf",
      // @ts-ignore
      cardImg: images["werewolf.jpeg"],
    },
    {
      name: "Wight",
      // @ts-ignore
      cardImg: images["wight.jpeg"],
    },
    {
      name: "Wolf Dog",
      // @ts-ignore
      cardImg: images["wolf_dog.jpeg"],
    },
    {
      name: "Zombie",
      // @ts-ignore
      cardImg: images["zombie_v2.jpeg"],
    },
  ];

  const allCards = cards.map((card, index) => {
    return (
      <CardWrap className="py-3">
        <Card key={index + 1} name={card.name} img={card.cardImg} />
      </CardWrap>
    );
  });

  return (
    <PageWrap>
      <Navigation></Navigation>
      <BodyWrap className="container">{allCards}</BodyWrap>
    </PageWrap>
  );
};

// Styles
const PageWrap = styled.div`
  height: 100vh;
`;

const BodyWrap = styled.div`
  height: 100%;
  background-color: #282828;
  overflow: scroll;
`;

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
`;

// Exports
export default MainView;
