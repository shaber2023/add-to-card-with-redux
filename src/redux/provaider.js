"use client"
import { Provider } from "react-redux";
import { store } from "./srore";

export default function Providers({ children }) {
    return (
      <html lang="en">
        <body suppressHydrationWarning={true}>
            <Provider store={store}>
            {children}
            </Provider>
            </body>
      </html>
    )
  }