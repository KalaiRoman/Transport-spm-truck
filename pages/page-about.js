import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import About1 from "@/components/sections/About1"
import Services2 from "@/components/sections/Services2"
import Funfact1 from "@/components/sections/Funfact1"
import TeamAbout from "@/components/sections/innerpages/TeamAbout"


export default function PageAbout() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={2}>
    <PageTitle pageName="About Us" />

    <About1 />
    <Services2 />
    <Funfact1 />
    <TeamAbout />

    </Layout>
    </>
    )
}