import nodemailer from 'nodemailer';

export const sendEmail = async (email, message, name, subject) => {
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const logoUrl = "https://www.6ixshooteracademy.com/hosted/images/2a/bc56de02374a468708cf6e85b0d05b/6ix-logo-LONG-FINAL-black.jpg"
    // Email options

    const mailOptions = {
        from: email, // sender address
        to: process.env.EMAIL, // list of receivers
        replyTo: email, // The user's email address
        subject: subject,
        html: `
        <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ccc; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="${logoUrl}" alt="6ixShooter Academy Logo" style="max-width: 200px; border: 0;"/>
            </div>
            <div style="border-bottom: 2px solid #61C1DB; margin-bottom: 20px;">
                <h2 style="text-align: center; color: #61C1DB;">New Message from ${name}</h2>
            </div>
            <div style="color: #555; line-height: 1.5; font-size: 16px;">
                <p>Dear 6ixShooter Academy,</p>
                <p>You have received a new message from <strong>${name}</strong> (<a href="mailto:${email}" style="color: #61C1DB; text-decoration: none;">${email}</a>):</p>
                <div style="background: #f9f9f9; border-left: 4px solid #61C1DB; margin: 1.5em 0; padding: 0.5em 10px; font-style: italic;">
                    ${message.split('\n').join('<br>')}
                </div>
                <p>Best regards,</p>
                <p>${name}</p>
            </div>
        </div>
    `,
    };

    // Send email
    try {
        const sentMail = await transporter.sendMail(mailOptions);
        return { sentMail }
    } catch (error) {
        console.log(error);
        return { error }
    }
}


