import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ onChange }) => {
  const [formData, setFormData] = React.useState({});
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: 'example@email.com',
    },
  });

  const showInputValue = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (data) => {
    onChange(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="wrap_form">
          <div>
            <p>please input name: </p>
            <input
              type="text"
              name="name"
              onChange={showInputValue}
              value={formData.name}
              {...register(`name`, {
                required: 'This field is required',
                minLength: {
                  value: 2,
                  message: 'min 2 characters',
                },
                maxLength: {
                  value: 75,
                  message: 'max 75 characters',
                },
              })}
            />
            <div className="errors">
              {errors.name && <span>{errors.name.message}</span>}
            </div>
          </div>
          <div className="emailForm">
            <p>please input email: </p>
            <textarea
              type="email"
              name="email"
              onChange={showInputValue}
              value={formData.email}
              {...register(`email`, {
                required: 'This field is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
                },
                minLength: {
                  value: 4,
                  message: 'min 4 characters',
                },
                maxLength: {
                  value: 35,
                  message: 'max 35 characters',
                },
              })}
            />
            <div className="errors">
              {errors.email && <span>{errors.email.message}</span>}
            </div>
          </div>
          <div className="emailForm">
            <p>please input phone: </p>
            <textarea
              type="tel"
              name="phone" // Corrected the name attribute here
              onChange={showInputValue}
              value={formData.phone}
              {...register(`phone`, {
                required: 'This field is required',
                pattern: {
                  value: /\+?[-() \d]+/,
                  message: 'Entered value does not match phone format', // Updated the error message here
                },
                minLength: {
                  value: 4,
                  message: 'min 4 characters',
                },
                maxLength: {
                  value: 20,
                  message: 'max 20 characters',
                },
              })}
            />
            <div className="errors">
              {errors.phone && <span>{errors.phone.message}</span>}{' '}
            </div>
          </div>
        </div>
        <div className="btn">
          <button type="submit" disabled={!isValid}>
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
