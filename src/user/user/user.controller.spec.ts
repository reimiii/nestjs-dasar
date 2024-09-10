import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import * as httpMock from 'node-mocks-http';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be using method in controller', async () => {
    const response = await controller.getQueryRecommend('Skravy', 'Bandung');
    expect(response).toBe('hello Skravy from Bandung');
  });

  it('should can get some view method', async () => {
    const response = httpMock.createResponse();
    controller.setSomeView('Mee', response);

    expect(response._getRenderView()).toBe('index.html');
    expect(response._getRenderData()).toEqual({
      title: 'INI TITLE NYAA',
      name: 'Mee',
    });
  });
});
