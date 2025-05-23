import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ChevronDown, Truck, Calendar, FileText, Users, BarChart, Package } from "lucide-react"

// Add this import at the top of the file
import FilloutForm from '@/components/FilloutForm'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between md:justify-start">
          <div className="w-full flex justify-center md:justify-start md:w-auto">
            <Image
              src="/logo.png"
              alt="WasteFlow Logo"
              width={120}
              height={32}
              className="h-20 w-auto pt-1"
              priority
            />
          </div>
          <div className="flex items-center gap-2">


          </div>
          <nav className="hidden md:flex items-center gap-6 pl-96">
            <Link href="#features" className="text-sm font-medium hover:text-green-600">
              Features
            </Link>
            <Link href="#who-its-for" className="text-sm font-medium hover:text-green-600">
              Built For
            </Link>
            <Link href="#why-different" className="text-sm font-medium hover:text-green-600">
              Why Switch?
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-green-600">
              FAQ
            </Link>
          </nav>
          {/* <Button className="bg-green-600 hover:bg-green-700">Join Waitlist</Button> */}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-white py-12 md:py-24">
          <div className="container grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-600">
                <span>Waste Management Software That Actually Works for You</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Smarter Waste Operations Start Here
              </h1>
              <p className="text-xl text-slate-600">Live in hours, Not weeks. No onboarding drama</p>
              <p className="text-slate-600">
                Join the waitlist for WasteFlow—the first all-in-one operations platform built for waste haulers that
                you can set up and customize on your own.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  🚀 Join the Waitlist
                </Button> */}
              </div>

              <p className="text-sm text-slate-500">
                Beta access is limited. Get early access, exclusive pricing, and full onboarding included.
              </p>
              {/* <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#FBBF24"
                        stroke="#FBBF24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium">5.0 (Early Access)</span>
                </div>
              </div> */}
            </div>
            <div className="relative flex items-center justify-center">
              <FilloutForm />
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section id="who-its-for" className="bg-slate-50  py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Built For</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">Independent and regional haulers</h3>
                  <p className="text-slate-600">Perfect for local and regional waste management companies.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">
                    Roll-off, dumpster rental, residential & commercial operators
                  </h3>
                  <p className="text-slate-600">Supports all service types and business models.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">Teams with 2 to 100+ vehicles</h3>
                  <p className="text-slate-600">Scales with your business from startup to enterprise.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">Operators tired of juggling tools</h3>
                  <p className="text-slate-600">
                    Replace spreadsheets, QuickBooks, paper logs, and customer complaints.
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="mt-8 text-center text-lg">
              If you've outgrown your tools—but not your team—WasteFlow is built for you.
            </p>
          </div>
        </section>

        {/* Why We're Different */}
        <section id="why-different" className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">Why Switch</h2>
              <p className="mb-8 text-lg text-slate-600">
                Forget everything you know about bloated, expensive "enterprise" systems.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold">Plug-and-play</h3>
                  <p className="text-slate-600">Get up and running in a day</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold">Self-service friendly</h3>
                  <p className="text-slate-600">Set it up without IT or consultants</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold">Customizable</h3>
                  <p className="text-slate-600">Tailor service types, routes, billing rules, and alerts</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold">No costly onboarding</h3>
                  <p className="text-slate-600">We help, but you don't need us to launch</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold">Mobile-first</h3>
                  <p className="text-slate-600">Drivers, managers, and customers get simple tools that just work</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* What It Can Do */}
        <section id="features" className="bg-slate-50 py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">What It Can Do</h2>

            <div className="mb-16 grid gap-8 md:grid-cols-2">
              <div>
                <br />
                <br />
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-2">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>

                  <h3 className="text-xl font-bold">Set Up in Hours, Not Weeks.</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Onboarding takes less than 72 hours (and yes—you can do it yourself)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Import routes, customers, and pricing with simple CSV templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Use built-in defaults, or configure your own service rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Use WasteFlow as-is or customize every setting, label, and module</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[350px]">
                <Image
                  src="/steptodown.com854594.jpg"
                  alt="WasteFlow Setup Dashboard"
                  fill
                  className="rounded-lg shadow-lg"


                />
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <Truck className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-bold"> Route Optimization & Driver Tools</h3>
                  </div>
                  <p className="mb-4 text-sm text-slate-600">Built to make your drivers more efficient and your routes more profitable.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Drag-and-drop route planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Real-time vehicle tracking with map view</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Smart stop-skipping (auto-detect no bins/empty lots)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Overflow detection (manual or AI photo tagging)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Driver alerts when customer status changes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <Package className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-bold"> Bin & Asset Management</h3>
                  </div>
                  <p className="mb-4 text-sm text-slate-600">Finally get a handle on your bins like the valuable assets they are.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Assign, locate, and monitor active bins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>QR, barcode, or RFID support (optional)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Damage logging and service history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Swap tracking and customer reassignment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Bin inventory dashboard by type and size</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <FileText className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-bold"> Smart Billing & Accounts Receivable</h3>
                  </div>
                  <p className="mb-4 text-sm text-slate-600">Your back office just got a whole lot smarter—and faster.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Automatic invoice generation post-service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Per-bin, per-weight, or per-service billing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>QuickBooks & Stripe integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Autopay options + late payment reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>AR tracking and collection rules</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-bold"> Customer Portal & Communication</h3>
                  </div>
                  <p className="mb-4 text-sm text-slate-600">Let customers handle more—without calling your office.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>White-labeled self-service portal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Request pickups and bin swaps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>View/download invoices and history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Make payments and manage autopay</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>In-application chat support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <Calendar className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-bold"> Dispatch & Notifications Center</h3>
                  </div>
                  <p className="mb-4 text-sm text-slate-600">Power tools for your dispatchers, so nothing falls through the cracks.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Work order creation and assignment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Real-time service status tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Custom alerts for service exceptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Visual schedule with route density map</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Dispatcher-to-driver communication</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <BarChart className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-bold"> Reporting & Operations Dashboards</h3>
                  </div>
                  <p className="mb-4 text-sm text-slate-600">See your business clearly. Act on what matters.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Profitability reports by route and type</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Driver performance dashboards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Missed pickup logs with details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Bin utilization and service metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>AR aging and payment tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Savings Section */}
        {/* <section className="bg-green-800 py-16 text-white">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-5xl font-bold">$100,000.</h2>
                <p className="mb-6 text-xl">
                  Learn how midsize waste haulers are saving $100k per year with WasteFlow.
                </p>
                <Button variant="outline" className="w-fit border-white text-white hover:bg-white hover:text-green-800">
                  Join the Waitlist
                </Button>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[350px]">
                  <Image
                    src="/placeholder.svg?height=350&width=500"
                    alt="Waste Management Professional"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Streamline Processes Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative flex items-center justify-center">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[350px]">
                  <Image
                    src="/garbage.jpg"
                    alt="Streamlined Waste Operations"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-3xl font-bold text-slate-900">Streamline processes & ensure compliance</h2>
                <p className="mb-6 text-slate-600">
                  Digital records, automated reminders, and real-time tracking help you stay compliant and efficient.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Automatic service verification with GPS and timestamps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Digital weight tickets and service logs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Maintenance scheduling and alerts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reduce Costs Section */}
        <section className="bg-slate-50 py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 md:text-3xl text-2xl  font-bold text-slate-900">
                  Reduce costs & downtime while improving asset utilization
                </h2>
                <p className="mb-6 text-slate-600">
                  Optimize routes, reduce missed pickups, and keep your fleet running at peak efficiency.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Cut fuel costs with optimized routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Reduce missed pickups and customer complaints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Maximize asset utilization and lifespan</span>
                  </li>
                </ul>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[350px]">
                  <Image
                    src="/garbage1.jpg"
                    alt="Cost Reduction"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beta Users Section */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">Join The Beta</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <span className="text-xl font-bold text-green-600">$</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Lifetime discounted pricing</h3>
                  <p className="text-slate-600">Lock in the lowest rates we'll ever offer.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <span className="text-xl font-bold text-green-600">🔍</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Priority feature feedback</h3>
                  <p className="text-slate-600">Direct input on our product roadmap.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <span className="text-xl font-bold text-green-600">👋</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Concierge onboarding</h3>
                  <p className="text-slate-600">Personalized setup assistance if you want it.</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              {/* <Button size="lg" className="bg-green-600 hover:bg-green-700">
                🚀 Join the Waitlist
              </Button> */}

            </div>
          </div>
        </section>

        {/* Pricing Highlights */}
        {/* <section className="bg-slate-50 py-12">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2">
                  <Package className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-medium">No setup fees</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2">
                  <BarChart className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-medium">Annual discounts available</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-medium">No forced demos or upsells</span>
              </div>
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">FAQ</h2>
            <div className="mx-auto max-w-3xl space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex cursor-pointer items-center justify-between">
                  <h3 className="text-lg font-medium">Who is WasteFlow built for?</h3>
                  <ChevronDown className="h-5 w-5" />
                </div>
                <div className="mt-2">
                  <p className="text-slate-600">WasteFlow is made for small to mid-sized haulers who are ready to move beyond spreadsheets, clunky software, and disconnected tools. Whether you're running roll-off, residential, or commercial routes—if you're managing 2 to 100+ trucks, this is built for you.

                  </p>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex cursor-pointer items-center justify-between">
                  <h3 className="text-lg font-medium">How long does it take to get started?
                  </h3>
                  <ChevronDown className="h-5 w-5" />
                </div>
                <div className="mt-2">
                  <p className="text-slate-600">
                    Most teams are live in under 72 hours. WasteFlow is plug-and-play—no developers, no IT team, and no complex onboarding required.


                  </p>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex cursor-pointer items-center justify-between">
                  <h3 className="text-lg font-medium">Do you offer help with setup?
                  </h3>
                  <ChevronDown className="h-5 w-5" />
                </div>
                <div className="mt-2">
                  <p className="text-slate-600">
                    Yes. Every beta user gets full white-glove onboarding and support. We’ll help import routes, customer data, and billing rules—so your team can hit the ground running.


                  </p>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex cursor-pointer items-center justify-between">
                  <h3 className="text-lg font-medium">Can we start simple and expand later?
                  </h3>
                  <ChevronDown className="h-5 w-5" />
                </div>
                <div className="mt-2">
                  <p className="text-slate-600">
                    Absolutely. You can start with core tools—like billing or routing—and add more modules like driver apps, customer portals, or asset tracking as your team scales. WasteFlow is built to grow with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-green-800 py-16 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold">Smarter Hauling Starts Here</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              WasteFlow is the modern command center for your waste operation. Designed for speed, built for growth, and
              simple enough to run without a developer or IT lead.
            </p>
            {/* <div className="mb-8 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Easy setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>No calls required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Built for waste professionals</span>
              </div>
            </div> */}
            {/* <Button size="lg" className="bg-white text-green-800 hover:bg-slate-100">
              🚀 Join the Waitlist
            </Button> */}
            {/* <p className="mt-4 text-sm">Let us know you're interested. We'll invite you when your slot opens.</p> */}
          </div>
        </section>

        {/* Logos Section */}
        {/* <section className="py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Put your fleet data to work for you</h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="h-12 w-32 bg-slate-200"></div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Testimonials */}
        {/* <section className="bg-slate-50 py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
              Supporting your growth at every milestone
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-slate-200">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Testimonial"
                      width={300}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Inspection Innovation: General Industries's safety and compliance journey with Whip Around
                  </h3>
                  <p className="mb-4 text-slate-600">John Doe, Operations Manager</p>
                  <Button variant="outline" className="w-full">
                    Read Case Study
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-slate-200">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Testimonial"
                      width={300}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    How ABC Waste reduced missed pickups by 85% in their first month
                  </h3>
                  <p className="mb-4 text-slate-600">Jane Smith, Fleet Manager</p>
                  <Button variant="outline" className="w-full">
                    Read Case Study
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-slate-200">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Testimonial"
                      width={300}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    XYZ Hauling's journey to paperless operations and 30% cost reduction
                  </h3>
                  <p className="mb-4 text-slate-600">Robert Johnson, CEO</p>
                  <Button variant="outline" className="w-full">
                    Read Case Study
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Final CTA */}
        <section className="py-16">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Start streamlining your fleet operations with WasteFlow
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
              Join the waitlist today and be among the first to transform your waste management operations.
            </p>
            <div className="relative flex items-center justify-center">
              <FilloutForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-12 text-white">
        <div className="container">
          {/* <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">Features</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Route Optimization
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Driver Tools
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Asset Tracking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Smart Billing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Customer Portal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <div className="flex justify-between">   <p>Hello@Trywasteflow.com</p>   <p>© 2025 WasteFlow. All rights reserved.</p></div>
          </div>
        </div>
      </footer>
    </div>
  )
}
