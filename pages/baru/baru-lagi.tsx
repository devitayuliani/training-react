import React from 'react'

function BaruLagi() {
    throw Error ("Error dong");
  return (
    <div>BaruLagi</div>
  )
}

export async function getServerSideProps(){
    throw new Error ("coba eror")
}
export default BaruLagi