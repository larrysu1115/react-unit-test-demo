import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Validator from "../../utils/Validator";
import Alert from 'react-bootstrap/Alert';
import { getJoke } from '../../api/JokeApi'

function LoginForm() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [joke, setJoke] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false);
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      // 輸入錯誤
      setErrors(newErrors);
    } else {
      // 提交成功
      setSubmitSuccess(true);
      const jokeData = await getJoke();
      setJoke(jokeData);
    }
  };

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { email, password } = form;
    const newErrors = {};

    if (!Validator.isEmailAddress(email))
      newErrors.email = "email必須包含@符號 !";
    else if (!Validator.isPassword(password))
      newErrors.password = "密碼至少4位 !";

    return newErrors;
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setField("email", e.target.value)}
          isInvalid={!!errors.email}
          placeholder="Enter email" autoComplete="off"
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          onChange={(e) => setField("password", e.target.value)}
          isInvalid={!!errors.password}
          placeholder="Password" autoComplete="off"
          data-testid="myPassword"
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <Alert variant="success" show={submitSuccess} >提交資料成功</Alert>
      <Alert variant="primary" show={submitSuccess} >獲得笑話: {joke.setup} ? {joke.punchline} !!!</Alert>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
