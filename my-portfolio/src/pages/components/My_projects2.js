import React from "react";
import {
  Box,
  Grid,
  Heading,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import ProjectCard from "./ProjectCard";
import SpecialProjectCard from "./SpecialProjectCard";

const MyProjects = () => {
  const { t } = useTranslation("common");
  const bg = useColorModeValue("#e0daba", "#212e40");
  const bgSpecial = useColorModeValue("#f9f4da", "#0e1a29");
  const shadowColor = useColorModeValue("#0e1a29B3", "#f9f4daB3");
  const isLightMode = useColorModeValue(true, false);

  const gridTemplateColumns = useBreakpointValue({
    base: null,
    md: "repeat(2, 1fr)",
  });
  const GridOrBox = gridTemplateColumns ? Grid : Box;
  const maxW = useBreakpointValue({ base: "80%", sm: "70%", md: "60%" });
  const m = useBreakpointValue({ base: 1, sm: 12, md: 16 });
  const boxShadow = useBreakpointValue({
    base: "none",
    md: "0px 10px 15px -3px rgba(4, 157, 201, 0.8), 0px 4px 6px -2px rgba(4, 157, 201, 0.6)",
  });
  const gridMinHeight = useBreakpointValue({ base: "auto", md: "800px" });

  const projects = [
    {
      id: "artificiallifecoach",
      title: "Artificial Life Coach",
      imgSrc: "/projects/ALC3.png",
      alt: "HomePage Artificial Life Coach",
      role: t("artificiallifecoach.role"),
      description: t("artificiallifecoach.description"),
      techStack: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "Chakra UI",
        "PosgreSQL",
        "Sequelize",
        "JWT",
        "Bcrypt",
        "Framer",
      ],
      githubUrl: "https://github.com/roissi/ALC_client",
      liveUrl: "https://artificial-life-coach.vercel.app/",
    },
    {
      id: "telegraphe",
      title: "Télégraphe",
      imgSrc: "/projects/telegraphe2.png",
      alt: "HomePage Télégraphe",
      role: t("telegraphe.role"),
      description: t("telegraphe.description"),
      techStack: [
        "Framer",
        "React",
        "Next.js",
        "Bootstrap",
        "Node.js",
        "Supabase",
        "Lucide",
      ],
      githubUrl: "https://github.com/roissi/Neo-Telegraphe",
      liveUrl: "https://neo-telegraphe.vercel.app/",
    },
    {
      id: "cynoche",
      title: "CyNoche",
      imgSrc: "/projects/CyNoche_1.png",
      alt: "HomePage Cynoche",
      role: t("cynoche.role"),
      description: t("cynoche.description"),
      techStack: [
        "React",
        "Chakra UI",
        "Node.js",
        "Express",
        "PosgreSQL",
        "Winston/Papertrail",
      ],
      githubUrl: "https://github.com/roissi/CyNoche",
      liveUrl: "https://cynoche.vercel.app/",
    },
    {
      id: "jadopte",
      title: "J'adopte un humain",
      imgSrc: "/projects/Adopte_1.png",
      alt: "HomePage J'adopte un humain",
      role: t("jadopte.role"),
      description: t("jadopte.description"),
      techStack: [
        "React",
        "Sass",
        "Node.js",
        "Express",
        "PosgreSQL",
        "JWT",
        "Bcrypt",
        "Swagger",
        "Jest",
      ],
      githubUrl: "https://github.com/roissi/JadopteUnHumain",
      liveUrl: "https://j-adopte-un-humain.netlify.app/",
    },
    {
      id: "donefficace",
      title: "Don Efficace",
      imgSrc: "/projects/DE_1.png",
      alt: "HomePage Don Efficace",
      role: t("donefficace.role"),
      description: t("donefficace.description"),
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "Jest",
        "Sanity",
      ],
      liveUrl: "https://givingwhatwecan-git-french-gwwc-centreea.vercel.app/fr",
    },

    {
      id: "portfolio",
      title: t("portfolio.title"),
      imgSrcLight: "/projects/Portfolio_dark.png",
      imgSrcDark: "/projects/Portfolio_light.png",
      alt: "HomePage protfolio",
      role: t("portfolio.role"),
      description: t("portfolio.description"),
      techStack: [
        "React",
        "Next.js",
        "Chakra UI",
        "Framer",
        "Node.js",
        "Express",
      ],
      githubUrl: "https://github.com/roissi/Portfolio-roissi",
      liveUrl: "https://portfolio-roissi.vercel.app/",
    },
    {
      id: "yourproject",
      title: t("yourproject.title"),
      imgSrcLight: "/projects/yourproject_dark.png",
      imgSrcDark: "/projects/yourproject_light.png",
      alt: "HomePage VotreProjet",
      role: t("yourproject.role"),
      description: t("yourproject.description"),
      techStack: [""],
      githubUrl: "https://xxx",
    },
  ];

  return (
    <Box py={4} textAlign="center" letterSpacing="wide">
      <Heading
        as="h2"
        size="3xl"
        mb={20}
        style={{
          textShadow: `-1px 0 #049dc9, 0 1px #049dc9, 5px 0 #049dc9, 0 -5px #049dc9`,
        }}
        id="my-projects"
        paddingTop="100px"
        marginTop="-100px"
        bg="transparent"
      >
        {t("title.works")}
      </Heading>
      <GridOrBox templateColumns={gridTemplateColumns} gap={6} m={m}>
        {projects.map((project, index) =>
          project.title === t("yourproject.title") ? (
            <SpecialProjectCard
              key={index}
              project={project}
              isLightMode={isLightMode}
              shadowColor={shadowColor}
              maxW={maxW}
              bgSpecial={bgSpecial}
              boxShadow={boxShadow}
              minHeight={gridMinHeight}
              t={t}
            />
          ) : (
            <ProjectCard
              key={index}
              project={project}
              isLightMode={isLightMode}
              shadowColor={shadowColor}
              maxW={maxW}
              bg={bg}
              boxShadow={boxShadow}
              minHeight={gridMinHeight}
              t={t}
            />
          ),
        )}
      </GridOrBox>
    </Box>
  );
};

export default MyProjects;
