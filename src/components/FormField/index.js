import React from 'react';

import { Form, Input } from "antd";



const FormField = ( {input, meta:{touched, error, warning}, ...props } ) => {
  //console.log(props);
  let validateStatus = null;
  validateStatus = (!touched) ?  "" : (error) ? "error" : (warning ) ? "warning" : "success";
        //(touched && error ) ? "error": (touched && warning ) ? 'warning': "success";
 // console.log("validateStatus", validateStatus);
  return (
    <Form.Item hasFeedback validateStatus={validateStatus} validateMessages={error} >
      <Input {...input} {...props} />
      {touched &&
            ((error && <div className={'ant-form-explain'}>{error}</div>) ||
                (warning && <div className={'ant-form-explain'}>{warning}</div>))}
    </Form.Item>
  );
};

export default FormField;
