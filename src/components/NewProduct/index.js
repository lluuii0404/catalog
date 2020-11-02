import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { Field, Form } from 'react-final-form';
import { Switch, DatePicker } from "antd";
import UploadPhoto from '../UploadPhoto';

import { addProduct, getCurrentProduct, updateProduct } from '../../actions/actionsProduct';

import { dateToTimestamp } from '../../utils/helper';
import { validationProductForm } from "../../utils/validation";

import * as ROUTES from '../../utils/routes';

import classnames from 'classnames';
import styles from './styles.module.scss';

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
    sale: false,
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
    if (currentProduct && Object.keys(currentProduct).length > 0 && isUpdateProduct) {
      const product = {
        ...currentProduct,
        dateOffSale:
          currentProduct.dateOffSale && !isNaN(currentProduct.dateOffSale)
            ? moment(currentProduct.dateOffSale)
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
    if (!isUpdateProduct) {
      const data = {
        ...values,
        photo: values.photo,
        percent: values.sale ? values.percent : '',
        dateOffSale: values.sale ? dateToTimestamp(values.dateOffSale) : '',
        userId,
      };
      addProduct(data);
      // history.push(ROUTES.CATALOG);
    }
    if (isUpdateProduct) {
      const data = {
        ...values,
        id: id,
        photo: values.photo,
        percent: values.sale ? values.percent : '',
        dateOffSale: values.sale ? dateToTimestamp(values.dateOffSale) : '',
      };
      updateProduct(data);
      setInitialState(initial)
    }
    // history.push(ROUTES.CATALOG);
  };

  return (
    <>
      <Form
        initialValues={initialState}
        validate={validationProductForm}
        onSubmit={onSubmit}
        render={({ handleSubmit, values, errors }) => {
          const idDisabled = Object.keys(errors).length > 0;
          const isSale = values.sale
          return (
            <form onSubmit={handleSubmit} className={styles.form}>
              <Field name="title">
                {({ input, meta }) => (
                  <div  className={ styles.activate }>
                    <label>Title</label>
                    <input {...input} type="text" placeholder="title" />
                    {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="photo" component={UploadPhoto} />

              <Field name="description">
                {({ input, meta }) => (
                  <div className={ styles.activate }>
                    <label>Description</label>
                    <input {...input} type="text" placeholder="description" />
                    {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="price">
                {({ input, meta }) => (
                  <div className={ styles.activate }>
                    <label>Price</label>
                    <input {...input} type="text" placeholder="price" />
                    {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="sale">
                {({ input }) => (
                    <div className={classnames(styles.activate, styles.sale)}>
                      <label>Sale</label>
                      <Switch
                        checked={input.value}
                        {...input}
                      />
                    </div>
                  )
                }
              </Field>

              <div className={styles.toSale}>
              <Field name="percent">
                {({ input, meta }) => (
                  <div className={classnames({
                    [styles.activate]: isSale,
                    [styles.disabled]: !isSale,
                    [styles.percent]: true
                  })}>
                    <label>Percent</label>
                    <div className={styles.valuePercent}>
                      <input {...input} type="text" disabled={!isSale} />
                      <label>%</label>
                    </div>
                    {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="dateOffSale">
                {({ input, meta }) => (
                  <div className={classnames({
                    [styles.endDate]: true,
                    [styles.endDateDisables]: !isSale,
                  })}>
                    <label>Sale end date</label>
                    <DatePicker
                      size='large'
                      showNow={false}
                      format='DD.MM.YYYY'
                      disabledDate={ current =>
                        current && current < moment().endOf('day')
                      }
                      disabled={!isSale}
                      {...input}
                    />
                    {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                  </div>
                )}
              </Field>
              </div>

              <div className={styles.buttons}>
                <button
                  type="submit"
                  className={idDisabled ? styles.btnDisabled : styles.btnActivate}
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
  currentProduct: state.currentProduct.product,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
    getCurrentProduct: (product) => dispatch(getCurrentProduct(product)),
    updateProduct: (product) => dispatch(updateProduct(product)),
  };
};

export const Product = connect(mapStateToProps, mapDispatchToProps)(ProductForm);
