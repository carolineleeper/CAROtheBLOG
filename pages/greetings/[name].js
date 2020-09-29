import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  return <p>Hello, {router.query.name}...</p>;
};

export default Name;
