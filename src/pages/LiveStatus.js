import React, { useState } from "react";
import { IconButton } from "../components/shared/IconButton/IconButton";
import {
  AssetAnalyticsFill,
  AssetAnalyticsMinimal,
} from "../components/shared/Icons/AssetAnalytics";
import {
  LackOfMaterialAnalyticsFill,
  LackOfMaterialAnalyticsMinimal,
} from "../components/shared/Icons/LackOfMaterialAnalytics";
import { MaintenanceAnalyticsFill, MaintenanceAnalyticsMinimal } from "../components/shared/Icons/MaintenanceAnalytics";
import {
  OperatorAnalyticsFill,
  OperatorAnalyticsMinimal,
} from "../components/shared/Icons/OperatorAnalytics";
import {
  ProductChangeFill,
  ProductChangeMinimal,
} from "../components/shared/Icons/ProductChangeAnalytics";
import {
  WorkInstructionFill,
  WorkInstructionMinimal,
} from "../components/shared/Icons/WorkInstruction";

export const LiveStatus = () => {
  const [Analytics, setAnalytics] = useState(5);
  const cards = [
    {
      component: <OperatorAnalyticsMinimal />,
      name: "Operator Analytics",
    },
    {
        component: <MaintenanceAnalyticsMinimal />,
        name: "Maintenance Analytics",
      },
      {
        component: <AssetAnalyticsMinimal />,
        name: "Asset Tracking Analytics",
      },
    {
      component: <LackOfMaterialAnalyticsMinimal />,
      name: "Lack Of Material Analytics",
    },
    
    {
      component: <ProductChangeMinimal />,
      name: "Product Change Analytics",
    },
    {
      component: <WorkInstructionMinimal />,
      name: "Work Instruction",
    },
  ];
  return (
      <div className="h-screen">
    <div className="flex justify-between m-10">
      <div className="flex">
        {
          {
            0: (
              <div className="text-white flex">
                <OperatorAnalyticsFill />
                Operator Analytics
              </div>
            ),
            1: (
              <div className="text-white flex">
                <MaintenanceAnalyticsFill />
                Maintenance Analytics
              </div>
            ),
            2: (
              <div className="text-white flex">
                <AssetAnalyticsFill />
                Assets Analytics
              </div>
            ),
            3: (
              <div className="text-white flex">
                <LackOfMaterialAnalyticsFill />
                Lack Of Material Analytics
              </div>
            ),
            4: (
              <div className="text-white flex">
                <ProductChangeFill />
                Product Change Analytics
              </div>
            ),
            5: (
              <div className="text-white flex">
                <WorkInstructionFill />
                Work Instructions Analytics
              </div>
            ),
          }[Analytics]
        }
      </div>
      <div className="flex">
        {cards.map(({ component, name }, idx) => {
          if (idx !== Analytics)
            return (
              <div onClick={() => setAnalytics(idx)}>
                <IconButton name={name} key={idx}>
                  {component}
                </IconButton>
              </div>
            );
        })}
      </div>
    </div>
    </div>
  );
};
