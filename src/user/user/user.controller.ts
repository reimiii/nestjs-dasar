import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpRedirectResponse,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/api/users')
export class UserController {
  @Get('/sam-sam')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleResponse(): Record<string, string> {
    return {
      data: 'hello data sample response',
    };
  }

  @Get('view')
  setSomeView(@Query('name') name: string, @Res() response: Response) {
    response.render('index.html', {
      title: 'INI TITLE NYAA',
      name: name,
    });
  }

  @Get('/set-cookie')
  setCookie(@Query('name') name: string, @Res() response: Response) {
    response.cookie('name', name);
    response.status(200).send('success set cookie');
  }

  @Get('/get-cookie')
  getSomeCookie(@Req() request: Request): string {
    return request.cookies['name'];
  }

  @Get('/redirect')
  @Redirect('/', 301)
  redirect(@Query('version') version: string): HttpRedirectResponse {
    if (version && version === '5') {
      return { statusCode: 301, url: '/api/users/hello-r' };
    }
  }

  @Get('/hello-r') // get query params id
  async getQueryRecommend(
    @Query('name') name: string,
    @Query('location') location: string,
  ): Promise<string> {
    return `hello ${name ?? 'Guest'} from ${location || 'ID'}`;
  }

  // @Get('/i/:idUser') // get params id
  // getByIdRecommend(@Param('idUser') id: string): string {
  //   return `GET by ID Recommended: ${id}`;
  // }

  @Get('/hello') // get query params name
  getQueryNotRecommend(@Req() request: Request): string {
    return `GET query by name: ${request.query.name}`;
  }

  // @Get('/:idUser') // get params id
  // getByIdNotRecommend(@Req() request: Request): string {
  //   return `GET by ID: ${request.params.idUser}`;
  // }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get()
  get(): string {
    return 'GET STRING';
  }
}
