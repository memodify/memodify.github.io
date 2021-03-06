export default function Pricing() {
  return (
    <section
      id="pricing"
      className="text-gray-600 body-font overflow-hidden"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            There is no plans except for free.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <PricingCard
            {...{
              subheader: "Everything",
              header: "Free",
              footer: "You can use Memodify for free.",
            }}
          >
            <PricingItem>Full features</PricingItem>
          </PricingCard>
          {/* <PricingCard
              {...{
                subheader: "Or",
                header: "Donate",
                footer: "Your donations are welcome.",
              }}
            >
              <PricingItem>Full features</PricingItem>
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
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
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
    <p className="flex items-center text-gray-600 mb-2">
      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
          className="w-3 h-3"
          viewBox="0 0 24 24"
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </span>
      {children}
    </p>
  );
}
