
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import styles from './ConnectWithUs.module.css';


const ConnectWithUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      ref={ref}
      className={`${styles.appContainer} roboto-regular ${inView ? styles.fadeIn : ''}`}
    >
      <Link 
        to="/contact" 
        className={styles.neonLinkButton} 
        aria-label="Contact Us"
        onClick={handleScrollToTop} // Scroll to top on click
      >
        Cont<span>a</span>ct Us
      </Link>
    </div>
  );
};

export default ConnectWithUs;
