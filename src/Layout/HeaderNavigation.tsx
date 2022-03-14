import { useState } from "react";
import NavigationLinks from "../components/NavigationLinks";
import { Link, useLocation } from "react-router-dom";

const HeaderNavigation = () => {
  // let name = "Ezeh";

  const [name, setName] = useState("Ezeh");
  const [amount, setAmount] = useState(123456);
  const location = useLocation();

  const handleClick = () => {
    setName("Xammmy");
    setAmount(amount * 2);
  };

  return (
    <div>
      <nav className="border-b-2 py-4">
        <div className="flex justify-between">
          <Link to="/" className="flex">
            <div>
              <svg
                className="w-8 fill-current text-primary-500"
                viewBox="0 0 92.01 92.01"
              >
                <path d="M81.9 48.2c-8.62-2.4-18.36-3.54-27-3.34 11.89-3.34 16.29-8.41 17.77-12.52 1.74-4.84.02-10.13-4.5-13.82-4.79-3.91-13.3-6.07-20.67-1.58-4.6 2.8-10.2 9.17-11.14 23.57-5.7.39-18.8.61-25.4.56-2.02 0-3.67 1.64-3.68 3.66-.01 2.03 1.63 3.7 3.66 3.71 5.86.04 19.09-.14 25.35-.55.01.15.01.3.02.45-7.43 3.08-12.98 8-15.67 13.92-3.32 7.31-1.61 14.56 4.36 18.48 2.23 1.47 4.79 2.24 7.4 2.24 2.74 0 5.42-.85 7.77-2.45 4.81-3.29 7.15-9.07 5.95-14.72-.62-2.94-1.45-7.37-1.97-12.3 7.91-1.85 22.02-2.06 35.78 1.77 1.96.55 3.99-.6 4.54-2.56.54-1.93-.61-3.97-2.57-4.52zM65.73 29.85c-.6 1.67-3.94 7.19-21.9 9.83.69-8.3 3.21-13.83 7.5-16.45a9.808 9.808 0 0 1 5.18-1.45c2.49 0 5.11.91 6.98 2.45 1.24 1.01 3.16 3.07 2.24 5.62zM36.01 74.46c-2.2 1.5-4.81 1.55-6.97.14-2.85-1.87-3.48-5.33-1.69-9.27 1.68-3.7 5.07-6.94 9.64-9.22.45 3.55 1.09 7.32 1.92 11.26.69 3.29-1.04 5.82-2.9 7.09z" />
              </svg>
            </div>
            <div>
              <svg
                className="w-40 h-10 -ml-5 fill-current text-secondary-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 234 54"
              >
                <path d="M36.41 40.03V21.97h-5.15v-5.06h5.15V14.7c0-2.6.75-4.59 2.26-5.97 1.51-1.37 3.68-2.06 6.52-2.06.62 0 1.26.03 1.91.09.65.06 1.21.16 1.69.31v5.1c-.56-.12-1.05-.21-1.46-.27a9.59 9.59 0 0 0-1.38-.09c-1.15 0-2.02.24-2.6.73-.58.49-.87 1.25-.87 2.28v2.09h6.3v5.06h-6.3v18.06h-6.07zM54.65 49.58c-.53 0-1.04-.02-1.53-.07-.49-.04-.89-.1-1.22-.16v-5.24c.59.12 1.3.18 2.13.18 2.22 0 3.76-1.05 4.62-3.15l.35-.88-9.01-23.34h6.7l5.77 15.75 6.52-15.75h6.57L64.9 41.9c-.8 1.86-1.67 3.36-2.62 4.48-.95 1.12-2.03 1.94-3.26 2.44s-2.69.76-4.37.76zM77.99 40.03V16.92h6.08v2.57c.74-1.01 1.63-1.78 2.66-2.31 1.04-.53 2.2-.8 3.51-.8 1.12.03 1.97.21 2.53.53v5.33c-.44-.21-.93-.36-1.46-.47-.53-.1-1.08-.16-1.64-.16-1.18 0-2.26.3-3.24.89-.98.59-1.76 1.43-2.35 2.53v15h-6.09zM106.48 40.48c-2.31 0-4.4-.53-6.28-1.6s-3.37-2.5-4.46-4.3c-1.09-1.8-1.64-3.83-1.64-6.08s.52-4.27 1.58-6.08c1.05-1.8 2.48-3.24 4.28-4.3 1.8-1.07 3.82-1.6 6.03-1.6s4.19.55 5.9 1.64c1.72 1.1 3.07 2.57 4.06 4.44.99 1.86 1.49 3.98 1.49 6.35v1.6h-17.13c.27.92.7 1.75 1.31 2.48.61.74 1.36 1.32 2.26 1.73.9.42 1.87.62 2.91.62s1.99-.16 2.86-.49c.87-.33 1.62-.78 2.24-1.38l3.99 3.64c-1.42 1.15-2.88 2-4.37 2.53-1.49.53-3.17.8-5.03.8zm-6.26-14.29h11.23c-.21-.92-.58-1.72-1.13-2.42-.55-.69-1.2-1.24-1.95-1.64-.75-.4-1.59-.6-2.51-.6-.95 0-1.81.19-2.57.58-.77.39-1.41.92-1.93 1.62-.53.69-.9 1.51-1.14 2.46zM124.41 40.03l-6.35-23.12h5.77l3.82 14.91 4.61-14.91h5.1l4.57 14.95 3.82-14.95h5.68l-6.39 23.12h-5.81l-4.48-14.78-4.48 14.78h-5.86zM159.42 40.43c-1.66 0-3.12-.3-4.39-.91-1.27-.61-2.26-1.44-2.97-2.51-.71-1.06-1.07-2.29-1.07-3.68 0-2.22.84-3.94 2.51-5.17s3.97-1.84 6.9-1.84c2.01 0 3.9.31 5.68.93v-1.69c0-1.33-.41-2.34-1.24-3.02-.83-.68-2.04-1.02-3.64-1.02-.98 0-2.03.16-3.15.47-1.12.31-2.43.79-3.9 1.44l-2.22-4.48c1.83-.83 3.59-1.45 5.26-1.86 1.67-.41 3.35-.62 5.04-.62 3.11 0 5.52.75 7.25 2.24 1.73 1.49 2.6 3.6 2.6 6.32v15h-5.99v-1.64c-.95.71-1.97 1.23-3.06 1.55-1.11.33-2.31.49-3.61.49zm-2.67-7.23c0 .89.39 1.59 1.15 2.11.77.52 1.79.78 3.06.78 1.01 0 1.94-.13 2.8-.38.86-.25 1.63-.63 2.31-1.13V31.2c-.74-.29-1.51-.52-2.31-.67-.8-.15-1.66-.22-2.57-.22-1.39 0-2.48.26-3.26.78-.78.52-1.18 1.22-1.18 2.11zM181.87 40.03l-9.9-23.12h6.61l6.35 15.4 6.3-15.4h6.48l-9.94 23.12h-5.9zM209.03 40.48c-2.31 0-4.4-.53-6.28-1.6s-3.37-2.5-4.46-4.3c-1.09-1.8-1.64-3.83-1.64-6.08s.52-4.27 1.58-6.08c1.05-1.8 2.48-3.24 4.28-4.3 1.8-1.07 3.82-1.6 6.03-1.6 2.22 0 4.19.55 5.9 1.64 1.71 1.1 3.07 2.57 4.06 4.44.99 1.86 1.49 3.98 1.49 6.35v1.6h-17.13c.27.92.7 1.75 1.31 2.48.61.74 1.36 1.32 2.26 1.73.9.42 1.87.62 2.91.62s1.99-.16 2.86-.49c.87-.33 1.62-.78 2.24-1.38l3.99 3.64c-1.42 1.15-2.88 2-4.37 2.53-1.49.53-3.17.8-5.03.8zm-6.26-14.29H214c-.21-.92-.58-1.72-1.13-2.42-.55-.69-1.2-1.24-1.95-1.64-.75-.4-1.59-.6-2.51-.6-.95 0-1.81.19-2.57.58-.77.39-1.41.92-1.93 1.62-.53.69-.9 1.51-1.14 2.46z" />
              </svg>
            </div>
          </Link>
          <NavigationLinks />
        </div>
        <div className="pt-4">
          <h1 className=" big-title">
            Hello {name}, {amount}
          </h1>
          <h1>{}</h1>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNavigation;
