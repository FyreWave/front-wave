import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TabView() {
  let pages = useState(["Wave details", "Activities"]);

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              "bg-white rounded-xl p-3",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
            )}
          >
            <ul>
              <li>heree</li>
            </ul>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "bg-white rounded-xl p-3",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
            )}
          >
            <ul>
              <li>this is second</li>
            </ul>
          </Tab.Panel>
        </Tab.Panels>
        <Tab.List className="flex p-1 space-x-1 bg-secondary-500 rounded-xl">
          {pages.map((page, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg ",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-primary-500  shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {pages}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
