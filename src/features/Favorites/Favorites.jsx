import { useCurrencyList } from "../../context/CurrencyListContext";
import FavoriteItem from "./FavoriteItem";

function Favorites() {
  const { favorites } = useCurrencyList();
  return (
    <div className="p-4 bg-deep-gray rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-white uppercase">Pinned Pairs</h1>
        <h2 className="text-primary-gray text-[13px]">
          {favorites.length} Favorites
        </h2>
      </div>

      <div className="mt-4">
        {favorites?.map((favorite) => (
          <FavoriteItem favoriteCurrency={favorite} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
