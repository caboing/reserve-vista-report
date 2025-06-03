
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, CheckCircle, TrendingUp } from "lucide-react";

const CLIENTS = [
  {
    id: "scenium",
    name: "Scenium Blockchain",
    logo: "https://www.scenium.io/_image?href=%2F_astro%2Fscenium.wuHdhx7C.png&w=162&h=43&f=webp",
    type: "Tokenizer",
    totalReserve: "BRL 5,789,421.33",
    lastUpdate: "May 06, 2025 - 14:30 UTC",
    frequency: "Every 6 hours",
    status: "active",
    link: "/proof-of-reserves/scenium"
  },
  {
    id: "tokeniza",
    name: "Tokeniza Stable Coin",
    logo: "T",
    type: "Stable Coin",
    totalReserve: "US$ 12,456,789.00",
    lastUpdate: "May 06, 2025 - 15:00 UTC",
    frequency: "Every 1 hour",
    status: "active",
    link: "/proof-of-reserves/tokeniza"
  },
  {
    id: "avenia",
    name: "Avenia Stable Coin",
    logo: "A",
    type: "Stable Coin",
    totalReserve: "US$ 8,921,345.67",
    lastUpdate: "May 06, 2025 - 14:45 UTC",
    frequency: "Every 2 hours",
    status: "active",
    link: "/proof-of-reserves/avenia"
  }
];

const Home = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FF</span>
                </div>
                <span className="text-xl font-bold">Fact Finance</span>
              </div>
              
              <nav className="hidden md:flex space-x-6">
                <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a>
                <a href="#clients" className="text-muted-foreground hover:text-primary transition-colors">Clients</a>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </nav>
              
              <ThemeSwitch />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Transparency and Trust for the Web3 Ecosystem
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Verify the proof of reserve for major tokenized assets in real-time.
            </p>
            <div className="max-w-4xl mx-auto text-left bg-white/50 dark:bg-gray-900/50 rounded-lg p-8 backdrop-blur">
              <p className="text-lg leading-relaxed">
                Fact Finance acts as a data infrastructure that ensures the traceability of backing, connecting smart contracts to verifiable information from custodians, financial institutions, and independent audits. Our platform offers a single point of transparency and independent verification for issuers, regulators, and investors.
              </p>
            </div>
          </div>
        </section>

        {/* Client Proof of Reserve Section */}
        <section id="clients" className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Clients: Real-Time Proof of Reserve</h2>
              <p className="text-lg text-muted-foreground">
                Continuous verification for leading tokenized assets
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CLIENTS.map((client) => (
                <Card key={client.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {client.logo.startsWith('http') ? (
                          <img src={client.logo} alt={client.name} className="w-10 h-10 object-contain" />
                        ) : (
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">{client.logo}</span>
                          </div>
                        )}
                        <div>
                          <h3 className="font-semibold">{client.name}</h3>
                          <Badge variant="secondary" className="text-xs">{client.type}</Badge>
                        </div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Total in Reserve</p>
                      <p className="text-2xl font-bold text-green-600">{client.totalReserve}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Last Update:</span>
                        <span className="text-sm">{client.lastUpdate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Frequency:</span>
                        <span className="text-sm">{client.frequency}</span>
                      </div>
                    </div>
                    
                    <Link to={client.link}>
                      <Button className="w-full" variant="outline">
                        View Reserve Details <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How Verification Works */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Continuous and Auditable Validation</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Direct Connection</h3>
                  <p className="text-sm text-muted-foreground">
                    Through connections with custodians, financial institutions, and independent audits, we validate that issued tokens remain backed by real assets.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Updated Data</h3>
                  <p className="text-sm text-muted-foreground">
                    Our data is updated, auditable, and synchronized with onchain operations.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Institutional Trust</h3>
                  <p className="text-sm text-muted-foreground">
                    This continuous verification layer strengthens institutional trust and reduces the risk of discrepancies between the asset and the token.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Advanced Features</h3>
                  <p className="text-sm text-muted-foreground">
                    Configure issuance locks, inconsistency alerts, and automatic pauses, making backing transparency programmable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stablecoins Focus Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white p-8 md:p-12">
              <div className="max-w-4xl">
                <h2 className="text-3xl font-bold mb-6">Verified Backing for Stablecoins</h2>
                <div className="space-y-4 text-blue-100">
                  <p>
                    In the case of stablecoins, Fact Finance offers a dynamic dashboard that brings together both ends of the backing: on one side, a real-time connection with the custodian, providing updated reserve data; on the other, continuous monitoring of the quantity of tokens issued.
                  </p>
                  <p>
                    This combination allows for clear, public, and independent verification of whether the stablecoin is properly backed, with sufficient reserves to cover 100% of the issuance.
                  </p>
                  <p>
                    Furthermore, the dashboard displays the frequency of updates and flags any inconsistencies, offering an additional layer of trust for issuers, regulators, and investors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Strengthen Trust in Your Digital Asset</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how Fact Finance can bring more transparency and security to your tokens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">FF</span>
                </div>
                <span className="font-semibold">Fact Finance</span>
              </div>
              
              <div className="flex space-x-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4 md:mt-0">
                © 2025 Fact Finance. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Home;
