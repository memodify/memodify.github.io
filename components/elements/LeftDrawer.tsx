const iconChevronLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

export const closeLeftDrawer = () => {
  const checkbox = document.getElementById("left-drawer-toggle-state");
  (checkbox as any).checked = false;
};

export const LeftDrawer = ({ children }: { children: JSX.Element }) => (
  <>
    {/* NOTE: This `input` must be here since this has `peer` class of tailwindcss */}
    <input
      id="left-drawer-toggle-state"
      type="checkbox"
      className="peer hidden"
    />
    <div
      className="
           bg-white dark:bg-gray-800
           fixed top-0 left-0
           z-30
           opacity-95
           peer-checked:translate-x-0
           transition-transform
           -translate-x-full
           duration-200
           h-screen
           overflow-y-auto
           shadow-lg
           "
    >
      <div className="
             h-16 flex
             justify-end items-center
             px-2
             dark:text-gray-400
             ">
        <label htmlFor="left-drawer-toggle-state">{iconChevronLeft}</label>
      </div>
      {children}
    </div>
  </>
);
