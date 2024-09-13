import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as mustacheExpress from 'mustache-express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { ValidationFilter } from './validation/validation.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);

  // app.useLogger(logger);

  app.use(cookieParser('Mana ini rahasia'));
  app.set('views', `${__dirname}/../views`);
  app.set('view engine', 'html');
  app.engine('html', mustacheExpress());

  app.useGlobalFilters(new ValidationFilter());
  // app.useGlobalPipes()

  const config = app.get(ConfigService);
  const port = config.get('PORT');

  await app.listen(port);
}

bootstrap();
