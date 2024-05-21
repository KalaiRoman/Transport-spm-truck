import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import TeamDetails from "@/components/sections/innerpages/TeamDetails"


export default function PageTeamDetails() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={2}>

    <PageTitle pageName="Team Grid" />
    <TeamDetails />

    </Layout>
    </>
    )
}