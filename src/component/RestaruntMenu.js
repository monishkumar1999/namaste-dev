import useResinfo from "../utill/useResinfo";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
const RestaruntMenu = () => {
  // const [restinfo, setResinfo] = useState(null);

  const { resid } = useParams();

  const restinfo = useResinfo(resid);

  if (restinfo == null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, avgRatingString } =
    restinfo.data.cards[2].card.card.info;

  const restview =
    restinfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards || {};

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{name}</h1>
          <p className="card-text">
            <strong>Cost for Two:</strong> {costForTwoMessage}
          </p>
          <p className="card-text">
            <strong>Average Rating:</strong> {avgRatingString}
          </p>
          <p className="card-text">
            <strong>Cuisines:</strong>
          </p>
        </div>
        <div className="card-footer">
          <h5 className="card-title">Menu</h5>
          <ul className="list-group list-group-flush">
            {restview.length > 0 ? (
              restview.map((res) => {
                return (
                  <li className="list-group-item" key={res.card.info.id}>
                    {res.card.info.name}
                  </li>
                );
              })
            ) : (
              <li>No Data</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaruntMenu;
