export class MailService {
  send(): void {
    console.info('send mail service...');
  }
}

export const mailService: MailService = new MailService();
