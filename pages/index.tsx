import { Client } from "pg";
import Head from "next/head";
import Landing from "../sections/Landing";
import Projects from "../sections/Projects";

const Home = ({ data }: { data: CardProps[] }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>MSA's Portfolio</title>
        <meta
          name="description"
          content="MSA's Portfolio. Mohammed Sobhi Alafifi is an Computer Engineer who builds high-functional, user-friendly, and accessible web-based applications with a focus on simplicity & usability."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="MSA's Portfolio" />
        <meta
          property="og:description"
          content="MSA's Portfolio. Mohammed Sobhi Alafifi is an Computer Engineer who builds high-functional, user-friendly, and accessible web-based applications with a focus on simplicity & usability."
        />
        <meta property="og:image" content="https://tno.dev/api/og" />
        <meta property="og:image:secure_url" content="https://tno.dev/api/og" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:url" content="https://tno.dev" />
        <meta property="og:local" content="en_US" />
        <meta property="og:site_name" content="MSA's portfolio" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@Tno_MSA" />
        <meta property="twitter:title" content="MSA's Portfolio" />
        <meta
          property="twitter:description"
          content="MSA's Portfolio. Mohammed Sobhi Alafifi is an Computer Engineer who builds high-functional, user-friendly, and accessible web-based applications with a focus on simplicity & usability."
        />
        <meta property="twitter:image" content="https://tno.dev/api/og" />

        <link rel="icon" href="/favicon.ico" />
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

  const query = `SELECT * FROM projects ${
    process.env.NODE_ENV === "production" ? "WHERE hide = false" : ""
  } ORDER BY id DESC`;

  const { rows } = await client.query(query);
  const data: CardProps[] = rows;

  return {
    props: {
      data,
    },
    revalidate: 60, // In seconds
  };
}
