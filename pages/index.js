import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import CallToAction1 from "@/components/sections/CallToAction1"
import Clients from "@/components/sections/Clients"
import Faq1 from "@/components/sections/Faq1"
import FormVideo1 from "@/components/sections/FormVideo1"
import Funfact1 from "@/components/sections/Funfact1"
import News1 from "@/components/sections/News1"
import Projects1 from "@/components/sections/Projects1"
import Services1 from "@/components/sections/Services1"
import Slider from "@/components/sections/Slider1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Work from "@/components/sections/Work"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Slider />
                <Services1 />
                <About1 />
                <Work />
                <Funfact1 />
                <Projects1 />
                <Testimonial1 />
                <Faq1 />
                <FormVideo1 />
                <Clients />
                <News1 />
                <CallToAction1 />
            </Layout>
        </>
    )
}