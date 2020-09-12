export const editProfile = [
  {
    name: 'name',
    label: 'Name',
    type: 'text'
  },
  {
    name: 'email',
    label: 'Email',
    type: 'text'
  },
  {
    name: 'avatar',
    label: 'Profile Avatar',
    type: 'file',
    accept:'.jpg, .png, .jpeg'
  },
];

export const changePassword = [
  {
    name: 'currentPassword',
    label: 'Current Password',
    type: 'password'
  },
  {
    name: 'newPassword',
    label: 'New Password',
    type: 'password'
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password'
  }
];
