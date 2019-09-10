const getData = () => {
  return [
    {
      id: 'cjz3hw16g00cn0763tmxl4xbz',
      question: 'Toilet cleaning',
      createdAt: '2019-08-09T02:32:26.103Z',
      createdBy: {
        firstName: 'User-2',
        lastName: 'lastname-2'
      },
      reviewers: [
        {
          isReviewComplete: true,
          reviewer: {
            firstName: 'User-1',
            lastName: 'lastname-1'
          }
        },
        {
          isReviewComplete: false,
          reviewer: {
            firstName: 'User-3',
            lastName: 'lastname-3'
          }
        },
        {
          isReviewComplete: false,
          reviewer: {
            firstName: 'User-4',
            lastName: 'lastname-4'
          }
        },
        {
          isReviewComplete: false,
          reviewer: {
            firstName: 'User-4',
            lastName: 'lastname-4'
          }
        }
      ],
      comments: [],
      likes: []
    }
  ];
};

export default getData;
