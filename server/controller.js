const models = require('./models.js');

module.exports = {
  getSeekers: (req, res) => {
    models.getAllSeekers()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getASeeker: (req, res) => {
    console.log('here???');
    models.getASeeker(req.params.uid)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getEmployers: (req, res) => {
    models.getAllEmployers()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getAnEmployer: (req, res) => {
    models.getAnEmployer(req.params.uid)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getJobs: (req, res) => {
    models.getAllJobs()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getAJob: (req, res) => {
    models.getAJob(req.params.id)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getBlogPosts: (req, res) => {
    models.getAllBlogPosts()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getJobsByIdArray: (req, res) => {
    console.log('getJobsByIdArray query', req.query);
    models.getJobsByIdArray(req.query.ids)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  getSeekersByIdArray: (req, res) => {
    models.getSeekersByIdArray(req.query)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  updateJobApplied: (req, res) => {
    models.updateJobApplied(req.query)
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  updateJobInterested: (req, res) => {
    models.updateJobInterested()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
  updateEmployerInterested: (req, res) => {
    models.updateEmployerInterested()
      .then((dbRes) => res.send(dbRes))
      .catch((err) => res.status(400).send(err));
  },
};
