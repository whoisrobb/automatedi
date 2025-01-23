import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t px-4 md:px-6 lg:px-8">
        <div className="py-16">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold">Automated Intelligence</span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                        Because a better world isn't a dream—it's a decision.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-semibold">Company</h3>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold">Resources</h3>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                                Documentation
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                                Help Center
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold">Legal</h3>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                                Terms
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                                Cookie Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-16 border-t pt-8">
                <p className="text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Automated Intelligence. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
