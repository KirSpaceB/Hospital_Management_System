import CallToAction from '../../../shared/CallToAction'

export default function Items() {
  return (
    <div className='hidden sm:flex sm:flex-row sm:space-x-20 sm:justify-center sm:items-center'>
      <div className="mt-10 text-black">
        Solution
      </div>
      <div className="mt-10 text-black">
        Who we serve
      </div>
      <div className="mt-10 text-black">
        Resources
      </div>
      <div className="mt-10 text-black">
        Company
      </div>
      <div className="mt-10 text-black">
        Pricing
      </div>
      <div className="mt-10 text-black">
        <CallToAction/>
      </div>
    </div>
  )
}
