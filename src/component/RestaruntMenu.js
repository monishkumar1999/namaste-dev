import useResinfo from "../utill/useResinfo";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import RestaruantCatogry from "./RestraruntCatogry";
const RestaruntMenu = () => {
  // const [restinfo, setResinfo] = useState(null);

  const { resid } = useParams();

  const restinfo = useResinfo(resid);

  if (restinfo == null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, avgRatingString } =
    restinfo.data.cards[2].card.card.info;

  // const restview =
  //   restinfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  //     .itemCards || {};

  // console.log(restinfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const itemCatogry =
    restinfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (res) => {
        return (
          res?.card.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // console.log(itemCatogry)F
  return (
    <div className="text-center">
      <div>
        <div>
          <h1 className="font-bold my-6 text-2xl">{name}</h1>
          <p>
            <span className="font-bold">Cost for Two:</span> {costForTwoMessage}
          </p>
          <p>Average Rating: {avgRatingString}</p>
        </div>
        {itemCatogry.map((item) => {
          return <RestaruantCatogry item={item.card.card} />;
        })}
      </div>
    </div>
  );
};

export default RestaruntMenu;
