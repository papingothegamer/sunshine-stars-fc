"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, Home, CreditCard, Truck, MapPin } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  { id: "personal", title: "Personal Details", icon: MapPin },
  { id: "delivery", title: "Delivery Options", icon: Truck },
  { id: "payment", title: "Payment", icon: CreditCard },
  { id: "confirmation", title: "Confirmation", icon: Home },
]

export function SouvenirCheckout() {
  const [currentStep, setCurrentStep] = useState(0)
  const [deliveryOption, setDeliveryOption] = useState("pickup")
  const { toast } = useToast()
  const router = useRouter()

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      toast({
        title: "Purchase Successful!",
        description: "Your order has been confirmed. Check your email for details.",
      })
      setTimeout(() => router.push("/"), 2000)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Souvenir Checkout
        </motion.h1>

        <div className="mb-8">
          <ol className="flex items-center w-full">
            {steps.map((step, index) => (
              <li key={step.id} className={`flex items-center ${index < steps.length - 1 ? "w-full" : ""}`}>
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${index <= currentStep ? "bg-primary text-white" : "bg-gray-200 text-gray-600"}`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <div className={`flex-1 ml-4 ${index === steps.length - 1 ? "hidden sm:block" : ""}`}>
                  <p className={`text-sm ${index <= currentStep ? "text-primary font-medium" : "text-gray-500"}`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 w-full h-0.5 ${index < currentStep ? "bg-primary" : "bg-gray-200"}`}></div>
                )}
              </li>
            ))}
          </ol>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{steps[currentStep].title}</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 0 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1234567890" />
                  </div>
                </div>
              )}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption}>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup">Pick up at stadium</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery">Home delivery</Label>
                    </div>
                  </RadioGroup>
                  {deliveryOption === "delivery" && (
                    <div className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="address">Delivery Address</Label>
                        <Input id="address" placeholder="123 Main St" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="New York" />
                        </div>
                        <div>
                          <Label htmlFor="postcode">Postcode</Label>
                          <Input id="postcode" placeholder="12345" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <p>Please complete the payment via bank transfer to the following account:</p>
                  <div className="bg-muted p-4 rounded-md">
                    <p>
                      <strong>Bank:</strong> Sunshine Bank
                    </p>
                    <p>
                      <strong>Account Name:</strong> Sunshine Stars FC
                    </p>
                    <p>
                      <strong>Account Number:</strong> 1234567890
                    </p>
                    <p>
                      <strong>Sort Code:</strong> 12-34-56
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Once you've completed the transfer, click "Next" to confirm your purchase.
                  </p>
                </div>
              )}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Purchase Confirmed!</h2>
                  <p>Your order has been confirmed. Please check your email for the order details.</p>
                  {deliveryOption === "pickup" ? (
                    <p>You can pick up your items at the stadium on match days.</p>
                  ) : (
                    <p>Your items will be delivered to the provided address within 5-7 business days.</p>
                  )}
                </div>
              )}
            </motion.div>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-between items-center">
          {currentStep > 0 ? (
            <Button onClick={handlePreviousStep} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          ) : (
            <Link href="/cart">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cart
              </Button>
            </Link>
          )}
          <div className="space-x-4">
            <Link href="/">
              <Button variant="ghost">
                <Home className="mr-2 h-4 w-4" /> Home
              </Button>
            </Link>
            <Button onClick={handleNextStep}>{currentStep < steps.length - 1 ? "Next" : "Finish"}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

