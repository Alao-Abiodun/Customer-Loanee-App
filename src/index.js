import express from 'express';

import userRoute from './routes/user.route';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 2020;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Customer Loanee Application',
  });
});

app.use('/api/v1', userRoute);

app.listen(PORT, () => {
  console.log(`The app is running on PORT ${PORT}`);
});
