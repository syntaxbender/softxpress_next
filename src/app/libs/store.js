import { configureStore } from '@reduxjs/toolkit';
import contactReducer from "@/app/components/contact/contactSlice"
import customLinkReducer from '@/app/components/customLink/customLinkSlice';
import navigationReducer from '@/app/components/navigation/navigationSlice';
import preloaderReducer from '@/app/components/preloader/preloaderSlice';
import headerReducer from '@/app/components/header/headerSlice';
import accordionReducer from '@/app/components/accordion/accordionSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      contact: contactReducer,
      preloader: preloaderReducer,
      customLink: customLinkReducer,
      navigation: navigationReducer,
      header: headerReducer,
      accordion: accordionReducer,
    },
  });
};

