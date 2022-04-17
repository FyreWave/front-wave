import React from "react";
import ReactDOM from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "48%",
  right: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "9999",
  height: "100%",
  padding: "20px",
} as React.CSSProperties;

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: "9999",
  background: "rgba(0,0,0,0.5)",
  overflow: "hidden",
  height: "100%",
  margin: "0 auto",
} as React.CSSProperties;

export default function ModalComponent(props: any) {
  const isOpen = props.isOpen;
  const children = props.children;
  const onClose = props.onClose;
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>{children}</div>
      </div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
}
