
import { memo } from "react";

import "./User.css";

const User = memo(() => {
  return (
    <main className="user">
      <h2 className="user-title">User</h2>
    </main>
  );
});

export default User;
