"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="atom">
        <div className="electron electron1"></div>
        <div className="electron electron2"></div>
        <div className="electron electron3"></div>
      </div>
      <p className="loading-text">Loading Physics Bugle...</p>
    </div>
  );
}
