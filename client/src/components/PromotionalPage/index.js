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
        <h3 data-text="Buy One Zombie, Get Another One for Free">
          🧟Limited Time Offer: Buy One, Get One Zombie for Free🧟
        </h3>
        <p>
          Looking for some "dead-ly" companions? Purchase any one of our high
          quality and 80% intact undead from our collection, and we'll add
          another zombie to your order absolutely free. Hurry before they wander
          away!
        </p>
      </div>

      <div className="flaming-border" onClick={dragonDeal}>
        <h3 data-text="Dragons are 20% off this month">
          🐲Dragons are 20% off this month🐲
        </h3>
        <p>
          Take flight with a 20% discount on all dragon-related products and
          make your dragon dreams come true. Seize the moment and let your
          imagination soar!
        </p>
      </div>

      <div className="flaming-border">
        <h3 data-text="Refer a Friend and Get $50 Credit">
          💵Refer a Friend and Get $50 Credit💵
        </h3>
        <p>
          Share the joy of owning a mythical creature with your friends! Refer a
          friend to our store, and when they make their first purchase, both you
          and your friend will receive a $50 store credit.
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
          Enjoy an exclusive limited-time offer and get 10% off all purchases
          when you enter promo code CARLSON10 at checkout. Happy coding and may
          your code be as legendary as a fire-breathing dragon!
        </p>
      </div>
    </div>
  );
};

export default PromotionalPage;
