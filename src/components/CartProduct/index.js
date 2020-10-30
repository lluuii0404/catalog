import React from 'react';
import {connect} from "react-redux";

import { Card } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { removeProduct } from "../../actions/actionsProduct";

import * as ROUTES from "../../utils/routes";
import { dateEndSale } from "../../utils/helper";

import styles from './styles.module.scss'

const { Meta } = Card;

const ProductComponent = ({...props}) => {
  const { history, product, removeProduct } = props;

  const handleClick = product => event => {
    event.preventDefault();
    const id = product.id;
    history.push(`${ROUTES.UPDATE_ITEM}/${id}`)
  };
  const handleDelete = product => event => {
    event.preventDefault()
    removeProduct(product)
  }

  const isAdmin = true;

  return (
    <div style={{width: 240, margin: 20 }}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={product.title} className={styles.img} src={product.photo} />}
        actions={isAdmin ? [
          <EditOutlined key="edit" onClick={handleClick(product)}/>,
          <DeleteOutlined key="delete" onClick={handleDelete(product)} />
        ] : []}
      >
        <Meta
          style={{paddingBottom: 50,overflowY: "scroll"}}
          title={product.title}
          description={
            <div>
              {product.description}
            </div>
          }
        />
        <div>
          <span>Price</span>
          <span>{
            product.sale
              ? Number(product.price) - (Number(product.price) * (Number(product.percent) / 100))
              : product.price
          } $ </span>
        </div>

        {
          product.sale && (
            <div>
              <span> Sale to </span>
              <span> {dateEndSale(product.dateOffSale)} </span>
            </div>
          )
        }
      </Card>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return{
    removeProduct: product => dispatch(removeProduct(product))
  }
}

export const CartProduct = connect(null, mapDispatchToProps)(ProductComponent)
