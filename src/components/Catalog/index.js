import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect} from "react-redux-firebase";
import { NavLink } from "react-router-dom";

import { CartProduct } from "../CartProduct";

import * as ROUTES from '../../utils/routes';

const CatalogComponent = ({...props}) => {
  const { products } = props;

  const ProductsListJsx = products &&
    products.map(
      product => <CartProduct key={product.id} product={product} {...props} />
    )

  return (
    <>
      <NavLink to={ROUTES.NEW_ITEM}>Add New Product</NavLink>
      { ProductsListJsx }
    </>
  );
};

const mapStateToProps = state => {
  const products = state.firestore.ordered.product;
  return {
    products,
    // uid: state.firebase.auth.uid
  }
}

export const Catalog = compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "product",
      // where: ["authorId", "==", ownProps.uid],
      // orderBy: ["date", "desc"],
    },
  ])
)(CatalogComponent)
