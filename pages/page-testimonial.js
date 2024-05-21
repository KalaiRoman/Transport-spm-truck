import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import TestimonialGrid from "@/components/sections/innerpages/TestimonialGrid"


export default function PageTestimonialGrid() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={2}>

    <PageTitle pageName="Testimonial Grid" />
    <TestimonialGrid />

    </Layout>
    </>
    )
}