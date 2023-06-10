import React, { useState } from 'react';
import SkillCard from './SkillCard';
import styles from '../styles/carousel.module.scss';

const Carousel = ({skills}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((oldIndex) => oldIndex === 0 ? skills.length - 1 : oldIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex((oldIndex) => oldIndex === skills.length - 1 ? 0 : oldIndex + 1);
  };

  return (
    <div className={styles['carousel']}>
      <button className={`${styles['nav-button']} ${styles.prev}`} onClick={handlePrev}>&lt;</button>
      <div className={styles['card-holder']}>
        {skills.map((skill, index) => {
        const isActive = index === activeIndex;
        const isPrev = index === ((activeIndex - 1 + skills.length) % skills.length);
        const isNext = index === ((activeIndex + 1) % skills.length);
        return (
          <div 
            className={`
              ${styles['card-container']} 
              ${isActive ? styles.active : ''} 
              ${isPrev ? styles.prev : ''}
              ${isNext ? styles.next : ''}
            `}
            key={skill.id}
          >
            <SkillCard {...skill} />
          </div>
        );
      })}
      </div>
      <button className={`${styles['nav-button']} ${styles.next}`} onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Carousel;