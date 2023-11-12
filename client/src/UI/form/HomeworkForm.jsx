import StyledFormLayout from "./FormLayout";
import ButtonContainer from "../Button/ButtonContainer";
import Button from "../Button/Button";
import useEditCreateHomework from "../../hooks/useEditCreateHomework";
import Input from "../Input";
import FormRow from "../FormRow";

function HomeworkForm({
  onCloseModal,
  HomeworkToEdit = {},
  isEditing = false,
  classId = null,
  teacherId = null,
  students = [],
  chooseStudent,
}) {
  const { _id: homeworkId, ...editValues } = HomeworkToEdit;

  const { register, handleSubmit, errors, handleSubmitForm, isManupulating } =
    useEditCreateHomework({
      isEditing,
      editValues,
      homeworkId,
      onCloseModal,
      classId,
      teacherId,
      students,
      chooseStudent,
    });

  return (
    <StyledFormLayout onSubmit={handleSubmit(handleSubmitForm)}>
      <FormRow label="Subject" error={errors?.subject?.message}>
        <Input
          disabled={isManupulating}
          type="text"
          id="subject"
          {...register("subject", { required: "Homework must have subject" })}
        />
      </FormRow>
      <FormRow label="Topic" error={errors?.topic?.message}>
        <Input
          disabled={isManupulating}
          type="text"
          id="topic"
          {...register("topic", { required: "Homework must have topic" })}
        />
      </FormRow>
      <FormRow label="Description" error={errors?.description?.message}>
        <Input
          disabled={isManupulating}
          type="text"
          id="description"
          {...register("description", {
            required: "Homework must have description",
          })}
        />
      </FormRow>
      <FormRow label="StartDate" error={errors?.startDate?.message}>
        <Input
          disabled={isManupulating}
          type="date"
          id="startDate"
          {...register("startDate", {
            required: "Homework must have starting date",
          })}
        />
      </FormRow>
      <FormRow label="ExpirationDate" error={errors?.expirationDate?.message}>
        <Input
          disabled={isManupulating}
          type="date"
          id="expirationDate"
          {...register("expirationDate", {
            required: "Homework must expiration date",
          })}
        />
      </FormRow>
      {chooseStudent && (
        <FormRow label="Students" error={errors?.students?.message}>
          <select
            multiple={true}
            id="students"
            {...register("students", { required: "Select " })}
          >
            {students?.map((student) => {
              return (
                <option value={student._id} key={student._id}>
                  {student.name}
                </option>
              );
            })}
          </select>
        </FormRow>
      )}
      <ButtonContainer>
        <Button onClick={onCloseModal} variation="red" size="medium">
          Cancel
        </Button>
        <Button disabled={isManupulating} variation="blue" size="medium">
          {isEditing && isManupulating
            ? "Updating homework"
            : isEditing
            ? "Update Homework"
            : isManupulating
            ? "Adding Homework"
            : "Add Homework"}
        </Button>
      </ButtonContainer>
    </StyledFormLayout>
  );
}

export default HomeworkForm;
