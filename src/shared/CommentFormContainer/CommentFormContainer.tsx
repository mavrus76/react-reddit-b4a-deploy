import React, { ChangeEvent, useState } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CommentForm } from '../CommentForm';

const schema = yup.object({
  commentText: yup.string().min(4, 'Введите больше 3-х символов'),
});
export type FormData = {
  commentText?: string;
};

export function CommentFormContainer() {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    // mode: 'onBlur',
    resolver: yupResolver(schema) as Resolver<FormData>,
  });

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    setTouched(true);
  };

  // function handleBlur() {
  //   setTouched(false);
  // }

  const onSubmit = (data: FormData) => {
    setTouched(true);

    console.log(data.commentText);

    setValue('');
    reset();
  };

  return (
    <CommentForm
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      touched={touched}
    />
  );
}
