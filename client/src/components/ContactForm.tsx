import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  organization: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  type: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm({ type = "contact", title = "Send us a message" }: { type?: string, title?: string }) {
  const { mutate: submitContact, isPending } = useSubmitContact();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
      type: type,
    },
  });

  const onSubmit = (data: FormValues) => {
    submitContact(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-lg shadow-black/5">
      <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground">{title}</h3>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" placeholder="John Doe" {...form.register("name")} className="bg-background" />
            {form.formState.errors.name && <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" placeholder="john@example.com" {...form.register("email")} className="bg-background" />
            {form.formState.errors.email && <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="+91 98765 43210" {...form.register("phone")} className="bg-background" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="organization">Organization / School</Label>
            <Input id="organization" placeholder="Your Institution" {...form.register("organization")} className="bg-background" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea 
            id="message" 
            placeholder="How can we help you?" 
            rows={5}
            {...form.register("message")} 
            className="bg-background resize-none"
          />
          {form.formState.errors.message && <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>}
        </div>

        <Button 
          type="submit" 
          className="w-full py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all"
          disabled={isPending}
        >
          {isPending ? (
            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</>
          ) : "Submit Request"}
        </Button>
      </form>
    </div>
  );
}
