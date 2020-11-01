import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect} from "react-redux-firebase";
import { NavLink } from "react-router-dom";

import { CartProduct } from "../CartProduct";

import * as ROUTES from '../../utils/routes';

const CatalogComponent = ({...props}) => {
  const { products, user } = props;

  const AddNewProductJsx = user && <NavLink to={ROUTES.NEW_ITEM}>Add New Product</NavLink>

  const ProductsListJsx = products &&
    products.map(
      product => <CartProduct key={product.id} product={product} {...props} />
    )

  return (
    <>
      { AddNewProductJsx }
      { ProductsListJsx }
    </>
  );
};

const mapStateToProps = state => {
  const products = state.firestore.ordered.product;
  return {
    user: state.auth.user,
    products,
  }
}

export const Catalog = compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "product",
    },
  ])
)(CatalogComponent)
