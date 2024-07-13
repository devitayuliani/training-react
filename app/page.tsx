'use client'
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";




const menuutama = () => {
  
  const router = useRouter()

  const handleClick = () => {
    // Redirect to the specified route
    router.push('/home');
  };

  return (
    <div className="container2">
      <div className="form">
      <h1 className="text-black text-center">Silahkan klik Halaman ToDo List</h1>
    <div className="flex justify-center">
      <button className="button" onClick={handleClick}>To Do List
      </button>
    </div>
    </div>
    </div>
  );
};

export default menuutama;