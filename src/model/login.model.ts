import { z } from 'zod';

export class LoginRequest {
  username: string;
  password: string;
}

export const loginRequestValidation = z.object({
  username: z.string().max(20).min(1),
  password: z.string().max(20).min(1),
});
