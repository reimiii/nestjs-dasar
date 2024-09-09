import { Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/api/users')
export class UserController {
  @Get('/hello-r') // get query params id
  getQueryRecommend(
    @Query('name') name: string,
    @Query('location') location: string,
  ): string {
    return `hello ${name ?? 'Guest'} from ${location || 'ID'}`;
  }

  @Get('/i/:idUser') // get params id
  getByIdRecommend(@Param('idUser') id: string): string {
    return `GET by ID Recommended: ${id}`;
  }

  @Get('/hello') // get query params name
  getQueryNotRecommend(@Req() request: Request): string {
    return `GET query by name: ${request.query.name}`;
  }

  @Get('/:idUser') // get params id
  getByIdNotRecommend(@Req() request: Request): string {
    return `GET by ID: ${request.params.idUser}`;
  }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get()
  get(): string {
    return 'GET STRING';
  }
}
