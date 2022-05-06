import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a010fac653e740",
        pass: "66bc343757b289"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject , body }: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Chrystian Santos <chrysmatheus@gmail.com>',
            subject,
            html: body,
        })
    };
}