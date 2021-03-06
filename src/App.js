import React, { useEffect } from "react";
import "./style.css";

import { getFirestore } from "./configs/firebase";

export default function App() {
  useEffect(() => {
    const db = getFirestore();
    const categories = db.collection("items");

    categories.get().then(res => {
      /*  console.log(res);
      console.log(res.size); */
      if (res.size > 0) {
        /*  console.log(res);
        console.log(res.docs); */
        res.docs.map(document =>
          console.log({ id: document.id, ...document.data() })
        );
      }
    });
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
