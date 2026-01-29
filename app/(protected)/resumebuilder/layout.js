import React, { Suspense } from 'react'
import BarLoader from 'react-spinners/BarLoader'



const layout = ({ children }) => {
  return (
    <div>
      <Suspense fallback={<BarLoader className="mt-4" width={220} color="#9ca3af" />}>
        {children}
      </Suspense>
    </div>
  )
}

export default layout;
