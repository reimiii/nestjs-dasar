import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpRedirectResponse,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Redirect,
  Req,
  Res,
  UseFilters,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import { Connection } from '../connection/connection';
import { MailService } from '../mail/mail.service';
import { UserRepository } from '../user-repository/user-repository';
import { MemberService } from '../member/member.service';
import { User } from '@prisma/client';
import { LoginRequest, loginRequestValidation } from '../../model/login.model';
import { ValidationFilter } from '../../validation/validation.filter';
import { ValidationPipe } from '../../validation/validation.pipe';
import { TimeInterceptor } from '../../time/time.interceptor';

@Controller('/api/users')
export class UserController {
  // @Inject()
  // @Optional()
  // private userService: UserService;
  constructor(
    private service: UserService,
    private connection: Connection,
    private mail: MailService,
    @Inject('EmailService') private email: MailService,
    private userRepository: UserRepository,
    private memberService: MemberService,
  ) {}

  @UseFilters(ValidationFilter)
  @UsePipes(new ValidationPipe(loginRequestValidation))
  @Post('login')
  @Header('Content-Type', 'application/json')
  @UseInterceptors(TimeInterceptor)
  login(
    // @Body(new ValidationPipe(loginRequestValidation)) request: LoginRequest,
    @Query('name') name: string,
    @Body() request: LoginRequest,
  ) {
    return {
      data: `hello ${request.username}`,
    };
  }

  @Get('create')
  async create(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
  ): Promise<User> {
    if (!firstName) {
      throw new HttpException(
        {
          code: 400,
          errors: 'first name is required',
        },
        400,
      );
    }
    return this.userRepository.save(firstName, lastName);
  }

  @Get('connection') // get query name
  async getConnection(): Promise<string> {
    // this.userRepository.save();
    this.mail.send();
    this.email.send();

    console.info(this.memberService.getConnectionName());
    this.memberService.sendEmail();

    return this.connection.getName();
  }

  @Get('/di-hello') // get query name
  // @UseFilters(ValidationFilter)
  async helloDI(@Query('name') name: string): Promise<string> {
    return this.service.sayHello(name);
  }

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

  @Get('/i/:idUser') // get params id
  getByIdRecommend(@Param('idUser', ParseIntPipe) id: number): string {
    console.info(5 * id);
    return `GET by ID Recommended: ${id}`;
  }

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
