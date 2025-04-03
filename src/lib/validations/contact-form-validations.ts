import { z } from 'zod';

type GetTranslations = (
  key: string,
  values?: Record<string, string | number>,
) => string;

export function createContactFormSchema(t: GetTranslations) {
  return z.object({
    name: z
      .string({
        required_error: t('shared.validations.name.required'),
      })
      .min(2, {
        message: t('shared.validations.name.min', { min: 2 }),
      })
      .max(50, {
        message: t('shared.validations.name.max', { max: 50 }),
      }),
    email: z
      .string({
        required_error: t('shared.validations.email.required'),
      })
      .email({
        message: t('shared.validations.email.invalid'),
      }),
    subject: z
      .string({
        required_error: t('shared.validations.subject.required'),
      })
      .min(2, {
        message: t('shared.validations.subject.min', { min: 2 }),
      })
      .max(50, {
        message: t('shared.validations.subject.max', { max: 50 }),
      }),
    message: z
      .string({
        required_error: t('shared.validations.message.required'),
      })
      .min(2, {
        message: t('shared.validations.message.min', { min: 2 }),
      })
      .max(500, {
        message: t('shared.validations.message.max', { max: 500 }),
      }),
  });
}

export type ContactFormSchema = ReturnType<typeof createContactFormSchema>;
