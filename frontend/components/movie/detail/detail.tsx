import { Fragment, useContext, useEffect, useState } from "react";

import styled from "@emotion/styled";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { Movie } from "@/types";
import { MovieProvider } from "@/providers";
import { ALERT_SETUP } from "@/constants";
import {
  Alert,
  Button,
  Dropdown,
  Input,
  InputNumber,
  Modal,
  Textfield,
  colors,
} from "@/design-system";
import { useGenre, usePerson } from "@/hooks";

export const Detail = () => {
  const { data: genres } = useGenre();
  const { data: person } = usePerson();
  const [showModal, setShowModal] = useState(false);
  const [modalFooter, setModalFooter] = useState({
    header: "",
    content: "",
    onClick: () => {},
  });
  const context = useContext<MovieProvider.ContextType>(MovieProvider.Context);
  const { control, handleSubmit, reset, getValues } = useForm<Movie>({
    defaultValues: context.movie,
  });

  const onSubmit: SubmitHandler<Movie> = (data) => {
    setModalFooter({
      header: "Save",
      content: "Are you sure you want to save?",
      onClick: saveHandler,
    });
    setShowModal(true);
  };

  const saveHandler = () => {
    context.save(getValues());
    setShowModal(false);
  };

  const deleteHandler = () => {
    if (context.movie !== undefined) {
      context.delete(context.movie.id);
    }
    setShowModal(false);
  };

  const resetHandler = () => {
    reset(context.movie);
    if (context.movie && context.movie.id > 0) {
      context.reset();
    }
  };

  useEffect(() => {
    reset(context.movie);
  }, [reset, context]);

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <Fieldset>
          <Legend>Movie</Legend>
          <Header>
            <Button variant="link-danger" text="Reset" onClick={resetHandler} />
          </Header>
          <InputsContainer>
            <InputsGroup>
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
            </InputsGroup>
            <InputsGroup>
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
                    value: 100,
                    message: "Rating must be at most 100",
                  },
                }}
                render={({ field, formState: { errors } }) => (
                  <InputNumber
                    label="Rating"
                    errors={errors.rating?.message}
                    max={100}
                    min={0}
                    step={1}
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name="runtime"
                defaultValue={0}
                rules={{
                  required: {
                    value: true,
                    message: "Runtime is required",
                  },
                  min: {
                    value: 1,
                    message: "Runtime must be at least 1",
                  },
                }}
                render={({ field, formState: { errors } }) => (
                  <InputNumber
                    label="Runtime"
                    errors={errors.rating?.message}
                    min={0}
                    step={1}
                    {...field}
                  />
                )}
              />
            </InputsGroup>
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
                <Textfield
                  label="Description"
                  errors={errors.description?.message}
                  {...field}
                />
              )}
            />
            <InputsGroup>
              <Controller
                control={control}
                name="genres"
                defaultValue={[]}
                rules={{
                  required: {
                    value: true,
                    message: "Genre is required",
                  },
                }}
                render={({ field, formState: { errors } }) => (
                  <Dropdown
                    label="Genres"
                    options={genres !== undefined ? genres : []}
                    errors={errors.genres?.message}
                    multiple={true}
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name="directors"
                defaultValue={[]}
                rules={{
                  required: {
                    value: true,
                    message: "Director is required",
                  },
                }}
                render={({ field, formState: { errors } }) => (
                  <Dropdown
                    label="Directors"
                    options={person !== undefined ? person : []}
                    errors={errors.directors?.message}
                    multiple={true}
                    {...field}
                  />
                )}
              />
            </InputsGroup>
            <Controller
              control={control}
              name={"image"}
              rules={{ required: "Image is required" }}
              render={({ field }) => {
                return (
                  <input
                    type="file"
                    {...field}
                    value={undefined}
                    onChange={(e) => {
                      field.onChange(e.target.files?.item(0)); // store the File object
                    }}
                  />
                );
              }}
            />
          </InputsContainer>
          <Footer>
            <Button
              text="Delete"
              variant="danger"
              type="button"
              disabled={!!!context.movie?.id}
              onClick={() => {
                if (context.movie?.id) {
                  setModalFooter({
                    header: "Delete",
                    content: "Are you sure do you want to delete?",
                    onClick: deleteHandler,
                  });
                  setShowModal(true);
                }
              }}
            />
            <Button text="Save" variant="success" type="submit" />
          </Footer>
        </Fieldset>
      </Form>
      {showModal && (
        <Modal header={modalFooter.header} content={modalFooter.content}>
          <Button
            text="Cancel"
            onClick={() => setShowModal(false)}
            variant="danger"
            type="button"
          />
          <Button
            text="Ok"
            onClick={() => modalFooter.onClick()}
            variant="success"
            type="button"
          />
        </Modal>
      )}
      {context.status !== "idle" && (
        <Alert
          status={ALERT_SETUP[context.status]}
          reset={context.resetQueryStatus}
        />
      )}
    </Fragment>
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
  gap: "1rem",
});

const InputsGroup = styled.div({
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
