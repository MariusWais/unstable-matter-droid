'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <a href="#explore"><img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" /></a>
      <img src="/logo-white.png" alt="Unstable Matter Logo" className="w-[100px] h-[100px] object-contain" />
      <a href="mailto:unstable@wais-online.de"><img src="/send.svg" alt="send" className="w-[24px] h-[24px] object-contain pointer" /></a>
    </div>
  </motion.nav>
);

export default Navbar;
