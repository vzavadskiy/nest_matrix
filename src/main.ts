import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  //? Добавим параметр типа к методу create, показывая, что мы хотим работать
  //? с объектом app, как с приложением express.
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //? Сообщим приложению, где искать наши views.
  app.setBaseViewsDir(join(__dirname, '../views'));
  //? И укажем, какой шаблонизатор использовать
  app.setViewEngine('pug');
  await app.listen(PORT, () => console.log(`Server started on ${PORT}`));
}

bootstrap();
