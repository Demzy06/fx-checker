import { useCurrencyList } from "../../context/CurrencyListContext";
import FavoriteItem from "./FavoriteItem";
import Message from "../../components/Message";

function Favorites() {
  const { favorites } = useCurrencyList();

  if (favorites.length <= 0) {
    return (
      <Message
        message="No pinned pairs yet"
        messageTwo="Pin a pair to track its rate here. Tap the star icon on any conversion or comparision row."
      />
    );
  }

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
