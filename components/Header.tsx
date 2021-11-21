export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 1025 1025"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
          >
            <g transform="matrix(1,0,0,1,-1222,-20)">
              <g transform="matrix(1,0,0,1,98.6016,20.1583)">
                <g>
                  <g transform="matrix(1,0,0,1,-98.6016,-20.1583)">
                    <path
                      d="M2041.17,148.158L1373.69,148.158C1360.95,148.158 1350.6,158.506 1350.6,171.251L1350.6,893.066C1350.6,905.811 1360.95,916.158 1373.69,916.158L2095.51,916.158C2104.07,916.158 2111.55,911.487 2115.54,904.556L2115.74,904.206C2117.56,900.903 2118.6,897.105 2118.6,893.066L2118.6,225.589C2089.54,319.541 2043.26,456.654 1990.6,565.919L1990.6,788.158L1478.6,788.158L1478.6,276.158L1700.84,276.158C1810.13,223.487 1947.25,177.211 2041.17,148.158Z"
                      fill="rgb(245,148,11)"
                    />
                  </g>
                  <g transform="matrix(1.6758,1.6758,-1.38046,1.38046,-109.243,-3105.4)">
                    <path
                      d="M1600.02,423.103C1600.02,423.103 1510.6,610.966 1510.6,691.48C1510.6,751.39 1550.67,800.03 1600.02,800.03C1649.37,800.03 1689.44,751.39 1689.44,691.48C1689.44,610.966 1600.02,423.103 1600.02,423.103Z"
                      fill="rgb(245,148,11)"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>

          <span className="ml-3 text-xl">Memodify</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900" href="//app.memodify.com/new">
            Application
          </a>
          {/* 
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
        </nav>
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
  );
}
