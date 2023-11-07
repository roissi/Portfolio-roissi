import React, { useState, useEffect } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import SkillCard from "./SkillCard.js";
import { useTranslation } from "next-i18next";
import { useInView } from "react-intersection-observer";

export const SoftSkills = () => {
  const { t } = useTranslation("common");
  const [flippedCardId, setFlippedCardId] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const skills = [
    {
      id: "1",
      index: 0,
      skill: t("softskill1.skill"),
      description: t("softskill1.description"),
      example: t("softskill1.example"),
    },
    {
      id: "2",
      index: 1,
      skill: t("softskill2.skill"),
      description: t("softskill2.description"),
      example: t("softskill2.example"),
    },
    {
      id: "3",
      index: 2,
      skill: t("softskill3.skill"),
      description: t("softskill3.description"),
      example: t("softskill3.example"),
    },
    {
      id: "4",
      index: 3,
      skill: t("softskill4.skill"),
      description: t("softskill4.description"),
      example: t("softskill4.example"),
    },
    {
      id: "5",
      index: 4,
      skill: t("softskill5.skill"),
      description: t("softskill5.description"),
      example: t("softskill5.example"),
    },
    {
      id: "6",
      index: 5,
      skill: t("softskill6.skill"),
      description: t("softskill6.description"),
      example: t("softskill6.example"),
    },
    {
      id: "7",
      index: 6,
      skill: t("softskill7.skill"),
      description: t("softskill7.description"),
      example: t("softskill7.example"),
    },
    {
      id: "8",
      index: 7,
      skill: t("softskill8.skill"),
      description: t("softskill8.description"),
      example: t("softskill8.example"),
    },
  ];

  useEffect(() => {
    if (inView) {
      const flipCards = async () => {
        for (const skill of skills) {
          await new Promise((resolve) => setTimeout(resolve, 250));
          setFlippedCardId(skill.id);
        }
        await new Promise((resolve) => setTimeout(resolve, 250));
        setFlippedCardId(null);
      };
      flipCards();
    }
  }, [inView]);

  return (
    <Box py={6} textAlign="center" letterSpacing="wide" pb="10">
      <Heading
        as="h2"
        size="3xl"
        mb={20}
        style={{
          textShadow: `-1px 0 #02ad59, 0 1px #02ad59, 5px 0 #02ad59, 0 -5px #02ad59`,
        }}
        id="soft-skills"
        paddingTop="100px"
        marginTop="-100px"
        bg="transparent"
      >
        {t("title.softskills")}
      </Heading>
      <Flex ref={ref} justifyContent="space-around" wrap="wrap" gap="8">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            {...skill}
            isFlipped={flippedCardId === skill.id}
            flipCard={setFlippedCardId}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default SoftSkills;
