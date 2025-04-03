import { NextRequest, NextResponse } from 'next/server';
import { getTranslations } from 'next-intl/server';
import { createTransport } from 'nodemailer';

import { createContactFormSchema } from '@/lib/validations/contact-form-validations';

export async function POST(req: NextRequest) {
  const locale = req.headers.get('x-locale') || 'en';
  const t = await getTranslations({
    locale,
    namespace: 'shared.contact.responses',
  });
  const tValidation = await getTranslations({ locale });

  const contactFormSchema = createContactFormSchema(tValidation);
  const { name, email, subject, message } = await req.json();

  const result = contactFormSchema.safeParse({ name, email, subject, message });

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: t('invalidData'),
      },
      { status: 400 },
    );
  }

  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_PORT ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASSWORD ||
    !process.env.EMAIL_RECEIVER
  ) {
    return NextResponse.json(
      {
        success: false,
        message: t('envMissing'),
      },
      { status: 500 },
    );
  }

  try {
    const transporter = createTransport({
      service: 'Gmail',
      host: process.env.SMTP_HOST as string,
      port: parseInt(process.env.SMTP_PORT as string),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" "${email}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: subject,
      text: `${email} \n ${message}`,
    });

    return NextResponse.json(
      {
        success: true,
        message: t('success'),
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Email error: ', error);
    return NextResponse.json(
      {
        success: false,
        message: t('error'),
      },
      { status: 500 },
    );
  }
}
