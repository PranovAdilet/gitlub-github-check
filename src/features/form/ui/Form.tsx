import React from "react";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";

const Form = () => {
   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
   } = useForm({
      mode: "all",
   });

   const onSubmit = (data: any) => {
      alert(JSON.stringify(data));
      reset();
   };

   return (
      <div className={styles.formApp}>
         <h1>React Hook Form</h1>

         <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ marginBottom: 50 }}>
               <label>
                  First Name:
                  <input
                     {...register("firstName", {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                           value: 5,
                           message: "Минимум 5 символов",
                        },
                     })}
                  />
               </label>
               <div style={{ height: 40 }}>
                  {errors?.firstName && <p>{`${errors?.firstName?.message}` || "Error!"}</p>}
               </div>
            </div>
            <div style={{ marginBottom: 50 }}>
               <label>
                  Last Name:
                  <input
                     {...register("lastName", {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                           value: 5,
                           message: "Минимум 5 символов",
                        },
                     })}
                  />
               </label>
               <div style={{ height: 40 }}>
                  {errors?.lastName && <p>{`${errors?.lastName?.message}` || "Error!"}</p>}
               </div>
            </div>
            <input type="submit" disabled={!isValid} />
         </form>
      </div>
   );
};

export default Form;
