import create from "zustand";
import { persist } from "zustand/middleware";

export const useGlobalState = create(
  persist(
    (set, get) => ({
      token: null,
      profile: null,
      isAuth: false,
      notificationPatient: null,
      suggestion: null,
      family: [],
      patient: null,
      //userType: null,
      setToken: (token) =>
        set((state) => ({
          token,
          isAuth: true,
        })),

      setProfile: (profile) =>
        set((state) => ({
          profile,
          //userType: profile.userType,
        })),

      setFamily: (family) =>
        set((state) => ({
          family,
        })),

      logout: () =>
        set((state) => ({
          token: null,
          profile: null,
          isAuth: false,
        })),

      setPatient: (patient) =>
        set((state) => ({
          patient,
        })),
    }),
    { name: "auth" }
  )
);
