import CallToAction from '../../../shared/CallToAction'
export default function MobileSidebar() {
  return (
    <div className='w-screen h-screen'>
      <div className='flex flex-col space-y-6'>
        <div className=" text-black">
          Solution
        </div>
        <div className="text-black">
          Who we serve
        </div>
        <div className="text-black">
          Resources
        </div>
        <div className="text-black">
          Company
        </div>
        <div className="text-black">
          Pricing
        </div>
        <div className="text-black">
          <CallToAction/>
        </div>
      </div>
    </div>
  )
}
