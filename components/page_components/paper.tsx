import React from 'react'

type Props = {}

export default function Papercd({}: Props) {
  return (
    <div>
      <div className='bg-white  overflow-hidden shadow rounded-lg relative'>
        <div className='px-9 pt-2'>
          <dl>
            <dt className='text-sm leading-5 font-medium text-gray-500 truncate'>
              Hello
            </dt>
            <dd className='mt-1 text-3xl leading-9 font-semibold text-gray-900'>
              $ 5.749,48
            </dd>
            <dd className='text-gray-500 font-semibold'>
              <span>
                200
                <span className='text-xs'>/</span>Y
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  )
}
