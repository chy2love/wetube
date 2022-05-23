export const trending = (req, res) => {
  const videos = [
    {
      title: 'First video',
      rating: 5,
      comments: 2,
      createdAt: '2min ago',
      views: 59,
      id: 1,
    },
    {
      title: 'Second video',
      rating: 5,
      comments: 2,
      createdAt: '2min ago',
      views: 59,
      id: 2,
    },
    {
      title: 'Third video',
      rating: 5,
      comments: 2,
      createdAt: '2min ago',
      views: 59,
      id: 3,
    },
  ];
  return res.render('home', { pageTitle: 'Home', videos });
};

export const see = (req, res) =>
  res.render('watch', { pageTitle: 'Watch Videos' });

export const edit = (req, res) =>
  res.render('edit', { pageTitle: 'Edit Videos' });

export const search = (req, res) =>
  res.render('search', { pageTitle: 'Search Videos' });

export const deleteVideo = (req, res) =>
  res.render('deleteVideo', { pageTitle: 'Delete Videos' });

export const upload = (req, res) =>
  res.render('upload', { pageTitle: 'Upload Videos' });
