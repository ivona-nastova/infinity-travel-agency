import Head from "next/head";
import { BsSearch } from "react-icons/bs";

export default function ErrorPage() {
  return (
  <>
    <Head>
    <title>Страницата не е пронајдена</title>
  </Head>
    <div className="text-center py-32 flex flex-col justify-center items-center md:text-24 bg-gray-200">
      <p>Страницата не е пронајдена.</p>
      <span className="flex">
        Пребарајте повторно.
        <BsSearch />
      </span>
    </div>
  </>
  );
}
