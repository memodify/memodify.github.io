export default function Pricing() {
  return (
    <section id="pricing" className="text-gray-600 overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-4xl text-3xl font-bold mb-2 text-gray-900">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            There is no plans except for free.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <PricingCard
            {...{
              subheader: "Everything",
              header: "Free",
              footer: "You can use Memodify for free.",
            }}
          >
            <>
              <PricingItem>Full features</PricingItem>
              <PricingItem>Standalone & In-browser</PricingItem>
            </>
          </PricingCard>
          {/* <PricingCard
            {...{
              subheader: "Welcome",
              header: "Donate",
              footer: "I'm preparing how to donate.",
            }}
          >
            <PricingItem>TBD</PricingItem>
          </PricingCard> */}
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  subheader: string;
  header: string;
  footer: string;
  children: JSX.Element;
}

function PricingCard(props: PricingCardProps) {
  const { subheader, header, footer, children } = props;
  return (
    <div className="p-4 md:w-1/2 w-full">
      <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
        <h2 className="text-sm tracking-widest mb-1 font-medium">
          {subheader}
        </h2>
        <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
          {header}
        </h1>
        {children}
        <p className="text-xs text-gray-500 mt-3">{footer}</p>
      </div>
    </div>
  );
}

function PricingItem({ children }: { children: string | JSX.Element }) {
  return (
    <li className="flex items-center text-gray-600 mb-2">
      <p className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          className="w-3 h-3"
          viewBox="0 0 24 24"
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </p>
      {children}
    </li>
  );
}
