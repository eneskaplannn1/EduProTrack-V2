import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Auth/Login";

import PageNotFound from "./pages/Error/PageNotFound";
import Homework from "./pages/AppLayout/Homework";
import Student from "./pages/AppLayout/Student";
import Teacher from "./pages/AppLayout/Teacher";
import AppLayout from "./UI/AppLayout";

import Account from "./pages/AppLayout/Account";
import TeacherDetail from "./features/Teacher/TeacherDetail";
import StudentDetail from "./features/Student/StudentDetail";
import HomeworkDetail from "./features/homework/HomeworkDetail";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useQuery } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import RequiredAuth from "./features/auth/RequiredAuth";
import UnAuthorized from "./pages/Auth/UnAuthorized";
import UserProfile from "./features/profile/UserProfile";
import Class from "./pages/AppLayout/Class";
import ClassDetail from "./features/class/ClassDetail";
import GlobalStyles from "./styles/globalStyles";
import { DarkModeProvider } from "./context/DarkmodeProvider";
import { LoginWithJWT } from "./services/apiAuth";

function App() {
  const { login, user } = useAuth();
  useQuery({
    queryKey: ["login"],
    queryFn: LoginWithJWT,
    onSuccess: (data) => {
      if (user) login(user);
      return login(data);
    },
  });

  return (
    <DarkModeProvider>
      <GlobalStyles />
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "12px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3500,
          },
          loading: {
            duration: 3000,
          },
          style: {
            fontSize: "1rem",
            maxWidth: "500px",
            padding: "16px 24px",
            color: "white",
            backgroundColor: "grey",
          },
        }}
      />

      <BrowserRouter>
        <Routes>
          <Route
            element={
              <RequiredAuth allowedRoles={["Student", "Teacher", "Admin"]}>
                <AppLayout />
              </RequiredAuth>
            }
          >
            <Route index element={<Navigate replace to="profile" />} />

            <Route path="profile" element={<UserProfile />} />
            <Route path="homeworks" element={<Homework />} />
            <Route path="homeworks/:homeworkId" element={<HomeworkDetail />} />
            <Route path="account" element={<Account />} />

            <Route
              path="students"
              element={
                <RequiredAuth allowedRoles={["Admin", "Teacher"]}>
                  <Student />
                </RequiredAuth>
              }
            />
            <Route
              path="students/:studentId"
              element={
                <RequiredAuth allowedRoles={["Admin", "Teacher"]}>
                  <StudentDetail />
                </RequiredAuth>
              }
            />

            <Route
              path="classes/:classId"
              element={
                <RequiredAuth allowedRoles={["Admin", "Teacher"]}>
                  <ClassDetail />
                </RequiredAuth>
              }
            />

            {/* only admin */}
            <Route
              path="classes"
              element={
                <RequiredAuth allowedRoles={["Admin"]}>
                  <Class />
                </RequiredAuth>
              }
            />
            <Route
              path="teachers"
              element={
                <RequiredAuth allowedRoles={["Admin"]}>
                  <Teacher />
                </RequiredAuth>
              }
            />
            <Route
              path="teachers/:teacherId"
              element={
                <RequiredAuth allowedRoles={["Admin"]}>
                  <TeacherDetail />
                </RequiredAuth>
              }
            />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="unAuthorized" element={<UnAuthorized />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;

{
  /* <Route path="settings" element={<HomeworkForm />} />
<Route path="settings/st" element={<StudentForm />} />
<Route path="settings/tc" element={<TeacherForm />} /> */
}
