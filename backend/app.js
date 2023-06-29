require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { createUser, login } = require('./controllers/users');
const { signinValidator, signupValidator } = require('./middlewares/validation');
const NotFoundError = require('./utils/errors/NotFoundError');

const { PORT = 3000, MONGO_URL = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

const app = express();
app.use(cors());

mongoose.connect(MONGO_URL)
  .then(() => console.log('База данных подключена'))
  .catch((err) => console.log('Ошибка подключения к БД', err));

mongoose.set({ runValidators: true });

// подключаю парсеры
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
// роуты  пользователя
app.post('/signin', signinValidator, login);
app.post('/signup', signupValidator, createUser);

// Защита авторизацией
app.use(auth);

// подключаю роутинг
app.use('/', userRouter);
app.use('/', cardRouter);

app.all('/*', (req, res, next) => {
  next(new NotFoundError('Страница не существует'));
});

app.use(errorLogger);

// обработчики ошибок
app.use(errors());
app.use((err, req, res, next) => {
  const {
    statusCode = 500,
    message,
  } = err;
  res.status(statusCode)
    .send({
      message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
      err: err.message,
      stack: err.stack,
    });
  next();
});

// Если всё работает, консоль покажет, какой порт приложение слушает
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});