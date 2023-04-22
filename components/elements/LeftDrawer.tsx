const iconXMark = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
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
           "
    >
      <div>
        <label htmlFor="left-drawer-toggle-state" className="flex justify-end">
          {iconXMark}
        </label>
      </div>
      {children}
    </div>
  </>
);
