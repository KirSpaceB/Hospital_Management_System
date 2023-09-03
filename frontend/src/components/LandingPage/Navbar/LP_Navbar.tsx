import { Disclosure } from '@headlessui/react';
import CompanyLogo from "../../../shared/CompanyLogo"
import CallToAction from "../../../shared/CallToAction"
import { useState } from 'react';

export default function LP_Navbar() {
  return (
    <Disclosure as="nav">
      {({open}) => (
        <>
          <div className="mt-10">
            <CompanyLogo/>
          </div>

          <Disclosure.Button className="sm:hidden">
            <span className={open ? 'open-menu-icon' : 'closed-menu-icon'}>
              Toggle
            </span>
          </Disclosure.Button>
          <Disclosure.Panel as="div" className="flex sm:space-x-4 sm:mt-10 sm:flex">
            <div className="text-black">Solution</div>
            <div className="text-black">Who we serve</div>
            <div className="text-black">Resources</div>
            <div className="text-black">Company</div>
            <div className="text-black">Pricing</div>
          </Disclosure.Panel>

          <div className="mt-10 text-black">
            <CallToAction/>
          </div>
        </>
      )}

    </Disclosure>

  )
}
