"use client";

import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  isConnected: boolean;
  address: string | null;
  userRole: "contributor" | "admin" | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  truncateAddress: (addr: string) => string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<"contributor" | "admin" | null>(null);

  const truncateAddress = (addr: string): string => {
    if (!addr) return "";
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  const connectWallet = async () => {
    try {
      setIsConnected(true);
      setAddress("SP9ABCD1234EF5678GHI90JKLMNOP9ABCDEF1234");
      setUserRole("contributor");
    } catch (error) {
      console.error("Auth connection failed:", error);
      setIsConnected(false);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress(null);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider
      value={{ isConnected, address, userRole, connectWallet, disconnectWallet, truncateAddress }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
