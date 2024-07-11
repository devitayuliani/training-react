import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
         Aplikasi To Do List&nbsp;
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
         
        </div>
      </div>

      <div className="divTable">
             <div className="headRow">
                <div className="divCell ">Customer ID</div>
                <div  className="divCell">Customer Name</div>
                <div  className="divCell">Customer Address</div>
             </div>
            <div className="divRow">
                  <div className="divCell">001</div>
                <div className="divCell">002</div>
                <div className="divCell">003</div>
            </div>
            <div className="divRow">
                <div className="divCell">Lala</div>
                <div className="divCell">Lili</div>
                <div className="divCell">Lulu</div>
           </div>
            <div className="divRow">
                <div className="divCell">Sleman</div>
                <div className="divCell">Sleman</div>
                <div className="divCell">Sleman</div>
           </div>

      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        
       

      </div>
    </main>
  );
}
