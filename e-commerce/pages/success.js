import { useStateContext } from "../context/StateContext";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your e-mail for your receipt</p>
        <p className="description">
          If you have any questions please email
          <a className="email" href="mailto:taylir@taylorfel.com">
            taylir@taylorfel.com
          </a>
          <Link href={"/"}>
            <button type="button" width="300px" className="btn">
              Continue Shopping!
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Success;
