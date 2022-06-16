import {
  FooterContainer,
  HeaderContainer,
  HowDoWeDoItContainer,
  OurServicesContainer,
  TestimonialsContainer,
  WhyChooseUsContainer,
} from "./containers";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <div className={styles.container}>
        <OurServicesContainer />
        <WhyChooseUsContainer />
        <HowDoWeDoItContainer />
        <TestimonialsContainer />
      </div>
      <FooterContainer />
    </div>
  );
};

export default App;
