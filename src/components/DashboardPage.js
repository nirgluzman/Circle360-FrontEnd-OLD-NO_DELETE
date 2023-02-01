import { Navigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useEffect } from "react";

import { styles } from "../utils/amplifyStyles";

import { DashboardHeader } from "../ui-components";

function DashboardPage() {
  useEffect(() => {
    Auth.currentSession()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <DashboardHeader style={styles.center} />
    </div>
  );
}

export default DashboardPage;
