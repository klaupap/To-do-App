import { defineStore } from "pinia";
import { supabase } from "../supabase";



export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    setUser(userId) {
      this.user = userId ? userId.user : null;
    },

    async fetchUser() {
      const user = await supabase.auth.user();
      if (user) {
      this.user = user;
      }
    },
    // LOGIN
    async logIn(email, password) {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    // SIGNUP
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },

    //LOGOUT
    async signOut() {
      await supabase.auth.signOut();
    },

    //PINIA
    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
  },
});
