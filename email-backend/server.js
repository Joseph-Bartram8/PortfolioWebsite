require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

// Configure One.com SMTP
const transporter = nodemailer.createTransport({
    host: 'mailout.one.com',
    port: 465, // Use SSL/TLS as recommended
    secure: true,
    auth: {
        user: process.env.SMTP_USER, // Your One.com email (e.g., contactme@josephbartram.co.uk)
        pass: process.env.SMTP_PASS  // Your One.com email password
    }
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'contactme@josephbartram.co.uk',
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.toString() });
        }
        res.status(200).json({ message: 'Email sent successfully!', info });
    });
});

app.listen(5000, () => console.log('Server running on port 5000'));
