type ErrorProps = {
    message?: string;
  };
  
  export default function Error({ message }: ErrorProps) {
    return (
      <p>
        {message ?? "Something went wrong. Please try again later."}
      </p>
    );
  }
  