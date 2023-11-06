import React, { useState } from "react";
import {
  Box,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import ProjectCard from "./ProjectCard";
import ChakraCarousel from "./ChakraCarousel";

const MyProjects = () => {
  const { t } = useTranslation("common");
  const [activeProject, setActiveProject] = useState(0);
  const maxW = useBreakpointValue({
    base: "100%",
    sm: "100%",
    md: "85%",
    lg: "85%",
  });
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === "light";

  const projects = [
    {
      id: "artificiallifecoach",
      title: "Artificial Life Coach",
      imgSrc: "/projects/ALC1.png",
      imgSrc2: "/projects/ALC3.png",
      imgSrc3: "/projects/ALC2.png",
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
      imgSrc: "/projects/telegraphe1.png",
      imgSrc2: "/projects/telegraphe2.png",
      imgSrc3: "/projects/telegraphe3.png",
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
      imgSrc2: "/projects/CyNoche_3.png",
      imgSrc3: "/projects/CyNoche_4.png",
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
      imgSrc2: "/projects/Adopte_2.png",
      imgSrc3: "/projects/Adopte_4.png",
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
      imgSrc2: "/projects/DE_2.png",
      imgSrc3: "/projects/DE_3.png",
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
      imgSrcLight2: "/projects/Portfolio_dark2.png",
      imgSrcLight3: "/projects/Portfolio_dark3.png",
      imgSrcDark: "/projects/Portfolio_light.png",
      imgSrcDark2: "/projects/Portfolio_light2.png",
      imgSrcDark3: "/projects/Portfolio_light3.png",
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
    // {
    //   id: "yourproject",
    //   title: t('yourproject.title'),
    //   imgSrcLight: "/projects/yourproject_dark.png",
    //   imgSrcDark: "/projects/yourproject_light.png",
    //   alt: "HomePage VotreProjet",
    //   role: t('yourproject.role'),
    //   description: t('yourproject.description'),
    //   techStack: [""],
    //   githubUrl: "https://xxx",
    // },
  ];

  return (
    <Box py={4} textAlign="center" letterSpacing="wide" pb="14">
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

      <Box maxW={maxW} mx="auto" align-self="end">
        <ChakraCarousel
          projects={projects}
          isLightMode={isLightMode}
          index={activeProject}
          onChangeIndex={(index) => setActiveProject(index)}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </ChakraCarousel>
      </Box>
    </Box>
  );
};

export default MyProjects;
