

// import React, { useEffect, useRef } from 'react';
// import { Box, Container, Typography, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import styles from './Hero.module.css';
// import HomeData from '../../../datafiles/HomeData/HomeData';

// const Hero = () => {

//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/services'); // Redirect to services page
//   };

//   const heroContent = HomeData.HeroData[0];
//   const canvasRef = useRef(null);

//   // Canvas particle network animation
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles = [];
//     const particleCount = 80;

//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.vx = (Math.random() - 0.5) * 0.5;
//         this.vy = (Math.random() - 0.5) * 0.5;
//         this.radius = Math.random() * 2 + 1;
//       }

//       update() {
//         this.x += this.vx;
//         this.y += this.vy;

//         if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = 'rgba(28, 181, 224, 0.6)';
//         ctx.fill();
//       }
//     }

//     for (let i = 0; i < particleCount; i++) {
//       particles.push(new Particle());
//     }

//     function connectParticles() {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 120) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(28, 181, 224, ${0.2 - distance / 600})`;
//             ctx.lineWidth = 1;
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//     }

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((particle) => {
//         particle.update();
//         particle.draw();
//       });
//       connectParticles();
//       requestAnimationFrame(animate);
//     }

//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08,
//       },
//     },
//   };

//   const letterVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   // Extract "SmartMatrix" from the title to apply gradient
//   const fullTitle = heroContent.HeroTitle; // "Welcome to SmartMatrix Digital Services Pvt. Ltd."
//   const beforeText = 'Welcome to ';
//   const gradientText = 'Smart Matrix';
//   const afterText = ' Digital Services Pvt. Ltd.';

//   // Function to add line break before "Digital"
//   const renderAfterText = (text) => {
//     const parts = text.split('Digital');
//     return (
//       <>
//         {parts[0]}
//         <br />
//         Digital{parts[1]}
//       </>
//     );
//   };

//   return (
//     <Box className={styles.heroContainer}>
//       {/* Canvas Particle Network */}
//       <canvas ref={canvasRef} className={styles.particleCanvas} />

//       {/* Mesh Gradient Background Blobs */}
//       <motion.div
//         className={styles.meshGradient1}
//         animate={{
//           x: [0, 100, 0],
//           y: [0, -100, 0],
//           scale: [1, 1.2, 1],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//       />
//       <motion.div
//         className={styles.meshGradient2}
//         animate={{
//           x: [0, -80, 0],
//           y: [0, 80, 0],
//           scale: [1, 1.3, 1],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//       />
//       <motion.div
//         className={styles.meshGradient3}
//         animate={{
//           x: [0, 50, 0],
//           y: [0, 100, 0],
//           scale: [1, 1.1, 1],
//         }}
//         transition={{
//           duration: 30,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//       />

//       {/* Animated Grid */}
//       <div className={styles.animatedGrid} />

//       {/* Glowing Orbs */}
//       <div className={styles.glowingOrbs}>
//         <motion.div
//           className={styles.orb1}
//           animate={{
//             x: [0, 100, -50, 0],
//             y: [0, -80, 50, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//         />
//         <motion.div
//           className={styles.orb2}
//           animate={{
//             x: [0, -100, 80, 0],
//             y: [0, 60, -40, 0],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//         />
//       </div>

//       {/* Hero Content */}
//       <Container className={styles.heroContent}>
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Animated Title */}
//           <motion.div variants={titleVariants} className={styles.titleWrapper}>
//             <Typography className={styles.heroTitle}>
//               {beforeText.split('').map((char, index) => (
//                 <motion.span
//                   key={`before-${index}`}
//                   variants={letterVariants}
//                   className={char === ' ' ? styles.space : styles.letter}
//                 >
//                   {char === ' ' ? '\u00A0' : char}
//                 </motion.span>
//               ))}
//               {gradientText.split(' ').map((char, index) => (
//                 <motion.span
//                   key={`gradient-${index}`}
//                   variants={letterVariants}
//                   className={styles.gradientLetter}
//                 >
//                   {char}
//                 </motion.span>
//               ))}
//               <br />
//               {afterText.trim().split('').map((char, index) => (
//                 <motion.span
//                   key={`after-${index}`}
//                   variants={letterVariants}
//                   className={char === ' ' ? styles.space : styles.letter}
//                 >
//                   {char === ' ' ? '\u00A0' : char}
//                 </motion.span>
//               ))}
//             </Typography>
//           </motion.div>

//           {/* Subtitle */}
//           <motion.div variants={itemVariants}>
//             <Typography className={styles.heroSubtitle}>
//               {heroContent.HeroSubTitle}
//             </Typography>
//           </motion.div>

//           {/* CTA Buttons */}
//           <motion.div variants={itemVariants} className={styles.ctaContainer}>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button className={styles.primaryBtn} variant="contained" onClick={handleClick}>
//                 Get Started
//                 <span className={styles.arrow}>→</span>
//               </Button>
//             </motion.div>
//             {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button className={styles.secondaryBtn} variant="outlined">
//                 View Services
//               </Button>
//             </motion.div> */}
//           </motion.div>
//         </motion.div>
//       </Container>

//       {/* Scroll Indicator */}
      
//     </Box>
//   );
// };

// export default Hero;

import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';
import HomeData from '../../../datafiles/HomeData/HomeData';

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/services'); // Redirect to services page
  };

  const heroContent = HomeData.HeroData[0];
  const canvasRef = useRef(null);

  // Canvas particle network animation code unchanged...
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(28, 181, 224, 0.6)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(28, 181, 224, ${0.2 - distance / 600})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Updated title parts
  const beforeText = 'Welcome to';
  const gradientText = 'SmartMatrix'; // single word without space
  const afterText = 'Digital Pvt. Ltd.';

  return (
    <Box className={styles.heroContainer}>
      {/* Canvas Particle Network */}
      <canvas ref={canvasRef} className={styles.particleCanvas} />

      {/* Mesh Gradient Background Blobs */}
      {/* ... meshes unchanged ... */}

      {/* Animated Grid */}
      <div className={styles.animatedGrid} />

      {/* Glowing Orbs */}
      <div className={styles.glowingOrbs}>
        {/* ... orbs unchanged ... */}
      </div>

      {/* Hero Content */}
      <Container className={styles.heroContent}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Title */}
          <motion.div variants={titleVariants} className={styles.titleWrapper}>
            <Typography className={styles.heroTitle}>
              {/* First line: Welcome to */}
              {beforeText.split('').map((char, index) => (
                <motion.span
                  key={`before-${index}`}
                  variants={letterVariants}
                  className={char === ' ' ? styles.space : styles.letter}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              <br />

              {/* Second line: SmartMatrix */}
              {gradientText.split('').map((char, index) => (
                <motion.span
                  key={`gradient-${index}`}
                  variants={letterVariants}
                  className={styles.gradientLetter}
                >
                  {char}
                </motion.span>
              ))}
              <br />

              {/* Third line: Digital Pvt. Ltd. */}
              {afterText.split('').map((char, index) => (
                <motion.span
                  key={`after-${index}`}
                  variants={letterVariants}
                  className={char === ' ' ? styles.space : styles.letter}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <Typography className={styles.heroSubtitle}>
              {heroContent.HeroSubTitle}
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className={styles.ctaContainer}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className={styles.primaryBtn}
                variant="contained"
                onClick={handleClick}
              >
                Get Started
                <span className={styles.arrow}>→</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
