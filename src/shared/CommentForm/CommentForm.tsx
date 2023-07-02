/* eslint-disable react/jsx-props-no-spreading */
import React, { ChangeEvent } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormData } from '../CommentFormContainer';
import styles from './commentform.css';

type TCommentFormProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  touched: boolean;
};

export function CommentForm({
  value,
  onChange,
  onSubmit,
  register,
  errors,
  touched,
}: TCommentFormProps) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label} aria-label='Поле для комментария'>
        <textarea
          className={styles.input}
          value={value}
          {...register('commentText', {
            onChange,
          })}
          aria-invalid={errors.commentText ? 'true' : undefined}
        />
      </label>
      {touched && errors.commentText && (
        <div className={styles.error}>{errors.commentText?.message}</div>
      )}

      <button type='submit' className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
