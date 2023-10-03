import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDcUcv1sx-d0TLF6Mrb7HvX26VTW54QWNw",
  authDomain: "news-website-auth.firebaseapp.com",
  projectId: "news-website-auth",
  storageBucket: "news-website-auth.appspot.com",
  messagingSenderId: "258247713038",
  appId: "1:258247713038:web:e14c1e57c2271db516b75f"
};


const app = initializeApp(firebaseConfig);

export default app;