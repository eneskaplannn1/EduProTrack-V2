import customRequst from "../utils/customRequest";

export const getStudents = async function () {
  try {
    const res = await customRequst.get(`/students`);

    return res;
  } catch (err) {
    throw new Error(err);
  }
};
export const getStudent = async function (id) {
  try {
    const res = await customRequst.get(`/students/${id}`);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export const getTeachersStudent = async function (id) {
  try {
    return await customRequst.get(`/teachers/${id}/students`);
  } catch (err) {
    throw new Error(err);
  }
};

export const updateStudent = async function ({ data, id }) {
  const refactoredData = {
    name: data.name,
    username: data.username,
    email: data.email,
    age: data.age,
    phone: data.phone,
    gender: data.gender,
  };

  try {
    return await customRequst.patch(`/students/${id}`, refactoredData);
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const createStudent = async function ({ data }) {
  try {
    const res = await customRequst.post(`/students`, data);
    return res;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const deleteStudent = async function ({ _id }) {
  try {
    return await customRequst.patch(`/students/${_id}`, {
      active: false,
    });
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
