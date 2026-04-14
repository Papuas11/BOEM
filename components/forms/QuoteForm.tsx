'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const quoteSchema = z.object({
  fullName: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  product: z.string().min(2),
  targetMarket: z.string().min(2),
  service: z.string().min(2),
  message: z.string().min(10)
});

type QuoteInput = z.infer<typeof quoteSchema>;

export function QuoteForm() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<QuoteInput>({ resolver: zodResolver(quoteSchema) });

  const onSubmit = async (values: QuoteInput) => {
    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'quote', ...values })
    });
  };

  if (isSubmitSuccessful) {
    return <p className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm">Thanks. Your request has been sent.</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      {['fullName', 'company', 'email', 'product', 'targetMarket', 'service'].map((field) => (
        <label key={field} className="grid gap-2 text-sm">
          <span className="capitalize">{field}</span>
          <input {...register(field as keyof QuoteInput)} className="rounded-xl border border-brand-dark/15 px-4 py-3" />
        </label>
      ))}
      <label className="grid gap-2 text-sm">
        <span>Message</span>
        <textarea {...register('message')} className="min-h-28 rounded-xl border border-brand-dark/15 px-4 py-3" />
      </label>
      {Object.values(errors).length > 0 && <p className="text-sm text-brand-red">Please complete all required fields correctly.</p>}
      <button className="rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white">Send Request</button>
    </form>
  );
}
