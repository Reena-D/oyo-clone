import Image from 'next/image'

const Block = ({title, para, img}) => {
  return (
    <div className='border-r border-gray-300 w-60 h-full flex items-center px-3'>
              <Image src={img} alt='demo' width={30} height={30} classname="w-10 h-10 rounded-full mr-10" />    

      <div className='h fullflex justify-between items-center'>
        <h3 className=" font-bold">{title}</h3>

        <p className=" text-gray-400 text-xs line-clamp-1">
          {para}

        </p>
      </div>
    </div>
  )
}

export default Block
