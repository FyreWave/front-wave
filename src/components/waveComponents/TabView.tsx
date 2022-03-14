import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    "Wave details": [],
    Activities: [],
  });

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.Panels className="mt-2 bg-white">
          <Tab.Panel>Here 111</Tab.Panel>
          <Tab.Panel>Here 222</Tab.Panel>
        </Tab.Panels>
        <Tab.List className="flex p-1 space-x-1 bg-secondary-500 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-100 ring-white ring-opacity-60",
                  selected
                    ? "bg-primary-500 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
