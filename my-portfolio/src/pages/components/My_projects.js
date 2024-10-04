import React, { useState, useMemo } from "react";
import {
  Box,
  Heading,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import ProjectCard from "./ProjectCard.js";
import Testimonials from "./Testimonials.js";
import ChakraCarousel from "./ChakraCarousel.js";

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

  const projects = useMemo(
    () => [
      {
        id: "serious",
        title: "Serious Publishing",
        imgSrc: "/projects/serious1.png",
        imgSrc2: "/projects/serious2.png",
        imgSrc3: "/projects/serious4.png",
        alt: "HomePage Serious Publishing",
        role: t("serious.role"),
        description: t("serious.description"),
        techStack: [
          "React",
          "Next.js",
          "Typescript",
          "Shadcn",
          "Node.js",
          "PostgreSQL",
          "Tailwind",
          "Framer-motion",
        ],
        githubUrl: "https://github.com/roissi",
        liveUrl: "https://www.serious-publishing.fr//",
      },
      {
        id: "clairios",
        title: "Clairios",
        imgSrc: "/projects/clairios1.png",
        imgSrc2: "/projects/clairios3.png",
        imgSrc3: "/projects/clairios2.png",
        alt: "HomePage Clairios",
        role: t("clairios.role"),
        description: t("clairios.description"),
        techStack: [
          "React",
          "Next.js",
          "Typescript",
          "Node.js",
          "Tailwind",
          "Framer-motion",
        ],
        githubUrl: "https://github.com/roissi",
        liveUrl: "https://clairios.com/",
      },
      {
        id: "sajinphoto",
        title: "Sajin Studio",
        imgSrc: "/projects/sajin1.png",
        imgSrc2: "/projects/sajin2.png",
        imgSrc3: "/projects/sajin3.png",
        alt: "HomePage Sajin Studio",
        role: t("sajinstudio.role"),
        description: t("sajinstudio.description"),
        techStack: [
          "React",
          "Next.js",
          "Typescript",
          "Node.js",
          "Express",
          "Chakra UI",
          "Bcrypt",
          "Framer-motion",
        ],
        githubUrl: "https://github.com/roissi",
        liveUrl: "https://studiosajin.eu/",
      },
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
          "Framer-motion",
        ],
        githubUrl: "https://github.com/roissi/ALC_client",
        liveUrl: "https://artificial-life-coach.vercel.app/",
      },
      {
        id: "christelmilhavet",
        title: "Christel Milhavet",
        imgSrc: "/projects/CM1.png",
        imgSrc2: "/projects/CM3.png",
        imgSrc3: "/projects/CM2.png",
        alt: "HomePage Christel Milhavet",
        role: t("christelmilhavet.role"),
        description: t("christelmilhavet.description"),
        techStack: [
          "React",
          "Next.js",
          "Typescript",
          "Node.js",
          "Tailwind",
          "Framer-motion",
        ],
        githubUrl: "https://github.com/roissi",
        liveUrl: "https://www.christelmilhavet.fr/",
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
        liveUrl:
          "https://givingwhatwecan-git-french-gwwc-centreea.vercel.app/fr",
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
          "Framer-motion",
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
    ],
    [t],
  );

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
          {projects.map(
            (project) =>
              project && <ProjectCard key={project.id} {...project} />,
          )}
        </ChakraCarousel>

        <Box id="testimonials" maxW={maxW} mx="auto" pt={6}>
          <Heading size="xl" my={5}>
            {t("title.testimonials")}
          </Heading>
          <Text fontSize={"xl"}>{t("title.introduction")}</Text>
          <Testimonials />
        </Box>
      </Box>
    </Box>
  );
};

export default MyProjects;
