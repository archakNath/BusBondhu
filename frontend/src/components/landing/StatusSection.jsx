import StatusViewer from "../StatusViewer";
import React from "react";

const StatusSection = () => {
  return (
    <div className="flex justify-center gap-6">
      <StatusViewer
        stories={[
          {
            image:
              "https://i.pinimg.com/736x/2f/d0/4e/2fd04e52136a7a92203d0deff1819682.jpg",
          },
          {
            image:
              "https://i.pinimg.com/736x/1a/d3/e4/1ad3e47bd46dd1687e87be6c38a44725.jpg",
          },
          {
            image:
              "https://i.pinimg.com/736x/9d/5d/a2/9d5da23b6a8e817db68bc2b148bc47ac.jpg",
          },
          {
            image:
              "https://i.pinimg.com/736x/e8/dc/51/e8dc51013144bd782bcbe9e4deddd353.jpg",
          },
          {
            image:
              "https://i.pinimg.com/736x/ef/79/64/ef796460278966e8af50dbbccf7e8459.jpg",
          },
        ]}
        title={"Kolkata Vibes"}
        className={" max-md:hidden"}
      />
      <div>
        <h1 className="text-4xl italic text-center">Explore Kolkata</h1>
        <p className="text-center max-md:mb-8 mb-32">The City of Joy</p>
        <StatusViewer
          stories={[
            {
              image:
                "https://i.pinimg.com/736x/9f/03/61/9f03610b08305fa321abac4b4273b57b.jpg",
            },
            {
              image:
                "https://i.pinimg.com/736x/f2/95/d2/f295d2cdd4a12e8ce60a9b9e83aac53f.jpg",
            },
            {
              image:
                "https://i.pinimg.com/736x/ce/d5/30/ced530f733d91db4aaf90f0fb80bbbb1.jpg",
            },
            {
              image:
                "https://i.pinimg.com/736x/1f/d4/6c/1fd46c3e449057417f74745e59bd6e95.jpg",
            },
          ]}
          title={"Must Visit"}
        />
      </div>
      <StatusViewer
        stories={[
          {
            image:
              "https://i.pinimg.com/736x/80/0f/b0/800fb09a9a48277b59790c23efdedbbe.jpg",
          },
          {
            image:
              "https://i.pinimg.com/736x/61/0a/4b/610a4bbe2f1db7631a2f0bc274d1b3c4.jpg",
          },
          {
            image:
              "https://i.pinimg.com/736x/12/31/fb/1231fb9c0f9b42182eacef371f1a6cd4.jpg",
          },
          {
            image:
              "https://i.pinimg.com/736x/9b/db/d1/9bdbd1559bac6e86804d2a1f14d0a66f.jpg",
          },
          {
            image:
              "https://i.pinimg.com/736x/29/b0/b9/29b0b984aa308210fbe7dcd3e1866746.jpg",
          },
          {
            image:
              "https://i.pinimg.com/736x/28/d7/7b/28d77bf1a098be3cffc410e0037b0324.jpg",
          },
        ]}
        title={"Traditions"}
        className={" max-md:hidden"}
      />
    </div>
  );
};

export default StatusSection;
