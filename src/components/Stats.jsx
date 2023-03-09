import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className="flex flex-1 flex-row justify-start items-center m-3"
      >
        <h4 className="font-poppins font-semibold xs:text-4xl text-3xl xs:leading-10 leading-9 text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-xl text-base xs:leading-6 leading-5 text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
