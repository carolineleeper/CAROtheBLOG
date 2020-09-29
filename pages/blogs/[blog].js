import matter from "gray-matter";
import marked from "marked";
import fs from "fs";

const Blog = (props) => {
  return (
    <>
      <h2>{props.data.title}</h2>
      <p>It was written by 🧔🏻 {props.data.author}</p>
      <img src={props.data.pic} />
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </>
  );
};

export const getStaticPaths = () => {
  const directory = `${process.cwd()}/blogs`;
  const rawFilenames = fs.readdirSync(directory);

  const filenames = rawFilenames.map((filename) => {
    return filename.replace(".md", "");
  });

  const paths = filenames.map((filename) => {
    return {
      params: { blog: filename },
    };
  });

  return {
    paths,
    fallback: false, // uses standard 404 page
  };
};

export const getStaticProps = (context) => {
  const blogTitle = context.params.blog;
  const filepath = `${process.cwd()}/blogs/${blogTitle}.md`;
  const rawFileContent = fs.readFileSync(filepath).toString();
  const { content, data } = matter(rawFileContent);
  const html = marked(content);

  return { props: { html, data } };
};

export default Blog;
