
// import ContentServices from "./homeSections/ContentServices";
import FeaturesShowcase from "./homeSections/FeaturesShowcase";
import InnovatiaAdvantage from "./homeSections/InnovatiaAdvantage";
import LandingHero from "./homeSections/LandingHero";
import TechnicalServices from "./homeSections/TechnicalServices";
import TrendsUpdates from "./homeSections/TrendsUpdates";

export default function Home() {
  return (
    <main>
      <LandingHero />
      {/* <ContentServices /> */}
      <TechnicalServices />
      <FeaturesShowcase />
      <TrendsUpdates />
      <InnovatiaAdvantage />
    </main>
  );
}
