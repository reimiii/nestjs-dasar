import { Controller, Get, Post } from '@nestjs/common';

@Controller('/api/users')
export class UserController {
  @Post()
  post(): string {
    return 'POST';
  }

  @Get()
  get(): string {
    return 'GET STRING';
  }
}
