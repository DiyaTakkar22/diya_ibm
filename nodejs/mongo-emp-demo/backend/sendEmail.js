import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    host: 'mail.gmail.com',
    port: 465,
    secure: true,
    service: 'Gmail',
    auth: {
        user: 'sravyakanakam.ucen@gmail.com',
        pass: 'ngvvvpinxtfeazck'
    }
});
const sendEmail = () => {
    const mailOptions = {
        from: 'sravyakanakam.ucen@gmail.com',
        to: 'vamandeshmukh@yahoo.com',
        subject: 'ghj',
        text: 'node testing'
    };
    transporter.sendMail(mailOptions);
};
export { sendEmail };









