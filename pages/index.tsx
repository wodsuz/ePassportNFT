import {
  Layout,
  Navigation,
  Home,
  About,
  Roadmap,
  Showcase,
  Team,
  Faq,
  Contact,
  ScrollToTop,
} from "../components";

export default function Homepage() {
  const pageDescription =
    "Explore our comprehensive Frequently Asked Questions (FAQ) page to find answers to common queries about Automated-bots. From troubleshooting tips to in-depth explanations, our FAQ section is designed to provide clarity and assistance. Save time and get the information you need quickly. If you have specific questions not covered here, feel free to reach out to our dedicated support team. Discover a wealth of knowledge at your fingertips with our user-friendly FAQ resource.";

  return (
    <div>
      <Layout
        title="ePassport NFT | Collect,Travel,Earn! "
        content={pageDescription}
      >
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Contact />
        <ScrollToTop />
      </Layout>
    </div>
  );
}
