import React from 'react';
import styles from './userblock.css';
import { Icon } from '../../../Icon';
import { EColors, EIcons } from '../../../../types/enums';
import { Break } from '../../../Break';
import { Text } from '../../../Text';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=https://reactredditb4adeploy4-mav76rus.b4a.run/auth&duration=permanent&scope=read submit identity`}
      className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt='user avatar'
            className={styles.avatarImage}
          />
        ) : (
          <Icon size={50} name={EIcons.anon} />
        )}
      </div>

      <div className={styles.username}>
        <Break size={12} />
        {loading ? (
          <Text size={28} color={EColors.grey99}>
            Загрузка...
          </Text>
        ) : (
          <Text size={28} color={username ? EColors.black : EColors.grey99}>
            {username || 'Аноним'}
          </Text>
        )}
      </div>
    </a>
  );
}

UserBlock.defaultProps = {
  avatarSrc: null,
  username: null,
  loading: false,
};
