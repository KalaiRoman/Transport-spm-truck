import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewsGrid from "@/components/sections/innerpages/NewsGrid"


export default function PageNews() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={2}>

    <PageTitle pageName="News Grid" />
    <NewsGrid />

    </Layout>
    </>
    )
}