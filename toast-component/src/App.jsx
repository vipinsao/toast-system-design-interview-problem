import React from "react";
import Notification from "./components/Notification";
import useNotification from "./hooks/useNotification";

const App = () => {
  //custom hook - useNotification(position)
  const { NotificationComponent, triggerNotification } =
    useNotification("top-right");

  return (
    <div className="max-w-screen h-svh flex flex-col justify-center items-center">
      <div className="w-[60%] h-screen mt-12 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-serif font-semibold mb-4">
          Important System Design Problem For Interview:-{" "}
        </h1>
        <h2 className="text-xl font-semibold font-serif mb-2">
          Created this amazing toast component:-{" "}
        </h2>
        <p className="font-serif font-light mb-4">
          The toast component is an essential part of modern UI. It makes the
          interface more dynamic and engaging. I built this toast using a custom
          hook.
        </p>
        <div className="flex flex-col justify-center items-center gap-8 border-2 p-6 rounded-md shadow-zinc-600 ">
          <button
            className="border-2 bg-pink-200 rounded-md px-4 py-2 font-serif cursor-pointer hover:bg-pink-300"
            onClick={() =>
              triggerNotification({
                type: "success",
                message: "file send successfully",
                duration: 3000,
              })
            }
          >
            Trigger Success
          </button>
          <button
            className="border-2 bg-pink-200 rounded-md px-4 py-2 font-serif cursor-pointer hover:bg-pink-300"
            onClick={() =>
              triggerNotification({
                type: "error",
                message: "failed to send file",
                duration: 3000,
              })
            }
          >
            Trigger Error
          </button>
          <button
            className="border-2 bg-pink-200 rounded-md px-4 py-2 font-serif cursor-pointer hover:bg-pink-300"
            onClick={() =>
              triggerNotification({
                type: "info",
                message: "you got notification",
                duration: 3000,
              })
            }
          >
            Trigger Info
          </button>
          <button
            className="border-2 bg-pink-200 rounded-md px-4 py-2 font-serif cursor-pointer hover:bg-pink-300"
            onClick={() =>
              triggerNotification({
                type: "warning",
                message: "risk to download this file",
                duration: 3000,
              })
            }
          >
            Trigger Warning
          </button>
        </div>
      </div>
      {NotificationComponent}
    </div>
  );
};

export default App;
