import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Field, Form } from 'react-final-form';

import { addProduct, getCurrentProduct, updateProduct } from '../../actions/actionsProduct';

import { dateToTimestamp, readFileAsync } from '../../utils/helper';
import styles from './styles.module.scss';
// import { validation } from "../../utils/validation";

import * as ROUTES from '../../utils/routes';
import UploadPhoto from '../UploadPhoto';

const ProductForm = ({ ...props }) => {
  const {
    history,
    location,
    user,
    addProduct,
    currentProduct,
    getCurrentProduct,
    updateProduct,
  } = props;

  const isUpdateProduct = location.pathname.match(/\/update/);

  const id = location.pathname.split('/')[3];

  const initial = {
    dateOffSale: '',
    description: '',
    percent: '',
    photo: '',
    price: '',
    sale: '',
    title: '',
    userId: '',
  };

  const [initialState, setInitialState] = useState(initial);

  useEffect(() => {
    if (!isUpdateProduct) {
      setInitialState(initial);
    }
  }, []);

  useEffect(() => {
    if (isUpdateProduct) {
      getCurrentProduct(id);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(currentProduct).length > 0 && isUpdateProduct) {
      const product = {
        ...currentProduct,
        dateOffSale:
          currentProduct.dateOffSale && !isNaN(currentProduct.dateOffSale)
            ? currentProduct.dateOffSale.toString()
            : '',
      };
      setInitialState(product);
    }
  }, [currentProduct]);

  useEffect(() => {
    if (!user) {
      history.push(ROUTES.SIGN_IN);
    }
  }, [user]);

  const userId = user && user.email;

  const onSubmit = async (values) => {
    let photo = null;
    if (values.photo && values.photo[0]) {
      photo = await readFileAsync(values.photo[0]);
    }

    if (!isUpdateProduct) {
      const data = {
        ...values,
        photo: photo,
        sale: values.sale === 'yes',
        dateOffSale: values.sale === 'yes' ? dateToTimestamp(values.dateOffSale) : '',
        userId,
      };
      addProduct(data);
    }
    if (isUpdateProduct) {
      const data = {
        ...values,
        photo: photo,
        id: id,
        sale: values.sale === 'yes',
        dateOffSale: values.sale === 'yes' ? dateToTimestamp(values.dateOffSale) : '',
      };
      updateProduct(data);
    }
    history.push(ROUTES.CATALOG);
  };
  return (
    <>
      <Form
        initialValues={initialState}
        // validate={validation}
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, form }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Field name="title">
                {({ input, meta }) => (
                  <div>
                    <label>title</label>
                    <input {...input} type="text" placeholder="title" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="photo" component={UploadPhoto} />
              <Field name="description">
                {({ input, meta }) => (
                  <div>
                    <label>description</label>
                    <input {...input} type="text" placeholder="description" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="price">
                {({ input, meta }) => (
                  <div>
                    <label>price</label>
                    <input {...input} type="text" placeholder="price" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="sale">
                {({ input, meta }) => (
                  <div>
                    <label>sale</label>
                    <input {...input} type="text" placeholder="sale" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="percent">
                {({ input, meta }) => (
                  <div>
                    {/*<label>percent</label>*/}
                    <input {...input} type="text" placeholder="percent" />
                    <label>%</label>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="dateOffSale">
                {({ input, meta }) => (
                  <div>
                    <label>Sale end date</label>
                    <input {...input} type="text" placeholder="format DD-MM-YYYY" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <div>
                <button
                  type="submit"
                  // disabled={submitting}
                >
                  {!isUpdateProduct ? 'Add new product' : 'Save product'}
                </button>
              </div>
            </form>
          );
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  currentProduct: state.currentProduct,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
    getCurrentProduct: (product) => dispatch(getCurrentProduct(product)),
    updateProduct: (product) => dispatch(updateProduct(product)),
  };
};

export const Product = connect(mapStateToProps, mapDispatchToProps)(ProductForm);
