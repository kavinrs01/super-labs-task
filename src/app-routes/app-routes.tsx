import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "../layouts/app-layout";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Navigate to="/app/home" replace />} />
        <Route path="/app/home" element={<div>Home</div>} />
        <Route path="/app/test" element={<div>Test</div>} />
      </Route>

      <Route path="/" element={<Navigate to={"/app/home"} />} />
    </Routes>
  );
};

export { AppRouter };
