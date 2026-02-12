"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, MessageCircle, Send } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const schema = z.object({
  name: z.string().min(2, "الاسم مطلوب"),
  email: z.string().email("بريد غير صحيح").optional().or(z.literal("")),
  message: z.string().min(8, "اكتب رسالة أوضح")
});

type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!res.ok) {
        throw new Error("send-failed");
      }

      toast.success("تم إرسال الرسالة بنجاح");
      reset();
    } catch {
      toast.message("تعذر الإرسال عبر السيرفر. سيتم فتح البريد.");
      const mail = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com"}?subject=رسالة من ${values.name}&body=${encodeURIComponent(values.message)}`;
      window.location.href = mail;
    }
  };

  const copyEmail = async () => {
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com";
    await navigator.clipboard.writeText(email);
    toast.success("تم نسخ البريد");
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="تواصل معي"
        description="اترك رسالتك وسأعود لك بأسرع وقت."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <div>
            <label className="text-sm text-white/70">الاسم</label>
            <Input {...register("name")} placeholder="اسمك الكامل" />
            {errors.name ? (
              <p className="mt-1 text-xs text-rose-400">{errors.name.message}</p>
            ) : null}
          </div>
          <div>
            <label className="text-sm text-white/70">البريد (اختياري)</label>
            <Input {...register("email")} placeholder="name@email.com" />
            {errors.email ? (
              <p className="mt-1 text-xs text-rose-400">{errors.email.message}</p>
            ) : null}
          </div>
          <div>
            <label className="text-sm text-white/70">الرسالة</label>
            <textarea
              {...register("message")}
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-400/40"
              placeholder="اكتب رسالتك هنا..."
            />
            {errors.message ? (
              <p className="mt-1 text-xs text-rose-400">{errors.message.message}</p>
            ) : null}
          </div>
          <Button type="submit" variant="glow" size="lg" disabled={isSubmitting}>
            إرسال الرسالة <Send size={16} />
          </Button>
        </form>

        <div className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">تواصل مباشر</h3>
            <p className="text-sm text-white/60">
              يمكنك التواصل معي عبر القنوات التالية.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Button asChild variant="secondary">
                <a href="https://t.me/example" target="_blank" rel="noreferrer">
                  Telegram <Send size={16} />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="https://wa.me/44141294" target="_blank" rel="noreferrer">
                  WhatsApp <MessageCircle size={16} />
                </a>
              </Button>
              <Button variant="ghost" onClick={copyEmail}>
                نسخ البريد <Mail size={16} />
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Badge tone="accent">متاح للرد خلال 24 ساعة</Badge>
            <p className="mt-3 text-sm text-white/60">
              يهمني أن تكون تجربتك أفضل، لا تتردد في مشاركة اقتراحك أو سؤالك.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
