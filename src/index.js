const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 2020;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Customer Loanee Application',
  });
});

app.listen(PORT, () => {
  console.log(`The app is running on PORT ${PORT}`);
});
