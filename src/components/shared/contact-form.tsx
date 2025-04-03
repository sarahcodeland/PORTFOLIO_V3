'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations, useLocale } from 'next-intl';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { createContactFormSchema } from '@/lib/validations/contact-form-validations';

export function ContactForm() {
  const t = useTranslations('shared.contact.contactForm');
  const tResponses = useTranslations('shared.contact.responses');
  const tValidation = useTranslations();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  const contactFormSchema = createContactFormSchema(tValidation);

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const handleSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    startTransition(async () => {
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-type': 'application/json',
            'x-locale': locale,
          },
        });

        const data = await response.json();
        toast({
          title: data.success ? tResponses('success') : tResponses('error'),
          description: data.message,
          variant: data.success ? 'default' : 'destructive',
        });

        if (data.success) {
          contactForm.reset();
        }
      } catch (error) {
        console.log(error);
        toast({
          title: tResponses('error'),
          description: tResponses('somethingWentWrong'),
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>{t('title')}</CardTitle>
        <CardDescription>{t('description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...contactForm}>
          <form
            className='space-y-4'
            onSubmit={contactForm.handleSubmit(handleSubmit)}
          >
            <FormField
              control={contactForm.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('name')}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('email')}</FormLabel>
                  <FormControl>
                    <Input type='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name='subject'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('subject')}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('message')}</FormLabel>
                  <FormControl>
                    <Textarea rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className='w-full' isLoading={isPending} type='submit'>
              {t('submitBtn')}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
