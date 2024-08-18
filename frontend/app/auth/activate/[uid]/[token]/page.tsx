"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

const ActivateAccount = ({ params }: { params: { uid: string, token: string } }) => {
  const router = useRouter();
  const uid = params.uid;
  const token = params.token;
  const [activationStatus, setActivationStatus] = useState<string | null>(null);

  useEffect(() => {
    if (uid && token) {
      activateAccount(uid as string, token as string);
    }
  }, [uid, token]);

  const activateAccount = async (uid: string, token: string) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/users/activation/`,
        {
          uid,
          token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setActivationStatus(
        "Account successfully activated! You can now log in."
      );
      router.push("/login");
    } catch (error) {
      console.error("Activation failed:", error);
      setActivationStatus(
        "Account activation failed. Please try again or contact support."
      );
    }
  };

  return (
    <div>
      <h1>
        {activationStatus ? activationStatus : "Activating your account..."}
      </h1>
    </div>
  );
};

export default ActivateAccount;
