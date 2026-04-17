"use client";
type ErrorProps = {
  error: {
    message: string;
  };
};
export default function Error({ error }: ErrorProps) {
  <p>Could not fetch note details. {error.message}</p>;
}
