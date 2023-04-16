import React from "react";
import { useForm } from "react-hook-form";
const Formv = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="first">First name:</label>
        <input
          type="text"
          id="first"
          name="first"
          {...register("firstName", { required: true, maxLength: 20 })}
        />
        <label for="last">Last name:</label>
        <input
          type="text"
          id="last"
          name="last"
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />

        <br />
        <br />
        <label for="business">Business:</label>
        <input type="text" id="business" name="business" required />

        <label for="contact">Contact No:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          {...register("lastName", { pattern: /^\\d{8,11}$/ })}
        />
        <br />
        <br />
        <label for="email">Email Id:</label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", {
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
        />
        <label for="country">Country:</label>
        <input type="text" id="country" name="country" required />
        <br />
        <br />
        <label for="state">State:</label>
        <input type="text" id="state" name="state" required />
        <label for="address">Address:</label>
        <input type="text" id="address" name="address" required />
        <br />
        <label for="message">Your Message:</label>
        <input type="text" id="message" name="message" required />
        <br />
        <br />

        <input type="submit" />
      </form>
    </>
  );
};

export default Formv;
