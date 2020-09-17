export const loginForm = [
  {
    name: 'email',
    label: 'Email',
    type: 'text',
    placeholder: 'admin@gotravel.com'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder:'test1234'
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
    label: 'Tour Name',
    type: 'text'
  },
  {
    id: '3',
    name: 'price',
    label: 'Price',
    type: 'number'
  },
  {
    id: '4',
    name: 'difficulty',
    label: 'Difficulty',
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
    label: 'Participants',
    type: 'number',
    min: '1'
  },

  {
    id: '6',
    name: 'duration',
    label: 'Duration',
    type: 'number'
  },
  {
    id: '7',
    name: 'summary',
    label: 'Summary',
    type: 'text'
  },
  {
    id: '10',
    name: 'startDates',
    label: 'Start Dates',
    type: 'date'
  },
  {
    id: '15',
    name: 'startLocation',
    label: 'Location',
    type: 'text'
  },
]

export const imageForm = [
  {
    id: 1,
    name:'imageCover',
    label: 'Cover Image',
    type:'file'
  },
  {
    id: 2,
    name:'image1',
    label: 'Image 1',
    type:'file'
  },
  {
    id: 3,
    name:'image2',
    label: 'Image 2',
    type:'file'
  },
  {
    id: 4,
    name:'image3',
    label: 'Image 3',
    type:'file'
  }
]