import React from 'react';
import { useForm } from 'react-hook-form';

const Selector = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("country")}>
        <option value="Australia">Australia</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
        <option value="India">India</option>
        <option value="Singapore">Singapore</option>
        <option value="South Africa">South Africa</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States">United States</option>
      </select>
      <select {...register("simulation mode")}>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>

      <input type="submit" />
    </form>
  );
}

export default Selector