import nodemailer from 'nodemailer';
import { MailAdapter, SendEmailData } from './../MailAdapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '99af4f1bbf71bc',
    pass: 'fd3dc2555df806',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendEmailData) {
    await transport.sendMail({
      from: 'Equipe BrHCastro <hello@brhcastro.com.br>',
      to: 'Henrique de Castro <hendecastro@gmail.com>',
      subject,
      html: body,
    });
  }
}
