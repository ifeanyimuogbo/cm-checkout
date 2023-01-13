import { Wrapper } from "./maincart.style";
import { Item } from "../item";
import { VerticalSpacer } from "../shared/spacer";

const listOfItems = [
  {
    name: "Armani Men's Mario Armani Men's Mario Armani Men's Mario Armani Men's Mario Armani Men's Mario Armani Men's Mario Armani Men's Mario Armani Men's Mario",
    id: 1,
    img: "https://baajoo.com/wp-content/uploads/2021/12/mts-100d-1avdf-600x600.jpg",
    in_stock: 3,
    sold_by: "REMO TECH US",
    fulfilled_by: "Amazon.ca",
    ships_from: "Amazon.ca",
    style: "English - Macbook only",
    size: "16', 10 core, 16gb, 512 gb",
    color: "Space Grey",
    cost: "$300",
  },
  {
    name: "Apple laptop Armani Men's Mario Armani Men's Mario Armani Men's Mario",
    id: 2,
    img: "https://baajoo.com/wp-content/uploads/2021/12/mts-100d-1avdf-600x600.jpg",
    in_stock: 3,
    sold_by: "REMO TECH US",
    fulfilled_by: "Amazon.ca",
    ships_from: "Amazon.ca",
    style: "English - Macbook only",
    size: "16', 10 core, 16gb, 512 gb",
    color: "Space Grey",
    cost: "$2000",
    condition: "used, very good",
  },
];

export const MainCart = ({}) => {
  return (
    <Wrapper>
      <div className="header">
        <h1 className="header__title">Shopping Cart</h1>
        <p className="deselect__prompt">Deselect all items</p>
        <p className="price">Price</p>
      </div>
      <div className="secondary__header">
        <p className="saved__prompt">
          <span>
            Schwinn Discover Hybrid Bicycle, 700C, 28-inch Wheels, Black(S5...
          </span>{" "}
          has been moved to Save for Later
        </p>
      </div>
      {listOfItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
      <div className="footer">
        <p>
          Subtotal (4 items): <span>{"$3403"}</span>
        </p>
      </div>
    </Wrapper>
  );
};
MainCart.propTypes = {};
