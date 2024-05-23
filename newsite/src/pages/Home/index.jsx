import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./index.scss"


const Home = () => {
  const SignupSchema = Yup.object().shape({

    email: Yup.string().email('Invalid email').required('Required'),
 
  });
  return (
    <div>
      <div className="container">
     <h1>
Newsletter
</h1>
<p>Subscribe to our newsletter and get 20% off your first purchase</p>

     <Formik

       initialValues={{
         email: '',

       }}

       validationSchema={SignupSchema}

       onSubmit={values => {
         console.log(values);

       }}

     >

       {({ errors, touched }) => (

         <Form>
           <Field name="email" type="email" />

           {errors.email && touched.email ? <div>{errors.email}</div> : null}

           <button type="submit">SUBSCRIBE</button>

         </Form>

       )}

     </Formik>
</div>
   </div>
  )
}

export default Home