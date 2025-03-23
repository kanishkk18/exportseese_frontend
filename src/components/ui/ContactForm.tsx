import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { User, Mail, Phone } from "lucide-react";
import { sendContactEmail } from "@/utils/emailService";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().regex(/^[0-9\+\-\(\) ]{7,15}$/, {
    message: "Please enter a valid phone number",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSubmit: () => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const processSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      console.log("Form submitted:", data);
      const emailSent = await sendContactEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (emailSent) {
        toast.success("Message sent!", {
          description: "We'll get back to you as soon as possible.",
        });
        reset();
        onSubmit();
      } else {
        toast.error("Failed to send message", {
          description: "There was a problem sending your message. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred", {
        description: "There was a problem sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(processSubmit)} className="space-y-6 mt-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center gap-2">
          <User size={16} /> Name
        </Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="John Doe"
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail size={16} /> Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="john@example.com"
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center gap-2">
          <Phone size={16} /> Phone Number
        </Label>
        <Input
          id="phone"
          {...register("phone")}
          placeholder="+1 (555) 123-4567"
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
