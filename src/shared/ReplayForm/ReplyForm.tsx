import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
} from 'react';
import styles from './replyform.css';
import { replyContext } from '../context/replyContext';

export function ReplyForm() {
  const refReply = useRef<HTMLTextAreaElement>(null);
  const { value, onChange } = useContext(replyContext);

  // ! uncontrolled
  // const [defaultValue, setDefaultValue] = useState('');
  // useEffect(() => {
  //   return setDefaultValue('Michael Rogov, ');
  // }, []);

  useEffect(() => {
    return onChange('Michael Rogov, ');
  }, [onChange]);
  useEffect(() => {
    return refReply.current?.focus();
  }, []);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        ref={refReply}
        // defaultValue={defaultValue}
        value={value}
        onChange={handleChange}
      />
      <button type='submit' className={styles.button}>
        Ответить
      </button>
    </form>
  );
}
