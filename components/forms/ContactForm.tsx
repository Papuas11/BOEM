'use client';

import { useForm } from 'react-hook-form';

type ContactInput = { name: string; email: string; subject: string; message: string };

export function ContactForm() {
  const { register, handleSubmit, reset } = useForm<ContactInput>();

  const onSubmit = async (values: ContactInput) => {
    await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'contact', ...values }) });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <input {...register('name', { required: true })} placeholder="Name" className="rounded-xl border border-brand-dark/15 px-4 py-3" />
      <input {...register('email', { required: true })} placeholder="Email" className="rounded-xl border border-brand-dark/15 px-4 py-3" />
      <input {...register('subject', { required: true })} placeholder="Subject" className="rounded-xl border border-brand-dark/15 px-4 py-3" />
      <textarea {...register('message', { required: true })} placeholder="Message" className="min-h-28 rounded-xl border border-brand-dark/15 px-4 py-3" />
      <button className="rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-white">Send Message</button>
    </form>
  );
}
