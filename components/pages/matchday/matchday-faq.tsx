"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What items are prohibited in the stadium?",
    answer:
      "Prohibited items include: weapons, fireworks, alcohol, glass bottles, cans, umbrellas, professional cameras, and drones. Any items that could be considered dangerous or disruptive are not permitted.",
  },
  {
    question: "Is there accessible seating available?",
    answer:
      "Yes, Sunshine Stadium provides accessible seating areas for disabled supporters and their companions. Please contact our ticket office for specific arrangements and requirements.",
  },
  {
    question: "What are the public transport options?",
    answer:
      "The stadium is well-served by public transport. Several bus routes stop nearby, and we provide a shuttle service from major transport hubs on matchdays.",
  },
  {
    question: "Are there baby changing facilities?",
    answer:
      "Yes, baby changing facilities are available in all family areas and accessible toilets throughout the stadium.",
  },
  {
    question: "Can I bring food and drinks?",
    answer:
      "Small snacks and sealed non-alcoholic beverages in plastic bottles (up to 500ml) are permitted. However, we encourage using our stadium catering facilities.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "We recommend arriving at least 60 minutes before kick-off to allow time for security checks and finding your seat. Gates open 2 hours before the match starts.",
  },
]

export function MatchdayFAQ() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}

