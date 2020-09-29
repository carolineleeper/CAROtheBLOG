import Head from "next/head";
import Link from "next/link";
import fs from "fs";

const Home = (props) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
      </Head>
      <p>This is the home pagh choose a blog:</p>
      <ul>
        {props.filenames.map((file) => {
          return (
            <li key={file}>
              <Link href={`blogs/${file}`}>
                <a>{file}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const getStaticProps = () => {
  const directory = `${process.cwd()}/blogs`;
  const rawFilenames = fs.readdirSync(directory);

  const filenames = rawFilenames.map((filename) => {
    return filename.replace(".md", "");
  });

  return { props: { filenames } };
};

export default Home;
