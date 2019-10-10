// eslint-disable-next-line import/prefer-default-export
export const signUpConfig = {
  signUpFields: [
    { label: 'Name', key: 'name', required: true, displayOrder: 1, type: 'string' },
    { label: 'Email', key: 'email', required: true, displayOrder: 2, type: 'string' },
    {
      label: 'Phone Number',
      key: 'phone_number',
      required: true,
      displayOrder: 3,
      type: 'number'
    }
  ]
};
