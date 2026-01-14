import { User } from "@/types/model/user.model"
import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware';



const initialValue: User = {
  email: "",
  id: undefined,
  company_name: "",
  company_size: "",
  full_name: "",
  year_of_study: ""
}

interface UserStoreActions {
  setUser: (user: User) => void
}

const UserStore = create(
  persist<User & UserStoreActions>((set, get) => {
    return {
      ...initialValue,
      setUser: (user) => set(user),
    }
  }, {
    name: "user-data-storage",
    storage: createJSONStorage(() => localStorage)
  })
)
