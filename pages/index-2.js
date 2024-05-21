import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import CallToAction2 from "@/components/sections/CallToAction2"
import Clients from "@/components/sections/Clients"
import FormMap2 from "@/components/sections/FormMap2"
import News1 from "@/components/sections/News1"
import Pricing2 from "@/components/sections/Pricing2"
import Services2 from "@/components/sections/Services2"
import Slider2 from "@/components/sections/Slider2"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"
export default function Home2() {

  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <Slider2 />
        <About2 />
        <Services2 />
        <CallToAction2 />
        <Pricing2 />
        <Team2 />
        <Clients />
        <Testimonial2 />
        <News1 />
        <FormMap2 />
      </Layout>
    </>
  )
}