import { Outlet } from "react-router";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useRef, useEffect } from "react";
import Nav from "./components/Nav";
import "./App.css";

export default function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <Nav />
      <Outlet />
    </ReactLenis>
  );
}