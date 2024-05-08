import DrinksList from "@/components/DrinksList";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Failed to fetch drinks!");
  }
  const data = await response.json();

  return data;
};

const Drinks = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default Drinks;
