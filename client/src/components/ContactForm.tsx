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
      className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-navy-900/5 border border-border"
    >
      <h3 className="text-2xl font-serif font-semibold text-navy-900 mb-6">Solicite seu Orçamento</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy-900">Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" className="bg-gray-50 border-gray-200 focus:border-primary/50 focus:ring-primary/20 h-12" {...field} />
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
                  <FormLabel className="text-navy-900">Telefone</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="(11) 99999-9999" 
                      className="bg-gray-50 border-gray-200 focus:border-primary/50 focus:ring-primary/20 h-12" 
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
                  <FormLabel className="text-navy-900">Cidade/Bairro</FormLabel>
                  <FormControl>
                    <Input placeholder="São Paulo, SP" className="bg-gray-50 border-gray-200 focus:border-primary/50 focus:ring-primary/20 h-12" {...field} />
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
                <FormLabel className="text-navy-900">E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="seu@email.com" type="email" className="bg-gray-50 border-gray-200 focus:border-primary/50 focus:ring-primary/20 h-12" {...field} />
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
                <FormLabel className="text-navy-900">Mensagem (Opcional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Conte um pouco sobre o seu projeto..." 
                    className="bg-gray-50 border-gray-200 focus:border-primary/50 focus:ring-primary/20 min-h-[120px] resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={mutation.isPending}
            className="w-full h-14 text-base font-semibold bg-primary hover:bg-primary/90 text-navy-900 shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
          >
            {mutation.isPending ? "Enviando..." : "Solicitar Consultoria Gratuita"}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
