import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const StatsSection = () => {
  const stats = [
    { count: 20000, label: "Downloads", icon: "fa-user-plus" },
    { count: 18000, label: "Active Users", icon: "fa-users" },
    { count: 600, label: "Total AUM", suffix: "Cr+", icon: "fa-landmark" },
    { count: 132, label: "Total Transactions", suffix: "Cr+", icon: "fa-graduation-cap" }
  ];

  return (
    <section className="my-16 bg-white from-primary-50 to-primary-100 p-5 lg:p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-teal-100 p-4 lg:p-6 rounded-md shadow-lg"
          >
            <div className="text-3xl lg:text-4xl text-teal-700 mb-4">
              <i className={`fas ${item.icon}`} aria-hidden="true"></i>
            </div>
            <div className="text-xl lg:text-3xl font-bold text-teal-900">
              <VisibilitySensor partialVisibility>
                {({ isVisible }) =>
                  isVisible ? (
                    <CountUp start={0} end={item.count} duration={3} suffix={item.suffix || "+"} />
                  ) : (
                    <span>0</span>
                  )
                }
              </VisibilitySensor>
            </div>
            <p className="text-teal-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
