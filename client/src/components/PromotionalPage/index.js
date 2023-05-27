import React from 'react';
import './style.css';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PROMOTION } from '../../utils/actions';

const PromotionalPage = () => {
  const [state, dispatch] = useStoreContext();

  const redirectUrl = 'https://www.carlsonscoders.com/';

  const handleRedirect = () => {
    window.location.href = redirectUrl;
  };

  function dragonDeal() {
    dispatch({
      type: 'UPDATE_PROMOTION',
      promotion: 'Dragon',
      discount: 0.8,
    });
  }

  return (
    <div className="promotional-page">
      <div className="flaming-border">
        <h2 data-text="Special Promotions">🎉Special Promotions🎉</h2>
        <p>Explore our exclusive deals and offers!</p>
      </div>

      <div className="flaming-border">
        <h3 data-text="Limited Time Offer: Get a FREE Zombie with Any Purchase">
          🧟Limited Time Offer: Get a FREE Zombie with Any Purchase🧟
        </h3>
        <p>
          Looking for a "dead-ly" companion? When you enter the promo code
          "ZOMBIEPALOOZA" during checkout and have any other mythical creature
          in your cart, your zombie will be absolutely free. Hurry before they
          wander away!
        </p>
      </div>

      <div
        className="flaming-border"
        onClick={dragonDeal}
        style={{ cursor: pointer }}
      >
        <h3 data-text="Dragons are 20% off this month">
          🐲Dragons are 20% off this month🐲
        </h3>
        <p>
          Take flight with a 20% discount on all dragon-related products and
          make your dragon dreams come true. Please click this box and watch
          your savings soar!
        </p>
      </div>

      <div className="flaming-border">
        <h3 data-text="Refer a Friend and Get $300 Credit">
          💵Refer a Friend and Get $300 Credit💵
        </h3>
        <p>
          Share the joy of owning a mythical creature with your friends! Refer a
          friend to our store, and when they make their first purchase, both you
          and your friend will receive a $300 store credit.
        </p>
      </div>

      <div
        className="flaming-border"
        onClick={handleRedirect}
        style={{ cursor: 'pointer' }}
      >
        <h3 data-text="Attention Carlson's Coders Members!">
          🚨🚨Attention Carlson's Coders Members!🚨🚨
        </h3>
        <p>
          Discover the enchanting world of mythical creatures and bring your
          dreams to life with this special discount. Because let's face it,
          coding can sometimes feel like wrangling dragons and taming unicorns.
          Enjoy an exclusive limited-time offer and get 40% off all purchases
          when you enter promo code "CARLSON40" at checkout. Happy coding and
          may your code be as legendary as a fire-breathing dragon!
        </p>
      </div>
    </div>
  );
};

export default PromotionalPage;
