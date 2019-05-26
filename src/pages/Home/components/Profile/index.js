import React, { Fragment } from 'react';
import { Avatar, Icon, Badge } from 'react-native-elements';
import { H1 } from '~/components';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {
  ProfileContainer, Salutation, Notification, styles,
} from './styles';

import { THEME_COLORS } from '~/utils/constants';

const NotificationItem = ({
  openScreen, iconName, iconType, badgeStatus,
}) => (
  <TouchableOpacity
    hitSlop={{
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
    }}
    onPress={openScreen}
  >
    <Icon name={iconName} type={iconType} color={THEME_COLORS.BLACK} size={22} />
    <Badge status={badgeStatus} containerStyle={styles.badge} />
  </TouchableOpacity>
);

const Profile = ({ navigation, user }) => (
  <Fragment>
    <Salutation>
      <H1 size={22}>Olá, </H1>
      <H1>{user.name}</H1>
    </Salutation>
    <ProfileContainer>
      <Notification>
        <NotificationItem
          openScreen={() => navigation.navigate('Messages')}
          iconName="mail"
          iconType="feather"
          badgeStatus="primary"
        />

        <NotificationItem
          openScreen={() => navigation.navigate('Messages')}
          iconName="map-pin"
          iconType="feather"
          badgeStatus="error"
        />

        <NotificationItem
          openScreen={() => navigation.navigate('Notifications')}
          iconName="bell"
          iconType="feather"
          badgeStatus="success"
        />
      </Notification>
      <Avatar
        rounded
        onPress={() => navigation.navigate('Settings')}
        size={16 * 2.2}
        source={{
          uri: user.avatar,
        }}
      />
    </ProfileContainer>
  </Fragment>
);

Profile.propTypes = {
  navigation: PropTypes.shape().isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
