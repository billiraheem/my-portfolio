import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const { email, subject, message } = body;

  const { data, error } = await resend.emails.send({
    from: `Balikis <${fromEmail}>`,
    to: [fromEmail, email],
    subject: subject,
    react: <EmailTemplate subject={subject} message={message} />,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};