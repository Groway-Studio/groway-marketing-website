import { Testimonials } from "../../components";
import styles from "./testimonials_container.module.scss";

const TestimonialsContainer = () => {
  return (
    <div className={styles.testimonials_container}>
      <Testimonials />
    </div>
  );
};

export default TestimonialsContainer;
