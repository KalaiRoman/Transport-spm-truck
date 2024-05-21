import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import TeamGrid from "@/components/sections/innerpages/TeamGrid"


export default function PageTeam() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={2}>

    <PageTitle pageName="Team Grid" />
    <TeamGrid />

    </Layout>
    </>
    )
}