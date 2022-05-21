export const trending = (req, res) => res.render('home', { pageTitle: 'Home' });

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
