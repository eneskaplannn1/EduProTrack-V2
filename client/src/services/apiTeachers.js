import customRequst from "../utils/customRequest";

export const getTeachers = async function () {
  try {
    const res = await customRequst.get(`/teachers`);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const getTeacher = async function (id) {
  try {
    return await customRequst.get(`/teachers/${id}`);
  } catch (err) {
    throw new Error(err);
  }
};

export const updateTeacher = async function (body) {
  const { id, data } = body;
  try {
    return await customRequst.patch(`/teachers/${id}`, data);
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.message);
  }
};

export const createTeacher = async function ({ data }) {
  try {
    const res = await customRequst.post(`/teachers`, data);
    return res;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const deleteTeacher = async function ({ _id }) {
  try {
    const res = await customRequst.patch(`/teachers/${_id}`, {
      active: false,
    });
    console.log(res);
    return res;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
