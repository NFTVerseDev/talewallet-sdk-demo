import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Overlay from "@nftverse/tale-wallet-plugin/dist/Overlay/Overlay";
import WalletUI from "@nftverse/tale-wallet-plugin/dist/WalletUI";
import LoginUi from "@nftverse/tale-wallet-plugin/dist/LoginUi";

function App() {
  const [tale_wallet_address, setTaleWalletAddress] = useState(null);

  useEffect(() => {
    console.log("Hello World!");
    var authToken = localStorage.getItem("authToken");
    var tale_wallet_address = localStorage.getItem("tale_wallet_address");
    setTaleWalletAddress(tale_wallet_address);
    console.log("new tale address", tale_wallet_address);
  }, []);

  return (
    <div>
      <div >
        <nav>
          <h2>Nftverse Talewallet </h2>
          <ul>
            <li>
              <Overlay
                bgColor={"orange"}
                textColor={"black"}
                width={"700px"}
                height={"400px"}
              />
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
          </ul>
        </nav>
      </div>
      {tale_wallet_address ? (
        <WalletUI bgColor={"white"} textColor={"black"} />
      ) : (
        <LoginUi />
      )}
    </div>
  );
}
export default App;
