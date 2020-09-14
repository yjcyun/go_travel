export const loginForm = [
  {
    name: 'email',
    label: 'Email',
    type: 'text'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password'
  }
];

export const signupForm = [
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
    name: 'password',
    label: 'Password',
    type: 'password'
  },
  {
    name: 'passwordConfirm',
    label: 'Confirm Password',
    type: 'password'
  }
];

export const forgotPassForm = [
  {
    name: 'email',
    label: 'Email',
    type: 'text'
  }
]

export const tourForm = [
  {
    id: '1',
    name: 'name',
    label: 'Tour Name*',
    type: 'text'
  },
  {
    id: '2',
    name: 'slug',
    label: 'URL Name',
    type: 'text'
  },
  {
    id: '3',
    name: 'price',
    label: 'Price*',
    type: 'number'
  },
  {
    id: '4',
    name: 'difficulty',
    label: 'Difficulty*',
    type: 'select',
    values: [
      { label: 'Easy', value: 'easy' },
      { label: 'Medium', value: 'medium' },
      { label: 'Difficult', value: 'difficult' },
    ]
  },
  {
    id: '5',
    name: 'maxGroupSize',
    label: 'Participants*',
    type: 'number',
    min: '1'
  },

  {
    id: '6',
    name: 'duration',
    label: 'Duration*',
    type: 'number'
  },
  {
    id: '7',
    name: 'summary',
    label: 'Summary*',
    type: 'text'
  },
  {
    id: '8',
    name: 'priceDiscount',
    label: 'Discount',
    type: 'number'
  },
  {
    id: '9',
    name: 'description',
    label: 'Description',
    type: 'text'
  },
  {
    id: '10',
    name: 'startDates',
    label: 'Start Dates',
    type: 'date'
  },
  {
    id: '10',
    name: 'startLocation',
    label: 'Start Location Address',
    type: 'text'
  },
  {
    id: '15',
    name: 'guide',
    label: 'Guide Name',
    type: 'text'
  },
]
