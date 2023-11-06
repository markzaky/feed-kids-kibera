import Image from "next/image";
import React from "react";
import Container from "./container";

const Benefits = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mb-10 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <Image
              src={data.image}
              width="900"
              height="auto"
              alt="Benefits"
              className={"object-cover rounded rounded-xl"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4  leading-normal text-gray-500 dark:text-gray-300">
                {data.desc}
              </p>
              {data.requirements &&
                data.requirements.map((requirement, index) => (
                  <p
                    className="max-w-2xl py-1 pl-2 leading-normal text-gray-500 dark:text-gray-300"
                    key={index}
                  >
                    -{requirement.title}
                  </p>
                ))}
              {data.desc_1 && (
                <p className="max-w-2xl py-4  leading-normal text-gray-500 dark:text-gray-300">
                  {data.desc_1}
                </p>
              )}
              {data.desc_2 && (
                <p className="max-w-2xl py-4  leading-normal text-gray-500 dark:text-gray-300">
                  {data.desc_2}
                </p>
              )}
              {data.isActive && (
                <>
                  {" "}
                  <div className="flex flex-col items-end space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                    <a
                      href="https://wa.me/254714014439"
                      target="_blank"
                      rel="noopener"
                      className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md "
                    >
                      Learn More
                    </a>
                  </div>
                </>
              )}
            </div>

            <div className="w-full mt-5">
              {data.bullets &&
                data.bullets.map((item, index) => (
                  <Benefit key={index} title={item.title} icon={item.icon}>
                    {item.desc}
                  </Benefit>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}

export default Benefits;
