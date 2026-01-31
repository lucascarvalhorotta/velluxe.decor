import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ContactForm() {
  const mutation = useSubmitContact();

  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    mode: "onChange", // Valida enquanto o usuário digita
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    },
  });

  function onSubmit(data: InsertContactRequest) {
    mutation.mutate(data, {
      onSuccess: () => {
        // Manda o evento pro Google Tag Manager
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "form_submission_success",
          formName: "contato_velluxe",
          // Se quiser mandar o e-mail ou cidade pro GTM (opcional):
          userEmail: data.email,
          userCity: data.city
        });

        form.reset();
      },
    });
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/10 p-8 md:p-10 rounded-2xl shadow-xl backdrop-blur-md border border-white/20"
    >
      <h3 className="text-2xl font-serif font-semibold text-white mb-6 text-center">Solicite seu Orçamento</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Nome Completo</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Telefone</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="(11) 99999-9999" 
                      className="bg-white/10 border-white/20 text-white" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Cidade/Estado</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Cascavel, PR" 
                      className="bg-white/10 border-white/20 text-white" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">E-mail</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="seu@email.com" 
                    type="email" 
                    className="bg-white/10 border-white/20 text-white" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Mensagem (Opcional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Conte sobre seu projeto..." 
                    className="bg-white/10 border-white/20 text-white min-h-[100px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            // O segredo está aqui: o botão só habilita se tudo estiver preenchido e correto
            disabled={mutation.isPending || !form.formState.isValid}
            className="w-full h-14 bg-[#D4AF37] hover:bg-[#C5A572] text-[#1a2231] font-bold disabled:opacity-50"
          >
            {mutation.isPending ? "Enviando..." : "Solicitar Consultoria Gratuita"}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}