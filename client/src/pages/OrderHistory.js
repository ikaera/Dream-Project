import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container">
        <Link to="/" className='oh-bg-bl'>← Back to Products</Link>

        {user ? (
          <>
            <h2 className='oh-bg-bl' style={{marginTop: '10px'}}>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3 className='oh-bg-bl' style={{marginTop: 5, marginBottom: 5}}>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="oh-bg">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1 ">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} className='detail-img'/>
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span >${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
