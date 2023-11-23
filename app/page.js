import AppSection from "./components/sections/AppSection"
import ContactUs from "./components/sections/ContactUs"
import FeaturesSection from "./components/sections/FeaturesSection"
import Home from "./components/sections/Home"
import IsItRightForYouSection from "./components/sections/isitright/IsItRightForYouSection"
import SpecialOfferSection from "./components/sections/SpecialOfferSection"
import SuccessStories from "./components/sections/SucessStories"
import VideoSection from "./components/sections/video/VideoSection"
import WhoIsSection from "./components/sections/whois/WhoIsSection"
import TestComponent from "./components/TestComponent"
export default function Page() {
  return (
    <main>
      <Home />
      <FeaturesSection />
      <SuccessStories />
      <AppSection />
      <WhoIsSection />
      <IsItRightForYouSection />
      <VideoSection />
      <ContactUs />
      <SpecialOfferSection />
      <TestComponent />
    </main>
  )
}
