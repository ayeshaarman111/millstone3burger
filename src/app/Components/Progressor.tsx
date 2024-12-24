import React from 'react'

const Progressor = () => {
  return (
    <div>
  <div className="flex items-start max-w-screen-lg w-full mx-auto mt-10">
    <div className="w-full">
      {/* Fixed 'flec' to 'flex' and ensured alignment */}
      <div className="flex items-center w-full">
        {/* Corrected margin issues, make sure circle aligns properly with the line */}
        <div className="w-8 h-8 shrink-0 bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
          <span className="text-base text-black font-bold">1</span>
        </div>

        {/* Progress bar styling */}
        <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
      </div>

      <div className="mt-2 mr-4">
        <h6 className="text-base font-bold text-amber-500">
          Step 1: Choose Your Dish
        </h6>
        <p className="text-sm text-white">
          Explore our delicious menu and select your meal.
        </p>
      </div>
    </div>

    <div className="w-full">
      {/* Fixed 'flec' to 'flex' and ensured alignment */}
      <div className="flex items-center w-full">
        {/* Corrected margin issues, make sure circle aligns properly with the line */}
        <div className="w-8 h-8 shrink-0 bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
          <span className="text-base text-black font-bold">2</span>
        </div>

        {/* Progress bar styling */}
        <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
      </div>

      <div className="mt-2 mr-4">
        <h6 className="text-base font-bold text-amber-500">
          Step 2: Costomize Your Order
        </h6>
        <p className="text-sm text-white">
          Take Your Meal To Your Table.
        </p>
      </div>
    </div>

    <div className="w-full">
      {/* Fixed 'flec' to 'flex' and ensured alignment */}
      <div className="flex items-center w-full">
        {/* Corrected margin issues, make sure circle aligns properly with the line */}
        <div className="w-8 h-8 shrink-0 bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
          <span className="text-base text-black font-bold">3</span>
        </div>

        {/* Progress bar styling */}
        <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
      </div>

      <div className="mt-2 mr-4">
        <h6 className="text-base font-bold text-amber-500">
          Step 3: Place Your Order
        </h6>
        <p className="text-sm text-white">
        Your Meal is ready check out enjoy your meal
        </p>
      </div>
    </div>



  </div>
</div>

  )
}

export default Progressor
