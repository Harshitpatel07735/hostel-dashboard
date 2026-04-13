"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to set up?",
    answer: "You can be up and running in less than 30 minutes. Our bulk upload tools make it easy to import students from CSV or Excel files.",
  },
  {
    question: "Can students pay fees through the app?",
    answer: "Yes, we integrate with popular payment gateways like Razorpay, Stripe, and PayPal to allow for seamless digital payments with instant receipts.",
  },
  {
    question: "Is my data secure?",
    answer: "We use enterprise-grade encryption and secure database hosting on Vercel and PostgreSQL. Your student data is always protected.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Absolutely! You can try our Pro plan for 14 days with no credit card required. Experience all the premium features before you commit.",
  },
  {
    question: "Can I manage multiple buildings?",
    answer: "Yes, our platform is designed for multi-building management, allowing wardens to switch between blocks and floors with ease.",
  },
  {
    question: "Is there a mobile app for students?",
    answer: "Our platform is fully responsive and can be installed as a Progressive Web App (PWA), giving students a native-like experience on any smartphone.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900 px-6">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Need Some Help?</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight"> Frequently Asked <span className="text-primary italic">Questions.</span> </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mt-4"> Everything you need to know about HostelFlow and its ecosystem. </p>
        </div>

        <div className="max-w-4xl mx-auto glass dark:bg-slate-800 rounded-[3rem] p-8 md:p-12 shadow-2xl border-white/20">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 dark:border-slate-700/50 pb-2">
                <AccordionTrigger className="text-left text-lg font-black hover:text-primary transition-colors py-6 focus:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-md leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
