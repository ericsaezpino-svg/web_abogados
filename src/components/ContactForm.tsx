"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

import Button from "@/components/Button";

type Fields = {
  name: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
};

type Errors = Partial<Record<keyof Fields, string>>;

const initialFields: Fields = {
  name: "",
  email: "",
  phone: "",
  message: "",
  privacy: false,
};

const inputClasses =
  "w-full border border-navy-200 bg-white px-4 py-3 font-sans text-base text-ink transition-colors duration-200 placeholder:text-slate/60 focus:border-gold focus:outline-none";

function validate(fields: Fields): Errors {
  const errors: Errors = {};

  if (fields.name.trim().length < 2) {
    errors.name = "Indique su nombre.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) {
    errors.email = "Indique un email válido.";
  }

  if (fields.phone.trim() && !/^[+\d][\d\s().-]{6,}$/.test(fields.phone.trim())) {
    errors.phone = "Indique un teléfono válido.";
  }

  if (fields.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  if (!fields.privacy) {
    errors.privacy = "Debe aceptar la política de privacidad.";
  }

  return errors;
}

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(fields);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // TODO: conectar backend/servicio de email. Por ahora solo se simula el envío.
    setFields(initialFields);
    setSent(true);
  };

  if (sent) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 border border-gold/40 bg-gold-50 p-8"
      >
        <CheckCircle2 className="h-8 w-8 text-gold-700" aria-hidden="true" />
        <div>
          <h3 className="text-xl font-normal">Mensaje enviado</h3>
          <p className="mt-2 text-base text-slate">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nos pondremos en
            contacto con usted lo antes posible.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="font-sans text-sm tracking-wide text-navy underline decoration-gold decoration-1 underline-offset-4 transition-colors duration-200 hover:text-gold-700"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Nombre"
          required
          error={errors.name}
          value={fields.name}
          onChange={(value) => update("name", value)}
          autoComplete="name"
        />
        <Field
          id="phone"
          label="Teléfono"
          type="tel"
          error={errors.phone}
          value={fields.phone}
          onChange={(value) => update("phone", value)}
          autoComplete="tel"
        />
      </div>

      <Field
        id="email"
        label="Email"
        type="email"
        required
        error={errors.email}
        value={fields.email}
        onChange={(value) => update("email", value)}
        autoComplete="email"
      />

      <div>
        <label
          htmlFor="message"
          className="block font-sans text-sm font-medium text-navy"
        >
          Mensaje <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`mt-2 resize-y ${inputClasses} ${
            errors.message ? "border-red-500" : ""
          }`}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-slate">
          <input
            type="checkbox"
            name="privacy"
            checked={fields.privacy}
            onChange={(event) => update("privacy", event.target.checked)}
            aria-invalid={errors.privacy ? true : undefined}
            aria-describedby={errors.privacy ? "privacy-error" : undefined}
            className="mt-1 h-4 w-4 shrink-0 accent-gold"
          />
          <span>
            He leído y acepto la{" "}
            {/* TODO: enlazar la página real de política de privacidad. */}
            <a
              href="#"
              className="text-navy underline decoration-gold decoration-1 underline-offset-2 transition-colors duration-200 hover:text-gold-700"
            >
              política de privacidad
            </a>
            . <span className="text-gold">*</span>
          </span>
        </label>
        {errors.privacy ? (
          <p id="privacy-error" className="mt-2 text-sm text-red-600">
            {errors.privacy}
          </p>
        ) : null}
      </div>

      <Button type="submit" size="lg">
        Enviar mensaje
      </Button>

      <p className="text-xs text-slate">
        Los campos marcados con <span className="text-gold">*</span> son obligatorios.
      </p>
    </form>
  );
}

type FieldProps = {
  id: keyof Fields & string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "tel";
  required?: boolean;
  error?: string;
  autoComplete?: string;
};

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  error,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block font-sans text-sm font-medium text-navy">
        {label} {required ? <span className="text-gold">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-2 ${inputClasses} ${error ? "border-red-500" : ""}`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
