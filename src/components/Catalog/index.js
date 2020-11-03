import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect} from "react-redux-firebase";
import { NavLink } from "react-router-dom";

import { CartProduct } from "../CartProduct";
import { Spinner } from "../Spinner";

import * as ROUTES from '../../utils/routes';

import styles from './styles.module.scss';

const CatalogComponent = ({...props}) => {
  const { products, user } = props;

  const AddNewProductJsx = user && (
    <div className={styles.new_product}>
      <NavLink to={ROUTES.NEW_ITEM}>Add New Product</NavLink>
    </div>
  )

  const ProductsListJsx = products &&
    products.map(
      product => <CartProduct key={product.id} product={product} {...props} />
    )

  const loaderJsx = !products && <Spinner />

  return (
    <>
      {loaderJsx}
      <div className={styles.wrapper}>
        { AddNewProductJsx }
        <div className={styles.container}>
          { ProductsListJsx }
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  // const products = undefined;
  const products = state.firestore.ordered.product;
  return {
    user: state.auth.user,
    products,
  }
}

export const Catalog = compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
    {
      collection: "product",
    },
  ])
)(CatalogComponent)
