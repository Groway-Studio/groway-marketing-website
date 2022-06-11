import {
  FooterContainer,
  HeaderContainer,
  HowDoWeDoItContainer,
  OurServicesContainer,
  TestimonialsContainer,
  WhyChooseUsContainer,
} from "./containers";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <OurServicesContainer />
      <WhyChooseUsContainer />
      <HowDoWeDoItContainer />
      <TestimonialsContainer />
      <FooterContainer />
    </div>
  );
};

export default App;
