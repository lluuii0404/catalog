import React from 'react';
import { connect } from 'react-redux';

import { Card } from 'antd';
import PhotoView from '../PhotoView';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { removeProduct } from '../../actions/actionsProduct';

import * as ROUTES from '../../utils/routes';
import {dateEndSale, daysLeft} from '../../utils/helper';

import styles from './styles.module.scss';

const { Meta } = Card;

const ProductComponent = ({ ...props }) => {
  const { user, history, product, removeProduct } = props;

  const isProductToCurrentUser = (user && user.email) === (product && product.userId);

  const handleClick = (product) => (event) => {
    event.preventDefault();
    const id = product.id;
    history.push(`${ROUTES.UPDATE_ITEM}/${id}`);
  };
  const handleDelete = (product) => (event) => {
    event.preventDefault();
    removeProduct(product);
  };

  return (
    <div style={{ width: 240, margin: 15 }}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<PhotoView alt={product.title} src={product.photo} />}
        actions={
          isProductToCurrentUser
            ? [
                <EditOutlined key="edit" onClick={handleClick(product)} />,
                <DeleteOutlined key="delete" onClick={handleDelete(product)} />,
              ]
            : []
        }
      >
        <Meta
          title={product.title}
          description={<div className={styles.description}>{product.description}</div>}
        />
        <div className={styles.info}>
          <span className={styles.title}>Price</span>
          <span className={styles.priceInfo}>
            {product.sale && daysLeft(product.dateOffSale) > -1
              ? <>
                  <span className={styles.old_price}> {Number(product.price)} $ </span>
                  <span className={styles.new_price}>
                    {
                      (Number(product.price) - Number(product.price) * (Number(product.percent) / 100))
                        .toFixed(2)
                    } $
                  </span>
                </>
              : <span className={styles.price}>
                  {product.price} $
                </span>
            }
          </span>
        </div>

        {product.sale && daysLeft(product.dateOffSale) > -1 && (
          <div className={styles.info}>
            <span className={styles.title}> Sale to </span>
            <span className={styles.new_date}>
              <span>{dateEndSale(product.dateOffSale)} </span>
              <span>{daysLeft(product.dateOffSale)} days left</span>
            </span>
          </div>
        )}
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (product) => dispatch(removeProduct(product)),
  };
};

export const CartProduct = connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
