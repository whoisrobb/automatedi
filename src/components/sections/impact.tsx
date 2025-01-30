import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Building2, Users, Landmark } from "lucide-react"

export default function Impact() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden">
            <CardHeader>
              <User className="w-8 h-8 mb-4" />
              <CardTitle className="text-xl font-semibold">For Individuals</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Connect: Gain access to secure, transparent systems</li>
                <li>Interact: Engage with smart technologies</li>
                <li>Distribute: Enjoy equitable access to resources</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden">
            <CardHeader>
              <Building2 className="w-8 h-8 mb-4" />
              <CardTitle className="text-xl font-semibold">For Businesses</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Connect: Enhance collaboration with real-time insights</li>
                <li>Interact: Leverage automation and predictive analytics</li>
                <li>Distribute: Deliver products and services efficiently</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden">
            <CardHeader>
              <Users className="w-8 h-8 mb-4" />
              <CardTitle className="text-xl font-semibold">For Communities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Connect: Build networks for collective progress</li>
                <li>Interact: Utilize smart infrastructure management</li>
                <li>Distribute: Create equitable resource allocation systems</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden">
            <CardHeader>
              <Landmark className="w-8 h-8 mb-4" />
              <CardTitle className="text-xl font-semibold">For Governments</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Connect: Enable intelligent urban planning</li>
                <li>Interact: Optimize municipal services with AI</li>
                <li>Distribute: Deliver critical infrastructure efficiently</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
