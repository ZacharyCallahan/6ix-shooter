import Home from "./components/sections/Home"
import FeaturesSection from "./components/sections/FeaturesSection"
import SuccessStories from "./components/sections/SucessStories"
import AppSection from "./components/sections/AppSection"
import WhoIsSection from "./components/sections/WhoIsSection"
import ContactUs from "./components/sections/ContactUs"
export default function Page() {
  return (
    <main>
      <Home />
      <FeaturesSection />
      <SuccessStories />
      <AppSection />
      <WhoIsSection />
      <ContactUs />
    </main>
  )
}
