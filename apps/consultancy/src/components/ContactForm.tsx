"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@lusabaini/ui/components/button";
import { Input } from "@lusabaini/ui/components/input";
import { Textarea } from "@lusabaini/ui/components/textarea";
import { Label } from "@lusabaini/ui/components/label";

const contactSchema = z.object({
  name: z.string().min(2, "O nome precisa ter pelo menos 2 caracteres"),
  email: z.string().email("Informe um e-mail válido"),
  message: z.string().min(10, "A mensagem precisa ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type Props = {
  onSuccess?: () => void;
  className?: string;
  submitLabel?: string;
};

export default function ContactForm({
  onSuccess,
  className,
  submitLabel = "Enviar mensagem",
}: Props) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Falha ao enviar a mensagem");
      }

      toast.success("Mensagem enviada!", {
        description: "Obrigada pelo contato. Respondo em até 2 dias úteis.",
      });

      reset();
      onSuccess?.();
    } catch (error) {
      toast.error("Não foi possível enviar", {
        description:
          error instanceof Error
            ? error.message
            : "Tente novamente em alguns minutos.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className ?? "space-y-5"}>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-foreground">
          Nome
        </Label>
        <Input
          id="name"
          placeholder="Seu nome"
          className="rounded-xl border-black/10 bg-white/50 focus-visible:border-black/20 focus-visible:ring-black/5"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          E-mail
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          className="rounded-xl border-black/10 bg-white/50 focus-visible:border-black/20 focus-visible:ring-black/5"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-foreground">
          Mensagem
        </Label>
        <Textarea
          id="message"
          placeholder="Conte um pouco sobre o seu momento e o que você precisa..."
          rows={5}
          className="rounded-xl border-black/10 bg-white/50 focus-visible:border-black/20 focus-visible:ring-black/5 resize-none"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Enviando..." : submitLabel}
      </Button>
    </form>
  );
}
