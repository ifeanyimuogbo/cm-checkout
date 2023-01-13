import { Checkbox } from "../shared/checkbox/checkbox";
import { HorizontalSpacer, VerticalSpacer } from "../shared/spacer";
import primeIcon from "../../assets/icons/amazon_prime.png";
import PropTypes from "prop-types";
import { Wrapper } from "./item.style";
import { Button } from "../shared/button/button";
import { CgTrashEmpty } from "react-icons/cg";
import { BsPlusLg } from "react-icons/bs";

export const Item = ({ item }) => {
  return (
    <Wrapper>
      <span className="product__check">
        <Checkbox />
      </span>
      <div className="product__img">
        <img src={item?.img} alt={item?.name} />
        <div className="float_buttons">
          <VerticalSpacer size="10px" />
          <div className="btn__group">
            <div className="left">
              <CgTrashEmpty />
            </div>
            <div className="count">1</div>
            <div className="right">
              <BsPlusLg />
            </div>
          </div>
          {/* <VerticalSpacer size="10px" />
          <Button kind="secondary">See more like this</Button> */}
        </div>
      </div>
      <div className="product__info">
        <h4>{item?.name}</h4>
        <div className="mobile-price-div">
          <p>{item?.cost}</p>
          <HorizontalSpacer size="20px" />
          <img src={primeIcon} alt="Amazon prime icon" />
        </div>

        {item?.condition ? (
          <>
            <p className="item__condition">{item?.condition}</p>
            <VerticalSpacer size="8px" />
          </>
        ) : (
          <VerticalSpacer size="10px" />
        )}
        {item?.in_stock === 0 ? (
          <>
            <p className="item__instock red">Out of stock</p>
            <VerticalSpacer size="8px" />
          </>
        ) : item?.in_stock === 1 ? (
          <>
            <p className="item__instock red">Only 1 left in stock</p>
            <VerticalSpacer size="8px" />
          </>
        ) : (
          <>
            <p className="item__instock">In stock</p>
            <VerticalSpacer size="8px" />
          </>
        )}
        <p className="shipment__info">
          Ships from <span>{item?.ships_from}</span> and sold by {item?.sold_by}
        </p>
        <VerticalSpacer size="8px" />
        <img src={primeIcon} alt="Amazon prime icon" />
        <VerticalSpacer size="8px" />
        <div className="indicate__gift">
          <Checkbox />
          <HorizontalSpacer size="8px" />
          <p>This will be a gift </p>
          <HorizontalSpacer size="8px" />
          <a href="/">Learn more</a>
        </div>
        <VerticalSpacer size="8px" />
        <div className="info__footer">
          <select>
            <option>Qty: 1</option>
          </select>
          <HorizontalSpacer size="10px" />
          <div className="footer__option">
            <p>Delete</p>
          </div>
          <div className="footer__option">
            <p>Save for later</p>
          </div>
          <div className="footer__option">
            <p>See more like this</p>
          </div>
          <div className="footer__options__mobile">
            <Button kind="secondary">Delete</Button>
            <HorizontalSpacer size="10px" />
            <Button kind="secondary">Save for later</Button>
          </div>
        </div>
      </div>
      <div className="product__cost">
        <p>{item?.cost}</p>
      </div>
    </Wrapper>
  );
};

Item.propTypes = {
  item: PropTypes.any,
};
