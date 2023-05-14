import React from "react";

import styled from "@emotion/styled";
import { Alert } from "grommet-icons";

import { colors } from "../theme/colors";
import { fontWeight } from "../theme";

type Props = {
  label: string;
  name: string;
  value?: string | number;
  errors?: string;
  type?: "text" | "date" | "password" | "search" | "time";
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      name,
      value,
      errors = "",
      type = "text",
      placeholder = "Type here",
      disabled = false,
      onChange,
      ...props
    },
    ref
  ) => {
    const hasDate = value !== "";

    return (
      <Container>
        <FormGroup>
          <Label htmlFor={name}>{label}:</Label>
          <InputBase
            id={name}
            name={name}
            placeholder={placeholder}
            type={type}
            ref={ref}
            onChange={(e) => onChange(e.currentTarget.value)}
            value={value}
            hasDate={hasDate}
            disabled={disabled}
            errors={errors !== ""}
            {...props}
          />
        </FormGroup>
        {errors !== "" && (
          <Error>
            <Alert size="small" />
            {errors}
          </Error>
        )}
      </Container>
    );
  }
);

const Container = styled.div({
  height: "4rem",
});

const FormGroup = styled.div({
  marginBottom: "0.2rem",
});

const Label = styled.label({
  display: "block",
  marginBottom: "0.2rem",
});

type FormGroupProps = {
  hasDate: boolean;
  errors: boolean;
};

const InputBase = styled.input<FormGroupProps>(({ hasDate, errors }) => ({
  border: `1px solid ${errors ? colors.PersianRed : colors.Black}`,
  borderBottom: `2px solid ${errors ? colors.PersianRed : colors.Black}`,
  borderRadius: 0,
  fontSize: "1rem",
  padding: "0",
  paddingLeft: "0.2rem",
  lineHeight: "1.5rem",
  width: "100%",
  fontWeight: fontWeight.regular,
  color: hasDate ? colors.Black : colors.FrenchGrey,

  ":focus": {
    outline: `2px solid ${colors.DenimBlue}`,
  },

  "::placeholder": {
    color: colors.FrenchGrey,
    opacity: 1,
  },

  ":disabled": {
    border: `1px solid ${colors.FrenchGrey}`,
    borderBottom: `2px solid ${colors.FrenchGrey}`,
    color: colors.FrenchGrey,
  },
}));

const Error = styled.small({
  color: colors.PersianRed,
  display: "flex",
  alignItems: "center",

  "& svg, path": {
    fontSize: "1rem",
    marginRight: "0.4rem",
    stroke: colors.PersianRed,
  },
});

export default Input;
