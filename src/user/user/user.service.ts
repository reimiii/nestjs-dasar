import { Injectable } from '@nestjs/common';
import { ValidationService } from '../../validation/validation/validation.service';
import { z } from 'zod';

@Injectable()
export class UserService {
  constructor(private validateService: ValidationService) {}

  sayHello(name: string): string {
    const sch = z.string().max(100).min(3);
    const res = this.validateService.validate(sch, name);
    return `hello ${res}`;
  }
}
