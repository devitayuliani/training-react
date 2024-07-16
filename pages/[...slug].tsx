import { useRouter } from 'next/router'
import React from 'react'

function CatchAllPage() {
    const router = useRouter ()
  return (
    <div>
      CatchAllPage : {JSON.stringify(router.query)}
    </div>
  )
}

export default CatchAllPage
