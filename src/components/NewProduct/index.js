import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { Field, Form } from "react-final-form";

import {
  addProduct,
  getCurrentProduct,
  updateProduct
} from "../../actions/actionsProduct";

import { dateToTimestamp } from "../../utils/helper";
// import { validation } from "../../utils/validation";

const ProductForm = ({...props}) => {
  const { location, addProduct, currentProduct, getCurrentProduct, updateProduct } = props;

  const isUpdateProduct = location.pathname.match(/\/update/);

  const id = location.pathname.split('/')[3];

  const initial = {
    dateOffSale: "",
    description: "",
    percent: "",
    photo: "",
    price: "",
    sale: "",
    title: "",
    userId: ""
  }

  const [initialState, setInitialState] = useState(initial);

  useEffect(() => {
    if(!isUpdateProduct){
      setInitialState(initial);
    }
  }, [])

  useEffect(() => {
    if(isUpdateProduct){
      getCurrentProduct(id);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(currentProduct).length > 0 && isUpdateProduct) {
      const product = {
        ...currentProduct,
        dateOffSale: currentProduct.dateOffSale && !isNaN(currentProduct.dateOffSale) ? currentProduct.dateOffSale.toString() : '',
      }
      setInitialState(product)
    }

  }, [currentProduct]);

  const  onSubmit = values => {
    if (!isUpdateProduct) {
      const data = {
        ...values,
        sale: values.sale === 'yes',
        dateOffSale: values.sale === 'yes' ? dateToTimestamp(values.dateOffSale) : '',
        userId: 'user@mail.com' // todo - need fix to current user, check user
      }
      addProduct(data)
    }
    if (isUpdateProduct) {
      const data = {
        ...values,
        id: id,
        sale: values.sale === 'yes',
        dateOffSale: values.sale === 'yes' ? dateToTimestamp(values.dateOffSale) : '',
        userId: 'user@mail.com' // todo - need fix to current user , check user
      }
      updateProduct(data)
    }
  }
  return (
    <>
      <Form
        initialValues={initialState}
        // validate={validation}
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, form }) => {
          return (
            <form
              onSubmit={handleSubmit}
              // onSubmit={event => {
              //   handleSubmit(event).then(() => {
              //     form.reset();
              //   })
              // }}
            >
              <Field name="title">
                {({input, meta}) => (
                  <div>
                    <label>title</label>
                    <input {...input} type="text" placeholder="title"/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="photo">
                {({input, meta}) => (
                  <div>
                    <label>photo</label>
                    <input {...input} type="text" placeholder="photo"/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="description">
                {({input, meta}) => (
                  <div>
                    <label>description</label>
                    <input {...input} type="text" placeholder="description"/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="price">
                {({input, meta}) => (
                  <div>
                    <label>price</label>
                    <input {...input} type="text" placeholder="price"/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="sale">
                {({input, meta}) => (
                  <div>
                    <label>sale</label>
                    <input {...input} type="text" placeholder="sale"/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="percent">
                {({input, meta}) => (
                  <div>
                    {/*<label>percent</label>*/}
                    <input {...input} type="text" placeholder="percent"/>
                    <label>%</label>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <Field name="dateOffSale">
                {({input, meta}) => (
                  <div>
                    <label>Sale end date</label>
                    <input {...input} type="text" placeholder="Sale end date"/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <div>
                <button
                  type="submit"
                  // disabled={submitting}
                >
                  {!isUpdateProduct ? "Add new product" : "Save product"}
                </button>
              </div>
            </form>
          );
        }}
      />
    </>
  )
};

const mapStateToProps = state => {
  return {
    currentProduct: state.currentProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProduct(product)),
    getCurrentProduct: product => dispatch(getCurrentProduct(product)),
    updateProduct: product => dispatch(updateProduct(product)),
  }
}

export const Product = connect(mapStateToProps, mapDispatchToProps)(ProductForm);
