import Layout from "../components/Layout"
import Card from "../components/Card"

function Home() {
  return (
    <Layout>
      <h2 className="mt-5 dark:text-white">All Products</h2>
      <div className="w-[75%] flex flex-wrap mt-7 gap-10 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  )
}

export default Home