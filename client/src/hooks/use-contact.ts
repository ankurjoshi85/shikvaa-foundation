import { useMutation } from "@tanstack/react-query";
import { api, type ContactInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit the form");
      }
      
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your submission has been received. We will get back to you shortly.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message,
      });
    }
  });
}
