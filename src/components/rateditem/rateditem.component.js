import {Wrapper} from './rateditem.style';
import PropTypes from 'prop-types';
import {Button} from '../shared/button/button';
import primeIcon from '../../assets/icons/amazon_prime.png';
import {HorizontalSpacer, VerticalSpacer} from '../shared/spacer';
import ReactStars from 'react-rating-stars-component';
import {memo} from 'react';

export const RatedItem = memo(({item}) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <Wrapper>
      <div className="item__img">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="item__info">
        <h5>{item?.name}</h5>
        <div className="ratings">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          <HorizontalSpacer size="4px" />
          <span className="rnum">161</span>
        </div>
        <VerticalSpacer size="8px" />
        <p className="item__price">$16.50</p>
        <img
          src={primeIcon}
          alt="Amazon prime icon"
          width="100px"
          height="20px"
        />
        <VerticalSpacer size="8px" />
        <Button>Add to Cart</Button>
      </div>
    </Wrapper>
  );
});

RatedItem.propTypes = {
  item: PropTypes.any,
};
RatedItem.displayName = 'RatedItem';
