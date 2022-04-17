import { nanoid } from "nanoid";
import { $axios } from "../http/http.Service";

const generateReferenceId = (uuid: string) => `${uuid}_-_${nanoid(5)}`;

type fnContext = {
  amount: number | string;
  uuid: string;
  email: string;
};

export function PayWithPaystack({ amount, email, uuid }: fnContext) {
  const handler = (window as any).PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_API,
    channels: ["card", "bank", "ussd", "bank_transfer"],
    amount: Number(amount) * 100,
    email: email,
    ref: generateReferenceId(uuid),
    callback(response: any) {
      $axios
        .post(`/payment/payment-callback`, { reference: response.reference })
        .catch((e) => e)
        .finally(() => window.location.reload());
    },
  } as Record<string, any>);
  handler.openIframe();
}

const loadedScripts: Record<string, any> = {};

export function loadScriptAsync(src: string) {
  return new Promise((resolve, reject) => {
    // Stop from loading twice.
    if (loadedScripts.hasOwnProperty(src)) return resolve(true);

    // Create script element and set attributes
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = src;

    // Append the script to the DOM
    const el = document.getElementsByTagName("script")[0];
    el.parentNode?.insertBefore(script, el);

    // Resolve the promise once the script is loaded
    script.addEventListener("load", () => {
      loadedScripts[src] = true;
      resolve(script);
    });

    // Catch any errors while loading the script
    script.addEventListener("error", () => {
      reject(new Error(`${src} failed to load.`));
    });
  });
}
