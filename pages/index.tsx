import { Client } from "pg";
import Head from "next/head";
import Landing from "../sections/Landing";
import Projects from "../sections/Projects";

const Home = ({ data }: { data: CardProps[] }) => {
  return (
    <div>
      <Head>
        <title>MSA Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/api/og`}
        />
      </Head>
      <main className="flex h-screen flex-col text-white md:flex-row">
        <Landing />
        <Projects data={data} />
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const client = new Client({
    connectionString: process.env.DB_URL,
  });

  client
    .connect()
    .then(() => console.log("connected to DB"))
    .catch((err) => console.error("connection error", err.stack));

  const query = `SELECT * FROM projects ORDER BY id DESC ${
    process.env.NODE_ENV === "production" ? "WHERE hide = false" : ""
  }`;

  const { rows } = await client.query(query);
  const data: CardProps[] = rows;

  return {
    props: {
      data,
    },
    revalidate: 60, // In seconds
  };
}
