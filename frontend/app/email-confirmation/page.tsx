import Button from "@/components/Button";
import React from "react";

function page() {
  return (
    <>
      <h1 className="text-lightpurple-10 bold-40 lg:bold-40 py-2 italic">
        Check you email for confirmation
      </h1>
      <Button
        type="button"
        title="Go back to login"
        variant="btn_dark_purple"
        newPath="/login"
      />
    </>
  );
}

export default page;
