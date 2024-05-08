import Image from "next/image";
import Link from "next/link";

import drinkDefault from "../drink-default.png";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const response = await fetch(`${URL}${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch a drink!");
  }

  return response.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);

  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <Image
        src={imgSrc}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        width={300}
        height={300}
        alt={title}
        priority
      />
      {/* <Image src={drinkDefault} className="w-48 h-48 rounded-lg" alt="drink" /> */}
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
