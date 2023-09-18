import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, week, title, paragraph } = feature;
  return (
    <div className="w-full rounded-xl shadow-signUp bg-white dark:bg-[#1D2144]">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="flex flex-col gap-y-8 p-5" >
          <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-y-2">
              <p className="text-base font-medium text-body-color">{week}</p>
              <h3 className="text-xl font-bold text-black dark:text-white">
                {title}
              </h3>
            </div>
            {icon}
          </div>
          <p className="text-start text-base font-medium text-body-color" >{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
