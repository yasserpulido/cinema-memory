import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { Button, Input, InputNumber, colors } from "anwar-components";
import { Movie } from "@/types";

export const Detail = () => {
  const { control, handleSubmit } = useForm<Movie>({});

  const onSubmit: SubmitHandler<Movie> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset>
          <Legend>Movie</Legend>
          <Header>
            <Button variant="link-danger" text="Reset" onClick={() => {}} />
          </Header>
          <InputsContainer>
            <Controller
              control={control}
              name="title"
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Title is required",
                },
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters",
                },
              }}
              render={({ field, formState: { errors } }) => (
                <Input
                  label="Title"
                  errors={errors.title?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="year"
              defaultValue={0}
              rules={{
                required: {
                  value: true,
                  message: "Year is required",
                },
                min: {
                  value: 1900,
                  message: "Year must be at least 1900",
                },
              }}
              render={({ field, formState: { errors } }) => (
                <InputNumber
                  label="Year"
                  errors={errors.year?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="description"
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Description is required",
                },
                minLength: {
                  value: 3,
                  message: "Description must be at least 3 characters",
                },
              }}
              render={({ field, formState: { errors } }) => (
                <Input
                  label="Description"
                  errors={errors.description?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="rating"
              defaultValue={0}
              rules={{
                required: {
                  value: true,
                  message: "Rating is required",
                },
                min: {
                  value: 1,
                  message: "Rating must be at least 0",
                },
                max: {
                  value: 5,
                  message: "Rating must be at most 5",
                },
              }}
              render={({ field, formState: { errors } }) => (
                <InputNumber
                  label="Year"
                  errors={errors.rating?.message}
                  max={5}
                  min={0}
                  {...field}
                />
              )}
            />
          </InputsContainer>
          <Footer>
            <Button
              text="Delete"
              variant="danger"
              type="button"
              onClick={() => {}}
            />
            <Button text="Save" variant="success" type="submit" />
          </Footer>
        </Fieldset>
      </Form>
    </>
  );
};

const Form = styled.form({
  marginBottom: "1rem",
  backgroundColor: colors.White,
});

const Fieldset = styled.fieldset({
  border: `1px solid ${colors.Gunmetal}`,
  padding: "1rem",
});

const Legend = styled.legend({
  fontWeight: "bold",
});

const Header = styled.div({
  textAlign: "end",
});

const InputsContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1rem",
});

const Footer = styled.footer({
  paddingTop: "1rem",
  textAlign: "end",

  "& button:first-of-type": {
    marginRight: "1rem",
  },
});
