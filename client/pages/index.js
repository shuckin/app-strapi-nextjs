import Layuot from "@/components/Layout";
import Seo from "@/components/Seo/Seo";
import { fetchAPI } from "../lib/strapi/api";

export default function Home({ Global, News, Price, Faq, About, Review }) {
  return (
    <Layuot globalInfo={Global}>
      <Seo seo={Global} />
      <div>
        
      </div>
    </Layuot>
  );
}

export async function getStaticProps() {
  const [Global, News, Price, Faq, About, Review] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI("/pages?shortName=News"),
    fetchAPI("/pages?shortName=Price"),
    fetchAPI("/pages?shortName=Faq"),
    fetchAPI("/pages?shortName=About"),
    fetchAPI("/pages?shortName=Review"),
  ]);

  return {
    props: {
      Global,
      News,
      Price,
      Faq,
      About,
      Review,
    },
    revalidate: 1,
  };
}
