import { SparklesIcon } from '@heroicons/react/24/outline';
import Input from './Input';

export default function Feed() {
  return (
    <div className='xl:ml-[370px] border-x border-[#2f3336] xl:min-w-[576px] sm:ml-[80px] flex-grow max-w-xl'>

      {/* Header  */}

        <div className='flex py-2 px-4 sticky items-center top-0 bg-transparent z-50 backdrop-blur-sm border-b border-[#2f3336]'>
            <h2 className='cursor-pointer text-xl font-bold'>Home</h2>
            <div className='hoverEffect ml-auto'>
                <SparklesIcon className='h-5'/> 
            </div>
        </div>
      {/* Input  */}
      <Input/>

    </div>
  )
}
